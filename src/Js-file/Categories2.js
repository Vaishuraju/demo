import React from 'react'
import '../Css-file/Categories2.css'
import { Container, Row , Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';



function Categories2() {

  
  
  return (
    <div className='categories mt-2'>
        <Container>
            <Row>
                <Col className='border'>


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


                </Col>
                <Col className='border'>daf</Col>

            </Row>
        </Container>
    </div>
  )
}

export default Categories2