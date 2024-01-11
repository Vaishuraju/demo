import React, { useState } from 'react';
import Slider from 'react-slick';
import { IoMdArrowDropright } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css-file/Section2.css'
import { Col, Container, Row } from 'react-bootstrap';


export default function Carousel() {
  const [sliderRef, setSliderRef] = useState();

  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
  };

  const hotelCards = [
      {
        offer:'7% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=1920&q=75',
        title: 'Fresh Line',
        amount:'US$135.78',
      },
      {
        offer:'9% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FMiniPeppers.png&w=1920&q=75',
        title: 'Mini Papers',
        amount:'US$100.10',

      },
      {
        offer:'6% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75',
        title: 'Fresh Strawberry',
        amount:'US$98.70',
      },
      {
        offer:'7% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FLemon.png&w=1920&q=75',
        title: 'Lemon',
        amount:'US$215.76',
    
      },
         {
        offer:'11% off',
        imageSrc: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FOrange.png&w=1920&q=75',
        title: 'Fresh Orange',
        amount:'US$145.96',
      },
    ]
  
  return (
  <Container className='first-carousel-container'>
    <div className='first-carousel ms-auto'>
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
      <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='first-carousel-card '>
            <div className='helo'>
            <p className='first-carousel-offer'>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} className='first-carousel-image' />
            <p className='first-carousel-title-name'>{card.title}</p>
            <p className='first-carousel-ml'>300ml</p>
            <div className='d-flex' >
            <span className='first-carousel-rating d-flex'>{card.amount}</span> 
            <span className='first-carousel-deleted' ><del>{card.amount}</del></span>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
}
