import React from 'react'
import '../Css-file/Section5.css';
import { Container,Row,Col } from 'react-bootstrap';

function Section5() {
  return (
    <div>
        <Container fluid>
            <Row className='ms-auto'>
                <Col xl={2}></Col>
                <Col className='bg-secondary' xl={4}>gjh</Col>
                <Col className='bg-danger' xl={6}>fdggf</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section5