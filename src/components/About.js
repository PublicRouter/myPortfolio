import React from 'react'

function About() {
  return (
    <div className='min-h-[80vh] sm:min-h-[72vh] flex justify-center items-center'>
        <div className='w-4/5 lg:w-3/5 text-center rounded-xl border-4 border-stone-600 bg-gradient-to-r from-cyan-500 to-blue-500 '>
            <section className='font-OpenSans text-white p-4 mb-4 mt-4 mx-4 bg-blue-200 border-2 border-stone-500 rounded-xl text-sm md:text-base'>
                <h1 className='font-DancingScript text-center text-stone-500 text-2xl font-bold mb-2 tracking-wide'>About Me</h1>
                <p className='text-stone-600 px-2'>Innovative, task-driven professional with a strong interest in all things web related. 
                  Self-taught hands on experience with a range of different tech from website design, to 3D modeling and rendering, to network communication protocols and cyber security. 
                  Graduated UT-Austin full-stack web developer bootcamp in Jan. of 2022, where I met a lot of great mentors and colleauges who have helped guide me on the right path.
                  Enjoy researching and educating myself in all fields of computer science, 
                   from the newest frameworks and trends in web-2.0 as well as the emrging world of blockchain distributed networks. 
                   Eager and ready to work and communicate with a team of like-minded individuals, conquer larger tasks and push the boundaries of innovation.</p>
            </section>
        </div>
    </div>
  )
}


//bg-gradient-to-r from-cyan-500 to-blue-500
//bg-blue-200
//bg-blue-600
export default About;
