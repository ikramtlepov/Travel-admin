import React from 'react'

const Content = ({children}) => {
  return (
    <div className='min-h-[calc(100vh-90px)] bg-gray-100 max-h-[calc(100vh-90px)]  border-[1px] p-[10px] shadow-md rounded-md overflow-y-auto'>
         {children}
    </div>
  )
}

export default Content