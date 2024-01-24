import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css-file/Section2.css'
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from './Counter'


export default function Carousel() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();


  const [incremented, setIncremented] = useState(false);

  const handleIncrement = () => {
    dispatch(increment());
    setIncremented(true);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setIncremented(true);
  };





  const [sliderRef, setSliderRef] = useState();

  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
         slidesToShow: 2,
        }
       },
       {
        breakpoint: 425,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
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
  <Container fluid className='first-carousel-container'>
    <div className='first-carousel mx-auto'>
      <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='first-carousel-card '>
            <div className='first-carousel-color'>
            <p className='first-carousel-offer'>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} className='first-carousel-image' />
            <p className='first-carousel-title-name'>{card.title}</p>
            <p className='first-carousel-ml'>300ml</p>
            <div className='d-flex' >
            <span className='first-carousel-rating d-flex'>{card.amount}</span> 
            <span className='first-carousel-deleted' ><del>{card.amount}</del></span>

            <div className='d-flex align-items-end'>    
            
      <button className='first-carousel-btn' onClick={handleIncrement}>+</button>
      </div>
        <div>  <p>{counter}</p></div>
        {incremented &&(
      <div>
      <button className='first-carousel-btn' onClick={handleDecrement}>-</button>
           </div>)}
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
}
