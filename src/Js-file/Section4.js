import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import '../Css-file/Section4.css'
import vegetables from '../Image/vagitable.png'

function Section4() {
  return (
    <div  fluid className='banner-container'>
        <Container fluid className='p-5'>
            <Row className='banner-row mx-auto'>
                <Col xl={3}></Col>
                <Col xl={4} lg={6}  className='banner-col'>

                    <div className='banner-content'>
                        <p>Till 10 Dec, 2021</p>
                        <h1 className='banner-heading'>25% Special Off Today
                            Only for Vegetables
                        </h1>
                        <Button className='first-carousel-button mt-5'>Shop Now</Button>

                    </div>
                </Col>
                <Col xl={5} lg={6}    className='banner-col'>
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