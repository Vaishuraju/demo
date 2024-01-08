// import React from 'react'
// import Strawberry from '../Image/strawberry.png'
// import Freshline from '../Image/lime.png'
// import Minipapers from '../Image/MiniPeppers.png'
// import { IoMdEye } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa6";
// import Col from 'react-bootstrap/esm/Col';
// import '../Css-file/Section1.css'

// function Section2() {
//   return (
//           <div>
//   <div className="demo">
//   <div className="carousel ms-auto" data-flickity='{ "groupCells": true }'>
//     <div className="carousel-cell">
//         <Col>
//         <div className='full' >
//                     <div className='pt-2'>
//                               <div className='box mx-2  bg-danger'>7% off</div>
//                                  <div className='ms-auto'>
//                                     <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
//                               </div>
//                             <div><img className='lime' src={Freshline} alt='orange'/></div>
//                              <div className='d-flex'>
//                                  <div className=' mx-2'>
//                                       <p className='code2'></p>
//                                       <p className='code1'>300ml</p>
//                                       <p className='code'><span>dfl</span> <span className='cd'>
//                                       <del>djfk</del></span></p>
//                                  </div>
//                                 <div className='plus1 ms-auto'>
//                                      <button className='plus'>-</button>
//                                  <p className='text-center'>4</p>
//                                     <button className='plus'>+</button>
//                                 </div>
//                             </div>
//                         </div>
//         </Col>
//     </div>
//     <div className="carousel-cell">
//     <Col>dfsaf</Col>
//     </div>
//     <div className="carousel-cell">
//     <Col>dfsaf</Col>
//     </div>
//     <div className="carousel-cell">
//     <Col>dfsaf</Col>
//     </div>
//     <div className="carousel-cell">
//     <Col>dfsaf</Col>
//     </div>
//     <div className="carousel-cell">
//          <Col>dfsaf</Col>
//     </div>
//   </div>
//   </div>
//  </div>          
//   )
// }

// export default Section2

import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css-file/Section2.css'

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
        amount:'$135.78',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        offer:'9% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FMiniPeppers.png&w=1920&q=75',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        title: 'Mini Papers',
        amount:'$100.10',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        offer:'6% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75',
        title: 'Fresh Strawberry',
        amount:'$98.70',
        pricingText: 'USD 150/Day',
        features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
      },
      {
        offer:'7% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FLemon.png&w=1920&q=75',
        title: 'Lemon',
        amount:'$215.76',
        pricingText: 'USD 299/Day',
        features: [
          'Free Wifi',
          'Free breakfast',
          'Discounted Meals',
          "MacBook for work use (hotel's property)",
        ],
      },
         {
        offer:'11% off',
        imageSrc: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FOrange.png&w=1920&q=75',
        title: 'Fresh Orange',
        amount:'$145.96',
        features: [
          'Free Wifi',
          'Free breakfast',
          'Discounted Meals',
          "MacBook for work use (hotel's property)",
        ],
      },
    ]
  
  return (
  
    <div className='first-carousel ms-auto'>
      <button onClick={() => sliderRef?.slickPrev()}>
        <FaChevronLeft />
      </button>
      <button onClick={() => sliderRef?.slickNext()}>
        <FaChevronRight />
      </button>
      <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='first-carousel-card '>
            <p>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} />
            <h4>{card.title}</h4>
            <p>300ml</p>
          <div className='d-flex'>
            
            <p>{card.amount}</p>
            <del><p>{card.amount}</p></del>
            </div>
            <ul>
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p>{card.pricingText}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
