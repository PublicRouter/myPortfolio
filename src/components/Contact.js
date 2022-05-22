import React from 'react'

import Vis from './Sphere'

import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import github from '../images/githubIcon.svg'


export default function Contact() {

    
    // console.log(document.body.children.root.children[0].children[1])
  return (
    <div className="min-h-[80vh] text-center flex flex-col justify-center items-center" id="contactBody">
        <div className="w-64 h-64 bg-blue-white flex justify-between relative top-24 left-2">
            <a href="https://github.com/originator1" target="_blank" className="animate-pulse relative top-48 right-8">
                <img src={github} className=''/>
            </a>
            <a href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" className="animate-pulse ">
                <img src={linkedIn} />
            </a>
            <a href="https://twitter.com" target="_blank" className="animate-pulse relative top-36 left-8">
                <img src={twitter} />
            </a>
        </div>
        <div className='sphereBox bg-blue-400 w-32 h-32 relative bottom-24 right-[2.2rem]' id="sphereBox">
            {Vis()}
        </div>
        
    </div>
  )
}
