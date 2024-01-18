import React from 'react';
import '../Css-file/Section2.css'
import '../Css-file/Section2sub.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';





function Section2sub3() {

  const hotelCards = [
      {
        offer:'7% off',
    imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FRed%20apple.png&w=1920&q=75',
        title: 'Red Apple',
        amount:'US$135.78',
      },
      {
        offer:'9% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FLemon.png&w=1920&q=75',
        title: 'Lemon',
        amount:'US$196.56',

      },
      {
        offer:'6% off',
        imageSrc:'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2FOffer%20Card.png&w=1920&q=75',
        title: 'Offer Fruits',
        amount:'US$174.24',
      },

    ]
  
  return (
    <Container className='first-carousel-container'>
    <div className='first-carousel ms-auto'>
     
        {hotelCards.map((card, index) => (
          <div key={index} className='first-carousel-card1 '>
            <div className='first-carousel-color'>
            <p className='first-carousel-offer'>{card.offer}</p>
            <img src={card.imageSrc} alt={card.title} className='first-carousel-image-fruit' />
            <p className='first-carousel-title-name'>{card.title}</p>
            <p className='first-carousel-ml'>300ml</p>
            <div className='d-flex' >
            <span className='first-carousel-rating d-flex'>{card.amount}</span> 
            <span className='first-carousel-deleted' ><del>{card.amount}</del></span>
            </div>
            </div>
          </div>
           
        ))}

    </div>
    <Button className='first-carousel-button mx-auto'>Load More...</Button>
    </Container>
  );
}

export default Section2sub3