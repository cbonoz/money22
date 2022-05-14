import React, {useState} from 'react'
import { Button, Input } from 'antd'
import { clearbitUrl } from '../util'

export default function FindCompany() {
    const [value, setValue] = useState()
    const [domain, setDomain] = useState()

    const next = () => {

    }


  return (
    <div>
        <Input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <Button type="primary" onClick={() => setDomain(value)}> 
            Search
        </Button>

        {domain  && <div>

            <img src={clearbitUrl(domain)} className='company-image'/>
        <Button type="secondary" onClick={next}>Continue</Button>

            </div>}
    </div>
  )
}
