import React from 'react'
import image1 from "../images/img3 - Copy.png"

function HomeMainContent( {handlePageChange} ) {

  // useEffect(() => {
  //   handlePageChange("")
  // }, []);

 
  return (
    <div className="flex flex-col min-h-[82vh] max-h-[82vh] justify-center">
    {/* image circle wrapper */}
      <div className="shadow-xl mb-3 mx-auto sm:mb-3 w-44 h-44 sm:h-[30vh] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex justify-center items-center">
        <div className="shadow-xl m-auto w-40 h-40 relative bg-blue-200 rounded-full flex justify-center items-center">
          <img src={image1} alt="" className="bg-blue-300 w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full" />
        </div>
      </div>
      {/* Full Stack Developer Text */}
      <div className="mx-auto text-center h-min">
        <h1 className="font-OpenSans font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent m-auto z-20 text-2xl text-shadow-lg w-fit">Full-Stack Web Developer</h1>
      </div>
      {/* button menu */}
      <div className='w-32 mt-3 mb-8 p-2 grid grid-cols-2 gap-y-3 gap-x-2 bg-white-200 m-auto text-xs justify-items-center items-center'>
        <button onClick = {() => handlePageChange('About')} className='text-white bg-blue-600 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center' >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <a href="#Work" onClick = {() => handlePageChange('Work')} className='text-white bg-blue-600 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#Experience" onClick = {() => handlePageChange('Experience')} className='text-white bg-blue-600 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </a>
        <a href="https://drive.google.com/file/d/1--P2RNJfmo2GfkgFJe2dYR41dTk1KrDm/view?usp=sharing" target="_blank" className="text-white bg-blue-600 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        </a>
        <a href="#Contact" onClick = {() => handlePageChange('Contact')} className='text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        {/* AUTO OPEN DEFAULT MAIL */}
        <a href="mailto:jkggaringer@gmail.com" target="_blank" className='text-center text-white bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg shadow-xl h-12 w-12 flex justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      
      
      </div>
    </div>
    
  )
}

export default HomeMainContent;