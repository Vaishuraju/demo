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
import '../Css-file/Sechomepage.css'

function Sechomepage() {
  return (
    <div>
       <Container fluid>
    <Row className='mx-auto'>
       <Col lg={3}>
       <img src={Logo} alt="logo" className='sec-logo' />

       </Col>
       <Col lg={7} className='mx-auto'>
       <InputGroup className='next-input'>
              <Form.Control className='next-input1' placeholder='Search and hit enter...'/>
              <div className='icon'><IoIosSearch /></div>

            
           <select class="dropdown">
           <option className='option1'>All Categories</option>
           <option  className='option'>Car</option>
           <option  className='option' >Clothes</option>
           <option  className='option'>Electronics</option>
           <option  className='option'>Laptop</option>
           <option  className='option'>Desktop</option>
           <option  className='option'>Camera</option>
           <option className='option'>Toys</option >

          </select>
          </InputGroup>
       </Col>
       <Col lg={2}>
       <div><CiUser  className='user-icon'/><IoBagOutline  className='sec-bag' /></div>
       </Col>
    </Row>
    </Container>
    <Container fluid>
      <Row className='mx-auto'>
        <Col className='bg-danger'>df</Col>
        <Col className='bg-secondary'>
        <ul class="dropdown">
            <li><a href='#'>HOME</a>
                <ul class="Service">
                          <li><a href="#">Link2</a></li>
                          <li><a href="#">Link3</a></li>
                </ul>
            </li>
            <li>CONTACT US</li>
        </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Sechomepage