import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../Css-file/Link1.css'
import { HiOutlinePhone } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import Sechomepage from './Sechomepage';
import { Dropdown } from 'bootstrap';



function Link1() {
  return (
    <div>


    <div className='blue'>
      <Container className='width'>
        <Row className=''>
          <Col className='container-col' >
            <div className='d-flex'>
          <HiOutlinePhone className='white-icon'/><div className='white-text'>+88012 3456 7894</div>
          <CiMail  className='mail-icon'/>
          <div className='white-text'>support@ui-lib.com</div>
          </div>
          </Col>
          <Col className=''>
          <div className='d-flex'>
             <div className='right-white-text'>Theme FAQ"s</div>
             <div className='right-white-text'>Need Help?</div>
             <select>
              <option className='option'>djjf</option>
              <option>djjf</option>
              <option>djjf</option>
              <option>djjf</option>
              <option>djjf</option>
             </select>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
 <Sechomepage/>
 
    </div>
  )
}

export default Link1




        