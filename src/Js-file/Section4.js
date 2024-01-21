import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import '../Css-file/Section4.css'
import vegetables from '../Image/vagitable.png'

function Section4() {
  return (
    <div>
        <Container fluid className='banner-container'>
            <Row className='banner-row mx-auto'>
                <Col lg={7}  className='banner-col'>
                    <div className='banner-content'>
                        <p className='banner-para'>Till 10 Dec, 2021</p>
                        <h1 className='banner-heading'>25% Special Off Today
                            Only for Vegetables
                        </h1>
                        <Button className='first-carousel-button mt-4'>Shop Now</Button>

                    </div>
                </Col>
                <Col lg={5} className='banner-col'>
                    <div >
                    <img className='banner-image' src={vegetables} alt='veg'/>
                    </div>
                 </Col>
            </Row>

        </Container>
    </div>
  )
}

export default Section4