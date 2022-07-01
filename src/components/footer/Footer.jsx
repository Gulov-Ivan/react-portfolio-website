import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {SiTelegram} from 'react-icons/si'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gulov</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/profile.php?id=100031128360420"><FaFacebookF/></a>
        <a href="https://t.me/GulovYurevich"><SiTelegram/></a>
        <a href="https://instagram.com/ivan_gulov7?r=nametag"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gulov Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer