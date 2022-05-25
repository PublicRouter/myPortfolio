import React from 'react'

import Vis from './Sphere'

import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import github from '../images/githubIcon.svg'


export default function Contact() {

    
    // console.log(document.body.children.root.children[0].children[1])
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center" id="contactBody">
        <div className="w-fit h-fit md:w-[40vw] bg-blue-white flex justify-between relative left-2 z-10">
            <div className='h-20 w-20 bg-blue-200 rounded-full relative top-48 right-14 flex items-center justify-center hover:border-2 border-blue-300'>
                <a href="https://github.com/originator1" target="_blank" className="rounded-lg h-fit w-fit">
                    <img src={github} className=''/>
                </a>
            </div>

            <div className='h-20 w-20 bg-blue-200 rounded-full md:bottom-16 relative flex items-center justify-center hover:border-2 border-blue-300'>
                <a href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" className="rounded-lg h-fit w-fit">
                    <img src={linkedIn} />
                </a>
            </div>
            
            <div className='h-20 w-20 bg-blue-200 rounded-full relative top-36 left-14 flex items-center justify-center hover:border-2 border-blue-300'>
                <a href="https://twitter.com" target="_blank" className="rounded-lg h-fit w-fit">
                    <img src={twitter} />
                </a>
            </div>
            
            
        </div>
        <div className="sphereBox bg-blue-400 w-32 h-[100%] relative right-[2.5rem]" id="sphereBox">
            {Vis()}
        </div>
        
        
        
    </div>
  )
}
