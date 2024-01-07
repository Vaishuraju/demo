import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from '../Image/logo.svg'
import { IoIosSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import '../Css-file/Navbar.css'


function Navbar() {
  return (
    <div>
 

<div class="first container-fluid  ">
  <div class="row mx-auto">
    <div class="col1" >
      <div class="d-none d-md-none d-lg-block mt-2">
          <img src={Logo} alt="logo" className='logo' />
      </div>  
    </div>
    <div class="col-md-6  mt-2 b-danger"  >
          <InputGroup className='input'>
              <Form.Control className='input1' placeholder='Search and hit enter...'/>
              <div className='icon'><IoIosSearch /></div>
              <Button className='button1' variant="outline-secondary text-white">Search</Button>
          </InputGroup>
    </div>
    <div class="col3 d-flex flex-row ">
      <div class="second-icons d-none d-md-none d-lg-block mt-2  ">
         <div className='nav-icon'><CiUser  className='user'/><IoBagOutline  className='bag ' /></div>
      </div> 
    </div>
  </div>
</div> 
  
    </div>
  )
}

export default Navbar