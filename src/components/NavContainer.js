import React from 'react'
import "./navContainer.css"

function NavContainer({ handlePageChange }) {
  
  return (
      <div className="flex justify-between align-center min-h-[10%] max-h-[10%]">
          <h1 className="font-Oswald text-blue-600 text-3xl font-italics pl-3 flex items-center">
              James Garinger
          </h1>
          <div className="mobile-menu">
              <input type="checkbox" className="toggler" role="checkbox" aria-checked="false" tabIndex="0" />
              <div className='hamburger'>
                  <div></div>
              </div>
              <div className='menu'>
                  <div>
                      <div>
                          <ul className="text-blue-500">
                              <li className='z-20'>
                                  <a onClick={(e) => { handlePageChange("Home") }} href="Home">Home</a>
                              </li>
                              <li className='z-20'>
                                  <a className='z-20' onClick={(e) => { e.preventDefault(); handlePageChange("About") }} href="About">About</a>
                              </li>
                              <li className='z-20'>
                                  <a onClick={(e) => { e.preventDefault(); handlePageChange("Experience") }} href="Skills">Skills</a>
                              </li>
                              <li className='z-20'>
                                  <a onClick={(e) => { e.preventDefault(); handlePageChange("Work") }} href="Work">Work</a>
                              </li>
                              <li className='z-20'>
                                  <a onClick={(e) => { e.preventDefault(); handlePageChange("Contact") }} href="Contact">Contact</a>
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