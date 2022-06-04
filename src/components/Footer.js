import React from 'react'
// import HomeMainContent from './components/HomeMainContent';
// import About from "./components/About"


function Footer({ handlePageChange }) {

  //__Page Associations__
  //associate each page with a number

  // if (count === 1){
  //   return <HomeMainContent />
  // }

  // if (count === 2) {
  //   return <About />
  // }

  //2=about
  //3=work
  //4=edu cap
  //5=resume
  //6=contact
  //if count is >= 0, set count to 1
  //if count is <= 7, set count to 1


  //__Buttons__
  //back button = count-=1
  //home button = HomeMainContent component
  //forward button = count+=1

  return (
    // <div className=" min-h-[10vh] max-h-[10vh] mb-[3vh] text-center m-auto grid grid-cols-3 gap-y-2 gap-x-2 justify-items-center items-center max-w-screen-sm
    // ">
    //   <div className="h-6 w-6 bg-blue-600 rounded-full flex justify-center items-center">
    //     <div className="h-4 w-4 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    //       </svg>
    //     </div>
    //   </div>
    //   <div className="h-12 w-12 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full flex justify-center items-center">
    //     <a href="#Home" className="h-8 w-8 bg-blue-600 rounded-full" onClick = {() => handlePageChange("HomeMainContent")}>
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto pt-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    //       </svg>
    //     </a>
    //   </div>
    //   <div className="h-6 w-6 bg-blue-600 rounded-full flex justify-center items-center">
    //     <div className="h-4 w-4 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-[10vh] max-h-[10vh] mb-[3vh] text-center m-auto flex justify-center items-center max-w-screen-sm">    
      <div className="h-12 w-12 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full flex justify-center items-center">
        <a href="#Home" className="h-10 w-10 bg-blue-600 rounded-full" onClick = {() => handlePageChange("HomeMainContent")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-auto pt-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>
    </div>
    
  )
}

export default Footer;