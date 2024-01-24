import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Image/logo.svg'
import Form from 'react-bootstrap/Form';
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import '../Css-file/Categories1.css'
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

function Categories1() {
  const [dropdownItems, setDropdownItems] = useState([
    { key: 'action-1', label: 'Action' },
    { key: 'action-2', label: 'Another action' },
    { key: 'action-3', label: 'Something else' },
  ]);

  const handleItemClick = (eventKey) => {
    // Perform your operation based on the selected item
    console.log(`Clicked on item with event key: ${eventKey}`);
    // Add your custom logic here
  };

  const changeList = (newItems) => {
    setDropdownItems(newItems);
  };

  const defaultList = [
    { key: 'action-1', label: 'Action' },
    { key: 'action-2', label: 'Another action' },
    { key: 'action-3', label: 'Something else' },
  ];

  const newList = [
    { key: 'new-action-1', label: 'New Action 1' },
    { key: 'new-action-2', label: 'New Action 2' },
    { key: 'new-action-3', label: 'New Something Else' },
  ];
  return (
    <div>
       <Container >
    <Row>
       <Col lg={3}  className=''>
       <img src={Logo} alt="logo" className='sec-logo' />

       </Col>
       <Col lg={7} className='mx-auto'>
       <InputGroup className='categories-input'>
              <Form.Control className='categories-sub-input' placeholder='Search and hit enter...'/>
              <div className='categories-icon'><IoIosSearch /></div>


              <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'
                onClick={() => changeList(newList)}>
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {dropdownItems.map((item) => (
                    <Dropdown.Item
                      key={item.key}
                      eventKey={item.key}
                      onClick={() => {
                        handleItemClick(item.key);
                      }}
                    >
                    hello
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
    
    
          </InputGroup>
       </Col>
       <Col lg={2}>
       <div><CiUser  className='user-icon'/><IoBagOutline  className='sec-bag' /></div>
       </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Categories1