import React, { useRef } from 'react'

export default function Experience() {
    const windowWidth = useRef('')
    console.log(windowWidth)
    windowWidth.current = window.innerWidth

  return (
    <>
        <h2 className="font-DancingScript min-h-[6vh] w-fit mx-auto text-2xl font-bold text-blue-600 mt-2 tracking-wider">Skills</h2>
        <div className="sm:p-2 grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-4 mx-auto p-4 text-xs w-[65vw]">
            {/* SIDEBAR */}
            {/* <div className='cols-3'>
                
            </div> */}
            {/* SKILL BOXES */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.88] rounded-lg shadow-gray shadow-lg min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-1 min-w-[10vw] text-blue-600 text-center">HTML / CSS</h3>
                <div className="font-OpenSans flex flex-wrap w-[fit] pt-2">
                    <ul className='display-inline list-none no-underline flex p-1 flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>HTML5</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>CSS5</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Bootstrap</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Tailwind CSS</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.88] rounded-lg shadow-gray shadow-lg min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-1 min-w-[10vw] text-blue-600 text-center">JavaScript</h3>
                <div className="font-OpenSans flex flex-wrap w-[fit] pt-2">
                    <ul className='display-inline list-none no-underline flex p-1 flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>ES6</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Async/Await</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>OOP</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Functional</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Closures</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>IIFE</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Promises</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Callback</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>DOM</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Local Storage</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Session Storage</li>                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.88] rounded-lg shadow-gray shadow-lg min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-1 min-w-[10vw] text-blue-600 text-center">JS Libraries</h3>
                <div className="font-OpenSans flex flex-wrap w-[fit] pt-2">
                    <ul className='display-inline list-none no-underline flex p-1 flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Bycrypt</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Date</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Inquirer</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Chart</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Handlebars</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Moment</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Three</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Babel</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Node</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Fetch</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.88] rounded-lg shadow-gray shadow-lg min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-1 min-w-[10vw] text-blue-600 text-center">Database / Server</h3>
                <div className="font-OpenSans flex flex-wrap w-[fit] pt-2">
                    <ul className='display-inline list-none no-underline flex p-1 flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MySQL</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MongoDB</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Sequelize</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Mongoose</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>IndexedDB</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Express</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>GraphQL</li>

                    </ul>
                </div>
            </div>

            <div className="sm:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[.88] rounded-lg shadow-gray shadow-lg min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-1 min-w-[10vw] text-blue-600 text-center text-sm">Other</h3>
                <div className="font-OpenSans flex flex-wrap w-[fit] pt-2">
                    <ul className='display-inline list-none no-underline flex p-1 flex-wrap justify-start'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Git</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Agile</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>TDD</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Figma</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MVC</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>JQuery</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Regex</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>React-Three-Fiber</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MVP</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Python</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Webpack</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-orange-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>C++</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>ESLint</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Big-O</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-300 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>WireShark</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Packet Tracing</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>SSH</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg p-1 rounded-lg shadow-lg min-h-[20px] text-center text-white'>OSI Model</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
// font-Oswald
// font-OpenSans

// bg-green-400 
// bg-yellow-300
// bg-orange-400
