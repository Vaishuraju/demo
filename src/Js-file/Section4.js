import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import '../Css-file/Section4.css'

function Section4() {
  return (
    <div>
        <Container fluid className='bg-success mt-5'>
            <Row className='banner-row bg-danger mx-auto'>
                <Col lg={3}>dsjkfasf</Col>
                <Col className='bg-secondary'>

                    <div className='banner-content'>
                        <p>Till 10 Dec, 2021</p>
                        <h4>25% Special Off Today
                            Only for Vegetables
                        </h4>
                        <Button className='first-carousel-button mx-auto'>Show Now</Button>

                    </div>
                </Col>
                <Col className='bg-secondary'>dsjkfasf</Col>
            </Row>

        </Container>
    </div>
  )
}

export default Section4