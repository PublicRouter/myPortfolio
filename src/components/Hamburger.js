import { useState } from "react"; // import state

export default function Hamburger({handlePageChange}) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between py-2">
    
      <nav>
        {/* <section className="MOBILE-MENU flex lg:hidden"> */}
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-blue-600"></span>
          </div>
           {/* toggle class based on isNavOpen state */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-sm">
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="/home" onClick={() => setIsNavOpen(false)}>Home</a>
              </li>
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="/about"  onClick={(e) => {handlePageChange("About"); setIsNavOpen(false); e.preventDefault()}}>About</a>
              </li>
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="/portfolio" onClick={(e) => {handlePageChange("Experience"); setIsNavOpen(false); e.preventDefault()}}>Skills</a>
              </li>
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="/contact" onClick={(e) => {handlePageChange("Work"); setIsNavOpen(false); e.preventDefault()}}>Work</a>
              </li>
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="https://docs.google.com/document/d/16DHa5QE9HnC4FeNqHHYzVOuuieNtRsSS/edit?usp=sharing&ouid=116539845614554488994&rtpof=true&sd=true" target="_blank">Resume</a>
              </li>
              <li className="border-b border-gray-400 my-3 uppercase">
                <a href="/contact" onClick={(e) => {handlePageChange("Contact"); setIsNavOpen(false); e.preventDefault()}}>Contact</a>
              </li>
            </ul>
          </div>
        </section>

        {/* <ul className="DESKTOP-MENU hidden space-x-2 lg:flex text-blue-600">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul> */}
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}