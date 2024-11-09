import { ImSpinner3 } from "react-icons/im"; 
import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Loading = () => {
  return (
    <div className=' h-[calc(100vh-120px)] justify-center items-center flex  gap-2'>
      <span className="text-[30px] text-orange-400">Loading</span>
        <div className="loader ">
        </div>
        
    </div>
  )
}

export default Loading