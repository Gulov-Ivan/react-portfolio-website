import React from 'react'
import {SiTelegram} from 'react-icons/si'
import {IoLogoBehance} from 'react-icons/io5'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://t.me/GulovYurevich" target="_blank"  rel='noreferrer'><SiTelegram/></a>
        <a href="https://www.behance.net/ivangulov50519"  target="_blank" rel='noreferrer'><IoLogoBehance/></a>
        <a href="https://github.com/Gulov-Ivan"  target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials