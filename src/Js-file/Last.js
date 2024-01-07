import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './Last.css'
import Logo from './Image/logo.svg'


function Last() {
  return (
    <div>
        <Container className='bg-secondary'>
            <Row className='footer mx-auto bg-danger '>
              <Col lg={6}>dfk;f</Col>
                <Col className='bg-success'lg={6} md={6} sm={12}>
                <div> <img src={Logo} alt="logo" className='logo' /></div>
                </Col>
                <Col lg={6} md={6} sm={12}>dfsaf</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Last