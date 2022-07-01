import React, { useState } from 'react'
import {LittleSips, Leverage, Jester, ExpenseTracker, WorkoutTracker, BattleGame} from './ProjectExports';
// import Leverage from './ProjectExports';
import blog0 from "../images/blogSiteImages/img1.jpg"
import blog1 from "../images/blogSiteImages/img2.jpg"
import blog2 from "../images/blogSiteImages/img3.jpg"
import blog3 from "../images/blogSiteImages/img4.jpg"
import blog4 from "../images/blogSiteImages/img5.jpg"

import wide1 from "../images/blogSiteImages/wide1.jpg"
import wide2 from "../images/blogSiteImages/wide3.jpg"

export default function Work() {
    const [selectedProject, setProject] = useState('LittleSips');
    const [designCarouselState, setDesignCarouselState] = useState(0)

    const renderProject = () => {
        if (selectedProject === 'LittleSips') {
            return <LittleSips />
        }
        if (selectedProject === "Leverage") {
            return <Leverage />
        }
        if (selectedProject === "Jester") {
            return <Jester />
        }
        if (selectedProject === "ExpenseTracker") {
            return <ExpenseTracker />
        }
        if (selectedProject === "WorkoutTracker") {
            return <WorkoutTracker />
        }
        if (selectedProject === "BattleGame") {
            return <BattleGame />
        }
        
        return <LittleSips />
    }

    const carouselAction = () => {
        const blogs = [blog0, blog1, blog2, blog3, blog4]
        console.log(designCarouselState)
        if(designCarouselState > 4 || designCarouselState < 0) {
            setDesignCarouselState(0)
            return blogs[0]
        }else {
            return blogs[designCarouselState] 
        }
         
    }



    return (
        <div className='flex flex-col min-h-[76vh] sm:min-h-[70vh]'>
            <div className="min-h-[65vh] sm:min-h-[45vh] sm:pt-0 p-2 flex flex-col justify-around p-5 sm:justify-none">
                <h1 className='p-4 sm:pt-0 text-center text-blue-600 font-bold text-2xl font-DancingScript'>My Work</h1>
                <div className="p-4 grid grid-cols-3 gap-x-2 gap-y-2 mx-auto pb-2 pt-3 max-w-[80vw] text-center text-xs">
                    <button onClick={() => setProject('LittleSips')} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 sm:min-w-[120px] shadow-lg rounded-lg flex justify-center items-center">
                        Little Sip's
                    </button>
                    <button onClick={() => setProject("Leverage")} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 shadow-lg rounded-lg flex justify-center items-center">
                        Leverage
                    </button>
                    <button onClick={() => setProject("Jester")} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 shadow-lg rounded-lg flex justify-center items-center">
                        Jester
                    </button>
                    <button onClick={() => setProject("ExpenseTracker")} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 shadow-lg rounded-lg flex justify-center items-center">
                        Expense Tracker
                    </button>
                    <button onClick={() => setProject("WorkoutTracker")} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 shadow-lg rounded-lg flex justify-center items-center">
                        Workout Tracker
                    </button>
                    <button onClick={() => setProject("BattleGame")} className="p-2 text-white bg-blue-600 min-h-[75px] sm:min-h-[50px] border-2 border-stone-500 hover:bg-blue-400 shadow-lg rounded-lg flex justify-center items-center">
                        Browser Battle Game
                    </button>
                </div>
                <div className="w-[84vw] mt-4 sm:mt-0 sm:w-[60vw] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-md shadow-md flex justify-center items-center shadow-lg border-4 border-stone-600 shadow-stone-500">
                    {/* CURRENT SELECTED PROJECT RENDERED HERE*/}
                    <div className="w-[90%] sm:w-[50vw] bg-white rounded-md shadow-md p-1 border-2 border-blue-500 text-stone-600">
                        {renderProject()}
                    </div>
                </div>


            </div>
            {/* <div className='h-[fit] p-6 sm:h-[fit] bg-stone-300 flex justify-center flex-wrap items-center'>
                <h1 className='w-full p-3 flex items-center text-stone-600 font-DancingScript text-2xl justify-center'>Latest Project Design</h1>
                <div className='flex justify-center items-center'>
                    <h1 className='text-center text-stone-600 text-xl'>Mobile</h1>
                    <button onClick={() => setDesignCarouselState(designCarouselState - 1)} className='mr-4 w-10 h-10 bg-blue-600 rounded-lg text-white text-xl'>≺</button>
                    <section className=''>
                        <img src={carouselAction()} className="h-[55vh]" />
                    </section>
                    <button onClick={() => setDesignCarouselState(designCarouselState + 1)} className='ml-4 w-10 h-10 bg-blue-600 rounded-lg text-white text-xl'>≻</button>
                </div>  
                <div className='h-[60vh] flex flex-col pl-[6vw] justify-around items-center'>
                    <h1 className='text-center'>Desktop</h1>
                    <img src={wide1} className="w-[90%] h-[200px]"/>
                    <img src={wide2} className="w-[90%] h-[200px]"/>
                </div>  
               
            </div> */}
        </div>
    )
}
