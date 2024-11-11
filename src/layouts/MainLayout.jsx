import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getAllDestData, getAllTourData } from '../api/request'
import Sidebar from '../components/Sidebar'
import Header from '../components/page-components/Header'
import Content from '../components/Content'
import { IoIosArrowForward } from 'react-icons/io'
import { toggleSidebar } from '../store/slices/pageActionSlice'
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
 const baseUrl = "https://travel-data-p3vn.onrender.com"
 const dispatch = useDispatch()
 const { showSidebar} = useSelector(state => state.pageActionSlice)


 

 useEffect(() => {
    dispatch(getAllDestData(`${baseUrl}/destinations`))
    dispatch(getAllTourData(`${baseUrl}/offers`))
 },[])




 
    return (
    <div className='w-[100%] h-[100vh] p-[10px] flex justify-between gap-[10px] '>
        <div className={`max-w-[250px] z-50  duration-500 min-w-[250px] border-[1px] ${showSidebar? "left-[10px]" : "left-[-250px]"} shadow-md  rounded-md p-[10px] bg-white top-[10px] bottom-[10px] absolute sm:static`}> 
           <Sidebar/>
           <button onClick={() => dispatch(toggleSidebar())} className={` ${showSidebar? "opacity-100" : "opacity-50"} w-[30px] h-[40px] rounded-sm bg-orange-500 hover:bg-orange-600 text-white flex justify-center items-center shadow-sm active:scale-95 text-[20px] absolute sm:hidden top-[50%] right-[-32px] translate-y-[-50px]`} >
           <span className={` ${showSidebar? "rotate-180" : "rotate-0"} duration-500`}>
           <IoIosArrowForward/>
           </span>
           </button>
        </div>
        <div className='flex-1'>
           <Header/>
           <Content>
            <Outlet/>
           </Content>
           <div>
           <ToastContainer />
        </div>
        </div>
        
    </div>
  )
}

export default MainLayout