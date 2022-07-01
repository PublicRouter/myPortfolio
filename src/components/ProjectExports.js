import React from 'react'
import sips from '../images/sips2.jpg'
import leverageImg from '../images/leverageWo.jpg'
import jesterImg from '../images/jesterImg.jpg'
import expenseImg from '../images/ExpenseTracker.jpg'
import fitnessImg from '../images/fitnessTracker.jpg'
import battleGameImg from '../images/battleGameApp3.jpg'

function LittleSips() {   
  return (
    <div className="text-center font-OpenSans border-2 border-stone-600">
          <h4 className='font-bold font-Oswald text-blue-600'>Little Sips Coffee</h4>
          <h5 className='text-sm'>Firebase User Auth / React </h5>
          <a href="https://userauth-development-9ea7a.web.app/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={sips} alt="Little Sips Coffee"></img>
          </a>
          <a href="https://github.com/originator1/firebase-react-userAuth/tree/main/firebase-userauth-routing" target="_blank" className=" hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
    </div>
  )
}

function Leverage() {

    return (
        <div className="text-center font-OpenSans border-2 border-stone-600">
          <h4 className='font-bold font-Oswald text-blue-600'>Leverage</h4>
          <h5 className='text-sm'>MySQL / Handlebars / Bcrypt</h5>
          <a href="https://leveragewo.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={leverageImg} alt="Leverage App"></img>
          </a>
          <a href="https://github.com/originator1/Leverage" target="_blank" className="hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
        </div>
    )
}

function Jester() {

    return (
        <div className="text-center font-OpenSans border-2 border-stone-600">
          <h4 className='font-bold font-Oswald text-blue-600'>Jester</h4>
          <h5 className='text-sm'>MongoDB / GraphQL / JWT</h5>
          <a href="https://jesterapp.herokuapp.com" target="_blank" className=''>
            <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={jesterImg} alt="Jester App"></img>
          </a>
          <a href="https://github.com/originator1/jester" target="_blank" className="hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
        </div>
    )
}

function ExpenseTracker() {

    return (
        <div className="text-center font-OpenSans border-2 border-stone-600">
          <h4 className='font-bold font-Oswald text-blue-600'>Expense Tracker</h4>
          <h5 className='text-sm'>IndexedDB / Service Workers</h5>
          <a href="https://afternoon-peak-77835.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={expenseImg} alt="Expense Tracker"></img>
          </a>
          <a href="https://github.com/originator1/ExpenseTracker" target="_blank" className="hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
        </div>
    )
}

function WorkoutTracker() {

    return (
        <div className="text-center font-OpenSans border-2 border-stone-600">
          <h4 className='font-bold font-Oswald text-blue-600'>Workout Tracker</h4>
          <h5 className='text-sm'>MongoDB / Mongoose / Express</h5>
          <a href="https://afternoon-peak-77835.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={fitnessImg} alt="Workout Application"></img>
          </a>
          <a href="https://github.com/originator1/TrackMyWorkout" target="_blank" className="hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
        </div>
    )
}

function BattleGame() {

  return (
      <div className="text-center font-OpenSans border-2 border-stone-600">
        <h4 className='font-bold font-Oswald text-blue-600'>Battle Game</h4>
        <h5 className='text-sm'>In Development</h5>
        <a href="#" target="_blank">
          <img className="hover:border-4 projectImg mt-1 mb-2 w-[250px] h-[100px] mx-auto border-2 border-blue-600" src={battleGameImg} alt="Battle Game"></img>
        </a>
        <a href="https://github.com/originator1" target="_blank" className="hover:border-2 text-white bg-stone-600 pl-2 pr-2 mt-4 rounded-lg">Github Repo</a>
      </div>
  )
}

export {LittleSips, Leverage, Jester, ExpenseTracker, WorkoutTracker, BattleGame}

