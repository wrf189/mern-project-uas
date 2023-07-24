import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'

const FeaturedTourList = () => {
   const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`)
   // console.log(featuredTours)

   return (
      <>
         {
            tourData?.map(tour => (<Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}> <TourCard tour={tour} /> </Col>))
         }
         {
            !loading && !error &&
            featuredTours?.map(tour => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedTourList 