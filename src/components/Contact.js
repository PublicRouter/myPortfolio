import React from 'react'
import Sphere from './Sphere'
//icon images
import linkedIn from '../images/linkedIn.svg'
// import twitter from '../images/socialSvgs/'
import github from '../images/githubIcon.svg'


export default function Contact() {

  return (
    
        <div className="min-h-[72vh] max-h-[75vh] flex flex-col items-center">         
            <div className="w-[80vw] h-fit sm:w-[48vw] md:w-[45
                vw] lg:w-[30vw] bg-blue-white flex justify-between absolute top-[43vh] sm:top-[46vh] animate-spin-slow">
        
                <div className='h-14 w-14 shadow-lg shadow-black bg-blue-200 rounded-full relative flex items-center justify-center border-2 hover:border-4 border-blue-600'>
                    <a href="https://github.com/originator1" target="_blank" className="animate-reverse-spin">
                        <img src={github} className='h-6 w-6'/>
                    </a>
                </div>

                <div className='h-14 w-14 shadow-lg shadow-black bg-blue-200 rounded-full bottom-32 md:bottom-36 lg:bottom-33 relative flex items-center justify-center border-2 hover:border-4 border-blue-600'>
                    <a href="https://www.linkedin.com/in/james-garinger-22246421b/" target="_blank" className="animate-reverse-spin">
                        <img src={linkedIn} className="h-6 w-6"/>
                    </a>
                </div>
                
                {/* <div className='h-14 w-14 shadow-lg shadow-black bg-blue-200 rounded-full relative flex items-center justify-center border-2 hover:border-4 border-blue-600'>
                    <a href="https://twitter.com" target="_blank" className="animate-reverse-spin">
                        <img src={twitter} />
                    </a>
                </div>   */}
              <a href="mailto:jkggaringer@gmail.com" target="_blank" className='h-14 w-14 shadow-lg shadow-black bg-blue-200 rounded-full relative flex items-center justify-center border-2 hover:border-4 border-blue-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-reverse-spin" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
              </a>                                           
            </div>
            <Sphere className="w-[100vw] h-[48vh]" />                                                   
        </div>

  )
}
