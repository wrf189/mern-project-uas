import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png' 
import Subtitle from './../shared/subtitle'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'

const Home = () => {
   return <>
      {/* ========== HERO SECTION ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={'Ketahui Sebelum Berangkat'} />
                        <img src={worldImg} alt="" />
                     </div>
                     <h1>Buatlah Kenangan Abadi dalam Setiap <span className='hightlight'> Perjalanan</span></h1>
                     <p align="justify">
                     Situs travel kami adalah yang terbaik untuk memenuhi segala kebutuhan perjalanan Anda.
                     Kami menyediakan beragam informasi tentang destinasi menakjubkan, pengalaman wisata yang unik,
                     serta pilihan akomodasi terbaik untuk memastikan perjalanan Anda menjadi tak terlupakan. Jadi,
                     mulailah petualangan Anda bersama kami dan nikmati pengalaman travel terbaik yang akan membawa
                     Anda menjelajahi dunia dengan kegembiraan dan kenangan indah yang abadi.
                     </p>
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col>

            </Row>
         </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}
      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">Apa yang kami layani</h5>
                  <h2 className="services__title">Adalah pelayanan terbaik kami</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>
      {/* ==================== HERO SECTION END ====================== */}

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Jelajahi'} />
                  <h2 className='featured__tour-title'>Tur Unggulan Kami</h2>
               </Col>
               <FeaturedTourList />
            </Row>
         </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Pengalaman'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Pengalaman travel kami adalah yang terbaik dan memberikan petualangan tak terlupakan
                        dengan kebahagiaan penuh dalam setiap momen perjalanan. </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>12k+</span>
                        <h6>Keberhasilan Perjalanan</h6>
                     </div>
                     <div className="counter__box">
                        <span>2k+</span>
                        <h6>Pelanggan Setia</h6>
                     </div>
                     <div className="counter__box">
                        <span>10</span>
                        <h6>Tahun Pengalaman</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Galeri'} />
                  <h2 className="gallery__title">Jelajahi kenangan pelanggan kami</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Testimoni'} />
                  <h2 className="testimonial__title">Apa yang pelanggan kami katakan</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
   </>
}

export default Home