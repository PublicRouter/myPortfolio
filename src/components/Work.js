import React, { useState } from 'react'
import {LittleSips, Leverage, Jester, ExpenseTracker, WorkoutTracker, BattleGame} from './ProjectExports';
// import Leverage from './ProjectExports';


export default function Work() {
    const [selectedProject, setProject] = useState('LittleSips');

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


    return (
        <div className="min-h-[72vh] p-2 flex flex-col justify-center sm:justify-none">
            <h1 className='p-4 text-center text-blue-600 font-bold text-2xl font-DancingScript'>My Work</h1>
            <div className="p-4 grid grid-cols-3 gap-x-2 gap-y-2 mx-auto pb-2 pt-3 max-w-[80vw] text-center text-sm">
                <button onClick={() => setProject('LittleSips')} className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] sm:min-w-[150px] shadow-lg rounded-lg flex justify-center items-center">
                    Little Sip's
                </button>
                <button onClick={() => setProject("Leverage")} className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] shadow-lg rounded-lg flex justify-center items-center">
                    Leverage
                </button>
                <button onClick={() => setProject("Jester")} className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] shadow-lg rounded-lg flex justify-center items-center">
                    Jester
                </button>
                <button onClick={() => setProject("ExpenseTracker")} className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] shadow-lg rounded-lg flex justify-center items-center">
                    Expense Tracker
                </button>
                <button onClick={() => setProject("WorkoutTracker")} className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] shadow-lg rounded-lg flex justify-center items-center">
                    Workout Tracker
                </button>
                <button onClick={() => setProject("BattleGame")}  className="text-white bg-blue-500 min-h-[75px] sm:min-h-[50px] shadow-lg rounded-lg flex justify-center items-center">
                    Browser Battle Game
                </button>
            </div>
            <div className="w-[84vw] h-full mt-4 sm:w-[60vw] bg-blue-500 mx-auto rounded-md shadow-md flex justify-center items-center">
                {/* CURRENT SELECTED PROJECT RENDERED HERE*/}
                <div className="w-[90%] sm:w-[50vw] bg-white rounded-md shadow-md p-1 border-2 border-blue-500">
                    {renderProject()}
                </div>
            </div>
        
        </div>
    )
}
