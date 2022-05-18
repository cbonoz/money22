import React from 'react'
import { Card } from 'antd';


export default function InvestmentCard({title, children}) {
  return (
    <Card title={title} style={{ width: 300 }}>
      {children}
  </Card>

  )
}
