import React from 'react'


function Footer({ handlePageChange }) {

  return (

    <div className="py-2 h-[10%] w-full text-center flex justify-center items-center">    
      <div className="h-12 w-12 rounded-full flex justify-center items-center border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-500">
        <a href="home" className="h-8 w-8 rounded-full bg-white flex" onClick = {(e) => {handlePageChange("HomeMainContent"); e.preventDefault()}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[90%] w-6 m-auto animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="rgb(92,83,78)" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>
    </div>
    
  )
}

export default Footer;