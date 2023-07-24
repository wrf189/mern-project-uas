import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Memprediksi Cuaca`,
      desc: `Nikmati prediksi cuaca yang akurat dan terkini untuk membantu Anda merencanakan perjalanan dengan lebih baik.`,
   },
   {
      imgUrl: guideImg,
      title: `Pemandu Tur Terbaik`,
      desc: `Temukan pengalaman petualangan terbaik dengan pemandu tur ahli dan berpengetahuan luas.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Kustomisasi',
      desc: `Nikmati fleksibilitas dan kemudahan mengkustomisasi perjalanan impian Anda dengan beragam opsi yang disediakan.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList