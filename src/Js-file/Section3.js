import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom';
import { LuMilk } from "react-icons/lu";
import { GiFrozenOrb } from "react-icons/gi";
import { GiPopcorn } from "react-icons/gi";
import { GiHoneyJar } from "react-icons/gi";
import { CiPillsBottle1 } from "react-icons/ci";
import Section1 from './Section1.js';
import Homepage from './Homepage.js';
import Navbar from './Navbar.js';
import Section2 from './Section2.js';
import '../Css-file/Section3.css'
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { PiCarrotThin } from "react-icons/pi";
import Collapse from 'react-bootstrap/Collapse';
import { IoMdArrowDropright } from "react-icons/io";
import Section2sub from './Section2sub.js';




function Section3() {


  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);

  }

  
  return (
    
    <div>
        <Navbar/>
        <Homepage/>
         <Section1/>
   
        <Container fluid className='navbar first-section '>
            <Row className='mx-auto'>
                <Col lg={3} className='sidenav-bar'>
                    <div className='col-scroll'>
                    <h6 className='categories'>Top Categories
                        <div className='code'>
                            <span className='bor-1 ' ></span>
                            <span className=' bor-2'></span>
                        </div>
                     </h6> 
    
             <ul className='order'>
                <li className='list mt-2'><LuMilk /><Link className='list' to="/link1">Dariry & Eggs</Link></li>
                <li className='list mt-2'> <GiFrozenOrb /><Link className='list' to="/link1">Breakfast</Link></li>
                <li className='list mt-2'> <GiPopcorn /><Link className='list' to="/link1">Frozen</Link></li>
                
                <li className='carrot-icon'><PiCarrotThin />
               <div className='dropdown'
                  onClick={toggleCollapse}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  variant="outline-primary" // You can customize the variant as needed
                >gkhjkhjkh
                  {open ? <IoIosArrowDown /> : <IoIosArrowForward />} 
                </div>
                <Collapse in={open}>
                  <div id="example-collapse-text">
                  <li>jdfsflkjalf</li>
                  <li>jdfsflkjalf</li>
                  <li>jdfsflkjalf</li>
                  </div>
                </Collapse>
                </li>
            </ul>
              <h6 className='categories'>Top Categories
                        <div className='code'>
                            <span className='bor-1 ' ></span>
                            <span className=' bor-2'></span>
                        </div>
                     </h6> 

                     <ul className='order'>
                <li className='list mt-2'><LuMilk /><Link className='list' to="/link1">Dariry & Eggs</Link></li>
                <li className='list mt-2'> <GiFrozenOrb /><Link className='list' to="/link1">Breakfast</Link></li>
                <li className='list mt-2'> <GiPopcorn /><Link className='list' to="/link1">Frozen</Link></li>
                <li className='list mt-2'> <GiHoneyJar /><Link className='list' to="/link1">Organic</Link></li>
                <li className='list mt-2'> <CiPillsBottle1 /><Link className='list' to="/link1">Canned Food</Link></li>
                <li className='list mt-2'> <GiHoneyJar /><Link className='list' to="/link1">Coffee & Snacks</Link></li>
                <li className='list mt-2'> <GiHoneyJar /><Link className='list' to="/link1">Sauces & Jems</Link></li>
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum

Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </ul>
        </div>
           </Col>
           <Col lg={9}>
           <Row className='first-carousel-row'>
      <Col md={6}>
      <div>     
      <h3 className='first-carousel-products'>Popular Products</h3>
      <p className='first-carousel-collections'>Best collection in 2021 for you!</p>
      </div>

      </Col>
      <Col className="first-carousel-col"md={6}>
        <div className='first-carousel-viewbtn'>
          <span>View all<IoMdArrowDropright /></span>

        </div>
      </Col>
      </Row>
    
           <Section2/>
           <Row className='first-carousel-row'>
      <Col md={6}>
      <div>     
      <h3 className='first-carousel-products'>Trending Products</h3>
      <p className='first-carousel-collections'>Best collection in 2021 for you!</p>
      </div>

      </Col>
      <Col className="first-carousel-col"md={6}>
        <div className='first-carousel-viewbtn'>
          <span>View all<IoMdArrowDropright /></span>

        </div>
      </Col>
      </Row>
           <Section2/>
           <Row className='first-carousel-row'>
      <Col md={6}>
      <div>     
      <h3 className='first-carousel-products'>All Products</h3>
      <p className='first-carousel-collections'>Best collection in 2021 for you!</p>
      </div>

      </Col>
      <Col className="first-carousel-col"md={6}>
        <div className='first-carousel-viewbtn'>
          <span>View all<IoMdArrowDropright /></span>

        </div>
      </Col>
      </Row>
           <Section2sub/>
           </Col>
         </Row>
        </Container>


    </div>
  )
}

export default Section3;
