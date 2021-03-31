import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Filters from './Filters'

export default function Header() {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <Row wrap={false} justify="center" align="middle">
        <Col style={{ textAlign: 'center' }}>
          <Link to="/">
            <Typography.Title level={1}>PokéMo</Typography.Title>
          </Link>
          <Typography.Paragraph>Gotta catch 'em all!</Typography.Paragraph>
        </Col>
      </Row>
      <Filters />
    </div>
  )
}
