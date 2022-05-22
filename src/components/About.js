import React from 'react'

function About() {
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
        <div className='w-4/5 lg:pb-4 lg:w-3/5 text-center bg-white rounded-xl border-2 border-blue-500'>
            <section className='font-OpenSans text-white p-4 mb-6 mt-6 mx-4 bg-blue-600 shadow-blue-400 rounded-xl text-sm md:text-base'>
                <h1 className='font-Oswald text-center text-white text-xl font-bold mb-2'>About Me</h1>
                <p>Innovative, task-driven professional with a strong interest in all things web related. From website design, to 3D modeling and rendering, to network communication protocols and cyber security. Constantly learning new things about the industry, 
                   researching the newest frameworks and trends in web-2.0 and the quickly evolving ecosystem of web-3.0. Eager and ready to work and communicate with a team of like-minded individuals, conquer larger tasks and push the boundaries of innovation.</p>
            </section>
        </div>
    </div>
  )
}


//bg-gradient-to-r from-cyan-500 to-blue-500
//bg-blue-200
//bg-blue-600
export default About;
