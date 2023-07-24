import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p align="justify">Situs Travelindo sangat luar biasa! Saya sangat terkesan dengan pelayanannya
            yang cepat, ramah, dan profesional. Situs ini menyediakan berbagai paket
            liburan menarik dengan harga yang kompetitif. Pengalaman liburan saya berkat
            Travelindo menjadi tak terlupakan. Terima kasih, Travelindo, akan saya rekomendasikan
            kepada teman-teman dan keluarga!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Wangsa Fatahillah</h6>
               <p>Pengusaha</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p align="justify">Situs Travelindo adalah teman terbaik dalam merencanakan liburan! Dari momen
         saya mengunjungi situs ini, saya langsung terkesan dengan antarmuka yang user-friendly dan informasi
         yang lengkap mengenai destinasi wisata.  Terima kasih Travelindo, liburan saya menjadi lebih
         menyenangkan dan lancar berkat bantuanmu!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ainun</h6>
               <p>Model</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p align="justify">Travelindo adalah situs yang luar biasa untuk merencanakan perjalanan impian! Saya
         sangat terkesan dengan keberagaman destinasi wisata yang mereka tawarkan. Saya merasa lebih percaya diri
         dalam mengatur liburan saya berkat situs Travelindo. Terima kasih banyak, Travelindo, telah membuat 
         liburan saya menjadi suatu kenangan yang tak terlupakan!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Aditya Putra</h6>
               <p>Pebisnis</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p align="justify">Travelindo adalah situs terbaik untuk menjelajahi keindahan Indonesia! Saya sangat senang 
         menemukan situs ini karena mereka menawarkan berbagai destinasi wisata yang menakjubkan di tanah air. Saya 
         sungguh merekomendasikan Travelindo kepada semua orang yang ingin mengalami liburan yang tak terlupakan di Indonesia. 
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Ferra Azriani</h6>
               <p>Aktris</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials