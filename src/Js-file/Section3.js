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
import Section2sub1 from './Section2sub1.js';
import Section2sub2 from './Section2sub2.js'
import Section2sub3 from './Section2sub3.js';




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
            <Row className='nav-row mx-auto'>
                <Col lg={3} className='sidenav-bar sticky-top d-none d-md-none d-xl-block'>
                    <div className='col-scroll'>
                    <h6 className='categories'>Top Categories
                        <div className='code'>
                            <span className='bor-1 ' ></span>
                            <span className=' bor-2'></span>
                        </div>
                     </h6> 
    
             <ul className='order'>
                <li className='list mt-2'><LuMilk className='list-icon' /><Link className='list' to="/link1">Dariry & Eggs</Link></li>
                <li className='list mt-2'> <GiFrozenOrb className='list-icon' /><Link className='list' to="/link1">Breakfast</Link></li>
                <li className='list mt-2'> <GiPopcorn className='list-icon' /><Link className='list' to="/link1">Frozen</Link></li>
              <div className='d-flex'> 
              <div className='d-flex'>               
                 <li className='carrot-icon'><PiCarrotThin className='list-icon' />
             

               <div className='dropdown '
                  onClick={toggleCollapse}
                  aria-controls="example-collapse-text"
                  aria-expanded={open} >Vegetables
                  {open ? <IoIosArrowDown /> : <IoIosArrowForward />} 
                </div>
                <Collapse className='dropdown-list'  in={open}>
                  <div id="example-collapse-text">
                  <li >Pears, apples, quinces</li>
                  <li>Peaches, plums, apricots</li>
                  <li>Grapes</li>
                  </div>
                </Collapse>
                </li>
                </div>
                </div> 
            </ul>
              <h6 className='categories'>Top Categories
                        <div className='code'>
                            <span className='bor-1 ' ></span>
                            <span className=' bor-2'></span>
                        </div>
                     </h6> 

               <ul className='order'>
                <li className='list mt-2'><LuMilk className='list-icon' /><Link className='list' to="/link1">Dariry & Eggs</Link></li>
                <li className='list mt-2'> <GiFrozenOrb className='list-icon' /><Link className='list' to="/link1">Breakfast</Link></li>
                <li className='list mt-2'> <GiPopcorn className='list-icon' /><Link className='list' to="/link1">Frozen</Link></li>
                <li className='list mt-2'> <GiHoneyJar className='list-icon' /><Link className='list' to="/link1">Organic</Link></li>
                <li className='list mt-2'> <CiPillsBottle1 className='list-icon' /><Link className='list' to="/link1">Canned Food</Link></li>
                <li className='list mt-2'> <GiHoneyJar className='list-icon'/><Link className='list' to="/link1">Coffee & Snacks</Link></li>
                <li className='list mt-2'> <GiHoneyJar className='list-icon' /><Link className='list' to="/link1">Sauces & Jems</Link></li>
              </ul>

        </div>
           </Col>
           <Col className='Productss' lg={9}>
           <Row className='first-carousel-row'>
      <Col md={6}>
      <div>     
      <h3 className='first-carousel-products'>Popular Products</h3>
      <p className='first-carousel-collections'>Best collection in 2021 for you!</p>
      </div>

      </Col>
      <Col className="first-carousel-col"md={6}>
        <div className='first-carousel-viewbtn'>
          <span>View all<IoMdArrowDropright  /></span>

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
           <Section2sub1/>
           <Section2sub2/>

           <Section2sub3/>

           </Col>
         </Row>
        </Container>


    </div>
  )
}

export default Section3;
