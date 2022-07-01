import React from 'react'
import "../App.css"
import facebookIcon from "../images/socialSvgs/fb.svg"
import instaIcon from "../images/socialSvgs/insta.svg"
import pinIcon from "../images/socialSvgs/pin.svg"
import linkedinIcon from "../images/socialSvgs/linkedin.svg"
import githubIcon from "../images/socialSvgs/github.svg"
import twitterIcon from "../images/socialSvgs/twitter.svg"

import Hamburger from "./Hamburger"

export default function Header({ handlePageChange }) {
  return (
    <>
      <header className='flex justify-between p-3 flex-wrap h-[20%]'>
        {/* Mobile hamburger Menu */}
          <Hamburger handlePageChange={handlePageChange}/>
          {/* name or brand icon */}
        
          {/* Social Media Contact */}
          <ul className='text-xs flex p-1 space-around'>
              <a href="https://twitter.com" target="_blank" className="m-1">
                <img src={twitterIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" className="m-1">
                <img src={instaIcon} />
              </a>
              <a href="https://github.com/originator1" target="_blank" className="m-1">
                <img src={githubIcon} />
              </a>
              <a href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" className="m-1">
                <img src={linkedinIcon} />
              </a>
          </ul>
          <h1 className='text-center text-[1.7em] justify-center w-full font-Oswald text-stone-600'>James Garinger</h1>
      </header>
      
    </>
  )
}
