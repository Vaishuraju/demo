import React from 'react'
import '../Css-file/Section5.css';
import { Container,Row,Col } from 'react-bootstrap';
import Bonik from '../Image/logo.svg'
import Gpay from '../Image/Google_Play.webp'
import Appstore from '../Image/appstore.png'
import { FaFacebook } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { FaYoutubeSquare } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";




function Section5() {
  return (
    <div>
        <Container fluid>
            <Row className='footer-section mx-auto' >
                <Col className='border' xl={6}>
                  <div>
                    <img src={Bonik} alt='image'/>
                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris 
                       nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                       <div className='footer-section-image d-flex'>
                       <img src={Gpay} alt='img'/>
                       <img src={Appstore} alt='img'/>
                       </div>
                  </div>
                </Col>
                <Col className='border text-white' xl={6}>
                  <div className='footer-section-list'>
                  <li className='mt-2'>Help Center</li>
                  <li  className='mt-2'>Tract Your Order</li>
                  <li  className='mt-2'>Corporate & Bulk Purchasing</li>
                  <li  className='mt-2'>Returns & Refunds</li>
                  </div>
                  <div className='d-flex'>
                  <FaFacebook />
                  <CgTwitter />
                  <FaYoutubeSquare />
                  <ImGoogle3 />
                  <FaInstagramSquare />



                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Section5