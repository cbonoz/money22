import { Waku, WakuMessage } from "js-waku";
import * as React from "react";
import protobuf from "protobufjs";
import { Button, Input } from "antd";
import { renderDate } from "../util";

const ContentTopic = `/relay-reactjs-chat/1/chat/proto`;

const SimpleChatMessage = new protobuf.Type("SimpleChatMessage")
  .add(new protobuf.Field("timestamp", 1, "uint64"))
  .add(new protobuf.Field("text", 2, "string"));

function Chat({address}) {
  const [waku, setWaku] = React.useState(undefined);
  const [wakuStatus, setWakuStatus] = React.useState("None");
  // Using a counter just for the messages to be different
  const [sendCounter, setSendCounter] = React.useState(0);
  const [messages, setMessages] = React.useState([]);

  const [msg, setMsg] = React.useState()

  React.useEffect(() => {
    if (!!waku) return;
    if (wakuStatus !== "None") return;

    setWakuStatus("Starting");

    Waku.create({ bootstrap: { default: true } }).then((waku) => {
      setWaku(waku);
      setWakuStatus("Connecting...");
      waku.waitForRemotePeer().then(() => {
        setWakuStatus("Ready");
      });
    });
  }, [waku, wakuStatus]);

  const processIncomingMessage = React.useCallback((wakuMessage) => {
    if (!wakuMessage.payload) return;

    const { text, timestamp } = SimpleChatMessage.decode(wakuMessage.payload);

    const time = new Date();
    time.setTime(timestamp);
    const message = { text, timestamp: time };

    setMessages((messages) => {
      return [message].concat(messages);
    });
  }, []);

  React.useEffect(() => {
    if (!waku) return;

    // Pass the content topic to only process messages related to your dChat
    waku.relay.addObserver(processIncomingMessage, [ContentTopic]);

    // `cleanUp` is called when the component is unmounted, see ReactJS doc.
    return function cleanUp() {
      waku.relay.deleteObserver(processIncomingMessage, [ContentTopic]);
    };
  }, [waku, wakuStatus, processIncomingMessage]);

  const sendMessageOnClick = () => {
    // Check Waku is started and connected first.
    if (wakuStatus !== "Ready") return;

    if (!msg) {
        alert('Message must be nonempty')
    }

    const shortAddress = `${address.substr(0, 6)}**`
    const text = `${shortAddress}: ${msg}`

    const time = new Date().getTime();


    sendMessage(text, waku, time).then(() =>
      console.log("Message sent")
    );

    setMsg('')
    const message = { text, timestamp: time };
    setMessages((messages) => {
        return [message].concat(messages);
    });

    // For demonstration purposes.
    setSendCounter(sendCounter + 1);
  };

  return (
    <div className="Chat">
      <header className="Chat-header">
        <p>{wakuStatus}</p>
        <Input value={msg} onChange={(e) => setMsg(e.target.value)}/>
        <Button className="standard-btn" type="primary" onClick={sendMessageOnClick} disabled={wakuStatus !== "Ready"}>
          Send Message
        </Button>
        <ul>
          {messages.map((m) => {
            return (
              <li>
                <p>
                  {renderDate(m.timestamp)} - {m.text}
                </p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

function sendMessage(message, waku, time) {


  // Encode to protobuf
  const protoMsg = SimpleChatMessage.create({
    timestamp: time,
    text: message,
  });
  const payload = SimpleChatMessage.encode(protoMsg).finish();

  // Wrap in a Waku Message
  return WakuMessage.fromBytes(payload, ContentTopic).then((wakuMessage) =>
    // Send over Waku Relay
    waku.relay.send(wakuMessage)
  );
}

export default Chat;