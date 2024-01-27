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
                <Col className='border'>

                {/* <Dropdown>
      <Dropdown.Toggle className='dropdown' onClick={firstdropdown} aria-controls="example-collapse-text" aria-expanded={open} variant="success" id="dropdown-basic">
      Vegetables
      {open ? <IoIosArrowDown className='arrow-icon'/> : <IoIosArrowForward className='arrow-icon' />} 
      </Dropdown.Toggle>

      <Dropdown.Menu Name='dropdown-lists' in={open}>
        <div className='example-collapse-text'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown> */}
     <div className=' mt-3'>
      <div className='carrot-icons'>
        <div
          className='dropdown '
          onClick={firstDropdown}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Vegetables
          {open ? <IoIosArrowDown className='arrow-icon'/> : <IoIosArrowForward className='arrow-icon' />}
        </div>
        {open && (
          <div className='dropdown-lists' id="example-collapse-text">
            <li>Pears, apples, quinces</li>
            <li>Peaches, plums, apricots</li>
            <li>Grapes</li>
          </div>
        )}
      </div>
    </div>

                </Col>
                <Col className='border'>daf</Col>

            </Row>
        </Container>
    </div>
  )
}

export default Categories2