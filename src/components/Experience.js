import React from 'react'

export default function Experience() {
  return (
    <>
        <h2 className="font-Oswald min-h-[10vh] flex justify-center items-center text-xl font-bold text-blue-600">Skills</h2>
        <div className="min-h-[70vh] w-[50vw] sm:w-[65vw] grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 mx-auto pb-4 pt-3 text-sm">
            {/* SIDEBAR */}
            {/* <div className='cols-3'>
                
            </div> */}
            {/* SKILL BOXES */}
            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">HTML</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>HTML5</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Handlebars</li>
                    </ul>
                </div>
            </div>
           
            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">CSS</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Bootstrap</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Tailwind CSS</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">JavaScript</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>ES6</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Async/Await</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Closure</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Functional Programming</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Time-Complexity</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">Node</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Express</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Bcrypt</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Inquirer</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Moment</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">Database</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MySQL</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>MongoDB</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Sequelize</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Mongoose</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px] flex flex-col items-center p-2">
                <h3 className="font-Oswald bg-white rounded-lg w-fit p-2 min-w-[20vw] text-blue-600 text-center">Python</h3>
                <div className="font-OpenSans flex flex-wrap flex-row w-[100%] sm:w-[23vw] pt-2">
                    <ul className='display-inline list-none w-full no-underline flex flex-row flex-wrap'>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Flask</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Geometry</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-yellow-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Pandas</li>
                        <li className='mr-1 mb-1 min-w-[5vw] bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white'>Physics</li>
                    </ul>
                </div>
            </div>

            
            
            {/* <div className="bg-green-400 shadow-lg border-2 rounded-lg shadow-lg min-h-[20px] text-center text-white">Node Runtime</div> */}


            {/* <div className="bg-blue-300 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px]" />
            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px]" />
            <div className="bg-blue-300 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px]" />
            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px]" />
            <div className="bg-blue-300 rounded-lg shadow-xl min-h-[50px] md:min-h-[100px]" /> */}
        </div>
    </>
  )
}
