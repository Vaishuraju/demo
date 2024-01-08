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
        imageSrc:
          'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        title: 'Studio Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 50/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        offer:'9% off',
        imageSrc:
          'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 80/Day',
        features: ['Free Wifi', 'Free breakfast'],
      },
      {
        offer:'6% off',
        imageSrc:
          'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'King Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 150/Day',
        features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
      },
      {
        offer:'6% off',
        imageSrc:
          'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Royal Suite',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 299/Day',
        features: [
          'Free Wifi',
          'Free breakfast',
          'Discounted Meals',
          "MacBook for work use (hotel's property)",
        ],
      },
      {
        offer:'7% off',
        imageSrc:
          'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Royal Suite',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
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
        imageSrc:
          'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Royal Suite',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 299/Day',
        features: [
          'Free Wifi',
          'Free breakfast',
          'Discounted Meals',
          "MacBook for work use (hotel's property)",
        ],
      },
    ]
  
  return (
    <div className='content'>
      <button onClick={() => sliderRef?.slickPrev()}>
        <FaChevronLeft />
      </button>
      <button onClick={() => sliderRef?.slickNext()}>
        <FaChevronRight />
      </button>
      <Slider ref={(slider) => setSliderRef(slider)} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index}>
            <p>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} />
          
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <ul>
              {card.features.map((feature, index) => (
                <li key={index}>feature}</li>
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
