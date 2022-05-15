import React, {useState} from 'react'
import { Button, Input } from 'antd'
import { clearbitUrl } from '../util'

export default function FindCompany({update}) {
    const [value, setValue] = useState()
    const [domain, setDomain] = useState()
    const [confirmed, setConfirmed] = useState(false)

    const next = () => {
      setConfirmed(true)
      update('domain', domain)
    }


  return (
    <div>
        {!confirmed && <div><Input type="text"  className='standard-input' value={value} onChange={e => setValue(e.target.value)}/>
        <Button type="primary"  className='standard-btn' onClick={() => setDomain(value)} disabled={!value}> 
            Search
        </Button></div>}

        {domain && <div>
          <img src={clearbitUrl(domain)} className='company-image'/>
          {confirmed && <span><b>{domain}</b></span>}
          {!confirmed && <div><p>Is this your company logo?</p>
            <br/>
            <Button className='standard-btn' type="default" onClick={next}>Yes</Button>
          </div>}
        </div>}
    </div>
  )
}
