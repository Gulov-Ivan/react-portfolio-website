import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UX/UI Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design of Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analysis, Engineering </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UX/UI Interface Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO Website Promotion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of Logos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design and Redesign</p>
            </li>
          </ul>
        </article>
        {/* { END OF UX/UI } */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wordpress Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Online Store Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Turnkey Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website development for startups</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Development Websites</p>
            </li>
          </ul>
        </article>
        {/* { END OF WEB DEVELOPMENT } */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Influencer Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Talent Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-Service Production</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Community Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Production/Creation</p>
            </li>
          </ul>
        </article>
        {/* { END OF CoNTENT CREATION } */}
      </div>
    </section>
  )
}

export default Services