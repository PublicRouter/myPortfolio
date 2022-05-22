import React, { useState } from 'react'
import {LittleSips, Leverage, Jester, ExpenseTracker, WorkoutTracker} from './ProjectExports';
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
        return <LittleSips />
    }


    return (
        <div className="min-h-[82vh] pt-10 lg:pt-5">
            <h1 className='text-center text-blue-600 font-bold text-xl'>My Work</h1>
            <div className="grid grid-cols-3 gap-x-2 gap-y-2 mx-auto pb-4 pt-3 max-w-[70vw] text-center text-sm">
                <button onClick={() => setProject('LittleSips')} className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Little Sip's
                </button>
                <button onClick={() => setProject("Leverage")} className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Leverage
                </button>
                <button onClick={() => setProject("Jester")} className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Jester
                </button>
                <button onClick={() => setProject("ExpenseTracker")} className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Expense Tracker
                </button>
                <button onClick={() => setProject("WorkoutTracker")} className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Workout Tracker
                </button>
                <button className="text-white bg-blue-400 min-h-[75px] shadow-lg rounded-lg flex justify-center items-center">
                    Browser Battle Game
                </button>
            </div>
            <div className="w-[60vw] h-[230px] bg-blue-500 mx-auto rounded-md shadow-md flex justify-center items-center">
                {/* CURRENT SELECTED PROJECT RENDERED HERE*/}
                <div className="w-[50vw] h-[200px] mx-auto bg-white rounded-md shadow-md p-1">
                    {renderProject()}
                </div>
            </div>
        </div>
    )
}
