import React from 'react'

import Vis from './Sphere'

import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter.svg'
import github from '../images/githubIcon.svg'


export default function Contact() {

    
    // console.log(document.body.children.root.children[0].children[1])
  return (
    
        <div className="min-h-[30vh] flex flex-col items-center justify-center">
            <Vis className="flex items-center w-[100vw] h-[80vh] z-10" />
            <div className="w-[70vw] h-fit sm:w-[45vw] md:w-[40vw]  lg:w-[30vw] bg-blue-white flex justify-between absolute bottom-70 z-20 animate-spin-slow">
                <div className='h-16 w-16 bg-blue-200 rounded-full relative flex items-center justify-center hover:border-2 border-blue-300'>
                    <a href="https://github.com/originator1" target="_blank" className="animate-reverse-spin">
                        <img src={github} className=''/>
                    </a>
                </div>

                <div className='h-16 w-16 bg-blue-200 rounded-full bottom-32 sm:bottom-28 lg:bottom-32 relative flex items-center justify-center hover:border-2 border-blue-300'>
                    <a href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" className="animate-reverse-spin">
                        <img src={linkedIn} />
                    </a>
                </div>
                
                <div className='h-16 w-16 bg-blue-200 rounded-full relative flex items-center justify-center hover:border-2 border-blue-300'>
                    <a href="https://twitter.com" target="_blank" className="animate-reverse-spin">
                        <img src={twitter} />
                    </a>
                </div>
                
                
            </div>
            
            {/* <div className="sphereBox bg-blue-400 w-32 h-[100%] relative right-[2.5rem]" id="sphereBox">
                {Vis()}
            </div> */}
            
            
            
            
        </div>

  )
}
