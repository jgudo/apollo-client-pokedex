import logo from '@app/assets/logo.png';
import { Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Filters from './Filters';

export default function Header() {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <Row wrap={false} justify="center" align="middle">
        <Col style={{ textAlign: 'center' }}>
          <Link to="/">
            <img className="logo" src={logo} alt="PokeMo logo" />
          </Link>
          <Typography.Paragraph>Gotta catch 'em all!</Typography.Paragraph>
        </Col>
      </Row>
      <Filters />
    </div>
  )
}
