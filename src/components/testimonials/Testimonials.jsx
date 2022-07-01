import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ksenia Sokolova',
    review: 'A team of professionals!! We ordered a website - everything was done at the highest level. Thank you so much. This service is best.The project was launched on time.'
  },
  {
    avatar: AVTR2,
    name: 'Valery Kropotkin',
    review: 'Good afternoon, everyone. With this company, we were developing my professional website. As a result of careful study of all the details and our constant interaction, a very good result was obtained.'
  },
  {
    avatar: AVTR3,
    name: 'Sergey Nabokov',
    review: 'Thank you for the work done! I have already applied to this company again! I recommend it! Great feedback! All wishes are taken into account and the order is completed on time.'
  },
  {
    avatar: AVTR4,
    name: 'Julia Barinova',
    review: 'We worked closely with the team for two months. They showed themselves well. The project was launched on time. Everything is according to the contract.Thank you for the work done.'
  },

]

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                  <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials