import React from 'react'

function NavContainer() {
  return (
    <div className="flex justify-between align-center min-h-[7vh] max-h-[10vh]">
      <h1 className="font-Oswald text-blue-600 text-3xl font-italics pl-3 flex items-center">
        James Garinger
      </h1>
      <div className="space-y-2 flex flex-col justify-center pr-5">
        <div className="w-8 h-0.5 bg-blue-600"></div>
        <div className="w-8 h-0.5 bg-blue-600"></div>
        <div className="w-8 h-0.5 bg-blue-600"></div>
      </div>
    </div>
  )
}

export default NavContainer