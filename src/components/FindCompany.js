import React, {useState} from 'react'
import { Button, Input } from 'antd'
import { clearbitUrl } from '../util'

const { Search } = Input;


export default function FindCompany({heading="Select company:", update}) {
    const [value, setValue] = useState()
    const [domain, setDomain] = useState()
    const [confirmed, setConfirmed] = useState(false)

    const next = (d) => {
      setConfirmed(true)
      update(d)
    }


  return (
    <div>
        {!confirmed && <div>
          {heading && <h3>{heading}</h3>}
          <Search
            placeholder="Enter company domain"
            value={value}
            onChange={e => setValue(e.target.value)}
            allowClear
            enterButton="Search"
            size="large"
            onSearch={() => setDomain(value)}
          />
        </div>}

        {domain && <div>
          <img src={clearbitUrl(domain)} className='company-image' alt="Company Image"/>
          {confirmed && <div>Company: <b>{domain}</b></div>}
          {!confirmed && <div><p>Is this your company logo? Will be blank if no logo was found.
          </p>
            <Button className='standard-btn' type="default" onClick={() => next(domain)}>Yes</Button>
          </div>}
        </div>}
    </div>
  )
}
