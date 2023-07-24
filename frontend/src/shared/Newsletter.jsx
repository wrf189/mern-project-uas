import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Berlangganan sekarang untuk mendapat informasi lebih lengkap</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Masukan E-Mail' />
                        <button className="btn newsletter__btn">Berlangganan</button>
                     </div>
                     <p>Dengan berlangganan, Anda tidak akan merasa rugi dan akan memperoleh
                        beragam informasi yang lebih banyak untuk memperkaya pengalaman perjalanan Anda.
                     </p>
                  </div>
               </Col>
               <Col lg='5'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter