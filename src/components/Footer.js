import React from 'react'


function Footer({ handlePageChange }) {

  return (

    <div className="min-h-[10vh] max-h-[10vh] mb-[3vh] text-center m-auto flex justify-center items-center max-w-screen-sm">    
      <div className="h-12 w-12 rounded-full flex justify-center items-center">
        <a href="#Home" className="h-12 w-12 bg-blue-600 rounded-full flex" onClick = {() => handlePageChange("HomeMainContent")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>
    </div>
    
  )
}

export default Footer;