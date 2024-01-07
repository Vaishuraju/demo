
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Market from '../Image/market.png'
import Deliver from '../Image/delivery.png'
import Timer  from '../Image/timer.png'
import Payment from '../Image/payment.png'
import '../Css-file/Section1.css'

function Section1() {
  return (

<div>

  <Container fluid className='th first-section'>
      <Row className='sub mx-auto'>
         <Col className='main   px-3' sm={12} md={6}>
            <div className='px-2 color'>
               <div className='step d-flex'>
               <img src={Deliver} alt='image' className='deliver'/>
                  <div className='para d-flex'>
                           <p className='para1'><strong>Fast Delivery</strong><br/> <span className='light'>Start from $10</span></p>
                   </div>  
                </div> 
            </div>
          </Col>
         <Col className='main  px-3' sm={12} md={6}>
        <div className='color'>           
           <div className='step d-flex'>
               <img src={Market} alt='image' className='market'/>
                  <div className='para d-flex'>
                     <p className='para1'><strong>Money Guarantee</strong> <br/> <span className='light'>Start from $10</span></p>
                  </div> 
            </div>
            </div>
 
          </Col>
          <Col className='main px-3' sm={12} md={6} px-4>
            <div className='color'>          
              <div className='step d-flex'>
               <img src={Timer} alt='image' className='market'/>
           <div className='para d-flex'>
                <p className='para1'><strong>365 Days</strong> <br/> <span className='light'>Start from $10</span></p>
          </div>  </div> 
          </div>
          </Col>
         <Col className='main px-3 '   sm={12} md={6}>
              <div className='color'>
              <div className='step d-flex'>
            <img src={Payment} alt='image' className='payment'/>
          <div className='para d-flex'>
            <p className='para1'><strong>Payment</strong> <br/> <span className='light'>Start from $10</span></p>
        
</div> 
 </div>


</div>
 </Col>
      </Row>
  </Container>
</div>
  );
}

export default Section1;

