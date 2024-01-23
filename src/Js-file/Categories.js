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
          <Col xs={6} sm={6} md={6} lg={6} className='categories-col' >
            <div className='d-flex'>
          <HiOutlinePhone className='white-icon'/><div className='white-text'>+88012 3456 7894</div>
          <CiMail  className='mail-icon'/>
          <div className='white-text'>support@ui-lib.com</div>
          </div>
          </Col>
          <Col xs={6} sm={4} md={6}lg={6} className='categories-col1'>
          <div className='d-flex '>
             <div className='d-flex categories-section d-none d-sm-none d-md-none d-lg-block ms-auto'>
                    <span className='d-flex categories-para'>Theme FAQ"s</span>
              </div>
             <div className='d-flex categories-section d-none d-sm-none d-md-none d-lg-block'>

                    <span className='d-flex categories-para '>Need Help?</span>
            </div>
          
        
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
    </div>
          </Col>
        </Row>
      </Container>
    </div>

 
    </div>
  )
}

export default Categories




        