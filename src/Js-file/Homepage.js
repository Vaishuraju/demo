
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Right from '../Image/right.png'
import Left from '../Image/left.png'
import '../Css-file/Homepage.css'
 

function Homepage() {
  return (
    <div>
    <Container fluid className='first-section' >
      <Row className='mx-auto'>
        <Col>
        <div className='heading text-center'>
            <h1 className='head'>Get your grocery delivery
            <br />within 30 minutes</h1>
        </div>
        <div class="col-md-6 mx-auto mt-3">
        
      <InputGroup className='second-input mx-auto'>
              <Form.Control className='input2' placeholder='Search and hit enter...'/>
            
              <Button className='btn-second' variant="outline-secondary text-white">Search</Button>
          </InputGroup>
        </div>
        </Col>
      </Row>
      <div className='img'>
      <img src={Left} class="float-left" alt="veg"/>
         <img src={Right} class=" float-right" alt="veg"/>
         </div>
      </Container>
      
      </div>
  )
}

export default Homepage