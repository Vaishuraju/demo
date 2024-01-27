import React, { useState } from 'react'
import '../Css-file/Categories2.css'
import { Container, Row , Col } from 'react-bootstrap'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import Collapse from 'react-bootstrap/Collapse';




function Categories2() {
  const [open, setOpen] = useState(false);

  const firstDropdown = () => {
    // Your logic for handling the dropdown click
    setOpen(!open); // Toggles the open state
  };
  
  
  return (
    <div className='categories mt-2'>
        <Container>
            <Row>
                <Col className='categories2-col bg '>
     <div className='mt-3'>
        <div
          className='categories2-label'
          onClick={firstDropdown}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Vegetables
          {open ? <IoIosArrowDown className='arrow-icon'/> : <IoIosArrowForward className='arrow-icon' />}
        </div>
        {open && (
          <div className='categories2-dropdown' id="example-collapse-text">
            <li>Pears, apples, quinces</li>
            <li>Peaches, plums, apricots</li>
            <li>Grapes</li>
          </div>
        )}
    </div>

                </Col>
                <Col className='border'>daf</Col>

            </Row>
        </Container>
    </div>
  )
}

export default Categories2