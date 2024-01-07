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








function Section3() {

  let data=[{percentage:"7% off",head:"Fresh Line",us:"US$135.78", id:"US$7.00",
            percentage1:"6% off", head1:"Fresh Strawberry",us1:"US$98.70",id1:"US$6.00"}]
  return (
    
    <div>
          <Navbar/>
         <Homepage/>
          <Section1/>
   
        <Container fluid className='navbar first-section ' lg={12} md={6}>
            <Row className='mx-auto'>
                <Col>
                    <div className='Col'>
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
                <li className='list mt-2'> <GiFrozenOrb /><Link className='list' to="/link1">Vegetables</Link></li>
                <li className='list mt-2'> <GiFrozenOrb /><Link className='list' to="/link1"></Link></li>
          
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
          
              </ul>
        </div>
           </Col>
         </Row>
        </Container>
{/*      
         {data.map((item) => (
        
          <Four
             percentage={item.percentage}
             head={item.head}
             us={item.us}
             id={item.id}

             percentage1={item.percentage1}
             head1={item.head1}
             us1={item.us1}
             id1={item.id1}
          />
          
         ))}   */}
         <Section2/>

    </div>
  )
}

export default Section3;
