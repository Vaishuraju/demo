// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Logo from '../Image/logo.svg'
// import Form from 'react-bootstrap/Form';
// import { CiUser } from "react-icons/ci";
// import { IoBagOutline } from "react-icons/io5";
// import { IoIosSearch } from "react-icons/io";
// import InputGroup from 'react-bootstrap/InputGroup';
// import '../Css-file/Sechomepage.css'

// function Categories() {
//   return (
//     <div>
//        <Container fluid>
//     <Row className='mx-auto'>
//        <Col lg={3}>
//        <img src={Logo} alt="logo" className='sec-logo' />

//        </Col>
//        <Col lg={7} className='mx-auto'>
//        <InputGroup className='next-input'>
//               <Form.Control className='next-input1' placeholder='Search and hit enter...'/>
//               <div className='icon'><IoIosSearch /></div>

            
//            <select class="dropdown">
//            <option className='option1'>All Categories</option>
//            <option  className='option'>Car</option>
//            <option  className='option' >Clothes</option>
//            <option  className='option'>Electronics</option>
//            <option  className='option'>Laptop</option>
//            <option  className='option'>Desktop</option>
//            <option  className='option'>Camera</option>
//            <option className='option'>Toys</option >

//           </select>
//           </InputGroup>
//        </Col>
//        <Col lg={2}>
//        <div><CiUser  className='user-icon'/><IoBagOutline  className='sec-bag' /></div>
//        </Col>
//     </Row>
//     </Container>
//     <Container fluid>
//       <Row className='mx-auto'>
//         <Col className='bg-danger'>df</Col>
//         <Col className='bg-secondary'>
//         <ul class="dropdown">
//             <li><a href='#'>HOME</a>
//                 <ul class="Service">
//                           <li><a href="#">Link2</a></li>
//                           <li><a href="#">Link3</a></li>
//                 </ul>
//             </li>
//             <li>CONTACT US</li>
//         </ul>
//         </Col>
//       </Row>
//     </Container>
//     </div>
//   )
// }

// export default Categories

import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../Css-file/Categories.css'
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import USA  from '../Image/usa.png'
import BN from '../Image/bd.png'
import HN from '../Image/in.png'
import EUR from '../Image/uk.png'



function Categories() {
  return (
    <div>


    <div className='categories-home'>
      <Container>
        <Row className='categories-row'>
          <Col sm={4} md={6} lg={6} className='container-col' >
            <div className='d-flex'>
          <HiOutlinePhone className='white-icon'/><div className='white-text'>+88012 3456 7894</div>
          <CiMail  className='mail-icon'/>
          <div className='white-text'>support@ui-lib.com</div>
          </div>
          </Col>
          <Col sm={4} md={3}lg={3} className=''>
          <div className='d-flex'>
             <div className='d-flex categories-section d-none d-sm-none d-md-none d-lg-block'>
                    <span className='d-flex categories-para'>Theme FAQ"s</span>
              </div>
             <div className='d-flex categories-section d-none d-sm-none d-md-none d-lg-block'>

                    <span className='d-flex categories-para'>Need Help?</span>
            </div>
            </div>
          </Col>
          
    <Col sm={4} lg={3} className='ms-auto'>
    <Dropdown >
  
      <Dropdown.Toggle id="dropdown-basic">
      <img className='usa-image' src={USA} alt='usa'/>
            EN
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-list'>
        <Dropdown.Item className='dropdown-list-sub'>
        <img className='sub-image' src={USA} alt='usa'/>EN
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-list-sub'>        
        <img className='sub-image' src={BN} alt='usa'/>BN
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-list-sub'>

        <img className='sub-image' src={HN} alt='usa'/>HN</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

       
    <Dropdown>
  
      <Dropdown.Toggle id="dropdown-basic">
      <img className='usa-image' src={USA} alt='usa'/>
            USD
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-list'>
      <Dropdown.Item className='dropdown-list-sub'>
        <img className='sub-image' src={USA} alt='usa'/>USD
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-list-sub'>
        <img className='sub-image' src={EUR} alt='usa'/>EUR
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-list-sub'>        
        <img className='sub-image' src={BN} alt='usa'/>BDT
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-list-sub'>

        <img className='sub-image' src={HN} alt='usa'/>INR</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Col>
        </Row>
      </Container>
    </div>

 
    </div>
  )
}

export default Categories




        