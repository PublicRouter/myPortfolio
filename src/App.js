import './App.css';
import React, { useState } from 'react';

import NavContainer from './components/NavContainer';
import HomeMainContent from './components/HomeMainContent';
//or
import About from "./components/About"
import Footer from "./components/Footer"
import Work from "./components/Work"
import Experience from "./components/Experience"
import Contact from './components/Contact'

function App() {

  const [currentPage, setCurrentPage] = useState('HomeMainContent');

  // check value of currentPage state
  const renderPage = () => {
    //change to switch statement???????
    if (currentPage === 'HomeMainContent') {
      return <HomeMainContent handlePageChange={handlePageChange} className="" />;    
    }
    if (currentPage === 'About') {
      return <About className="" />;  
    }
    if (currentPage === 'Work') {
      return <Work />
    }
    if (currentPage === 'Experience') {
      return <Experience />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    return <HomeMainContent handlePageChange={handlePageChange} />
    // return <HomeMainContent currentPage={currentPage} handlePageChange={handlePageChange} className="h-3/5" />;
  };

  //switching state of currentPage
  const handlePageChange = (page) => setCurrentPage(page);

  // console.log("this is my currentPage", currentPage)

  // function renderPageTest() {
  //   if (window.location.hash === "#About") {
  //     return <About /> 
  //   }

  //   if (window.location.hash === "#Home") {
  //     return <HomeMainContent />
  //   }

  //   return <HomeMainContent />
  // }
  
  return (
    // __entire screen__
    <div className="">
      <NavContainer handlePageChange={handlePageChange} className=""/>
    {/* __center section being changed and rendered__ */}
    {/* __HomeMainContent,About__ */}
      {renderPage()} 
    {/* __back button, home button, forward button__ */}
      <Footer handlePageChange={handlePageChange} className=""/>
    </div>
    
  );
}

export default App;

{/* <h2 className="">
Hello my friends.
</h2>
<a
className="cursor-pointer"
href="https://www.google.com/"
target="_blank"
>
Google.com
</a> */}