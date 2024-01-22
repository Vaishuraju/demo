import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import '../Css-file/Categories1.css'
import Categorieslogo from '../Image/logo.svg'


function Categories1() {
  return (
    <div>
        <Container className='bg-secondary'>
            <Row className='footer mx-auto bg-danger '>
              <Col lg={6}>dfk;f</Col>
                <Col className='bg-success'lg={6} md={6} sm={12}>
                <div> <img src={Categorieslogo} alt="logo" className='logo' /></div>
                </Col>
                <Col lg={6} md={6} sm={12}>dfsaf</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Categories1