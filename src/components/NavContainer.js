import React from 'react'
import "./navContainer.css"

function NavContainer({ handlePageChange }) {
  
  return (
    <div className="flex justify-between align-center min-h-[7vh] max-h-[10vh]">
      <h1 className="font-Oswald text-blue-600 text-3xl font-italics pl-3 flex items-center">
        James Garinger
      </h1>
      {/* <div className="space-y-2 flex flex-col justify-center pr-5">
        <div className="w-8 h-0.5 bg-blue-600"></div>
        <div className="w-8 h-0.5 bg-blue-600"></div>
        <div className="w-8 h-0.5 bg-blue-600"></div>
      </div> */}

      <div className="mobile-menu">
                        <input type="checkbox" className="toggler" role="checkbox" aria-checked="false" tabIndex="0" />
                        <div className='hamburger'>
                            <div></div>
                        </div>
                        <div className='menu'>
                            <div>
                                <div>
                                    <ul className="text-blue-500">
                                        <li>
                                            <a onClick={(e) => {e.preventDefault(); handlePageChange("Home")}} href="Home">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={(e) => {e.preventDefault(); handlePageChange("About")}} href="About">About</a>
                                        </li>
                                        <li>
                                            <a onClick={(e) => {e.preventDefault(); handlePageChange("Experience")}} href="Skills">Skills</a>
                                        </li>
                                        <li>
                                            <a onClick={(e) => {e.preventDefault(); handlePageChange("Work")}} href="Work">Work</a>
                                        </li>
                                        <li>
                                            <a onClick={(e) => {e.preventDefault(); handlePageChange("Contact")}} href="Contact">Contact</a>
                                        </li>                                          
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default NavContainer