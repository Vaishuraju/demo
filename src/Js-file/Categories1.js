import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Image/logo.svg'
import Form from 'react-bootstrap/Form';
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import '../Css-file/Categories1.css'

function Categories1() {
 
  return (
    <div>
       <Container >
    <Row>
       <Col lg={3}  className=''>
       <img src={Logo} alt="logo" className='sec-logo' />

       </Col>
       <Col lg={7} className='mx-auto bg-danger'>

       <InputGroup className='categories-input'>
              <Form.Control className='categories-sub-input' placeholder='Search and hit enter...'/>
              <div className='categories-icon'><IoIosSearch /></div>
    
             <div> 
          <InputGroup>      
             <Form.Select className='categories-form'>
              <option className='categories-option'>All Categories</option>
              <option className='categories-option' value="1">Car</option>
              <option className='categories-option' value="2">Clothes</option>
              <option className='categories-option' value="3">Electronics</option>
              <option className='categories-option' value="2">Laptop</option>
            </Form.Select>
            </InputGroup> 

            </div>
        

          </InputGroup>
       </Col>
       <Col lg={2}>
       <div><CiUser  className='user-icon'/><IoBagOutline  className='sec-bag' /></div>
       </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Categories1