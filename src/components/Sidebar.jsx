import { GiAirplaneDeparture } from "react-icons/gi"; 
import React from 'react'
import { btnData } from "../config/const";
import SidebarBtn from "./page-components/SidebarBtn";
import { Link, useLocation } from "react-router-dom";
import { toggleSidebar } from "../store/slices/pageActionSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";


const Sidebar = () => {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  const {t} = useTranslation()
    return (
    <div>
        <div className='flex justify-center items-center gap-1 text-[18px] font-bold text-gray-900 mt-[10px]'>
            <GiAirplaneDeparture  className="w-[30px] h-[30px] text-orange-600 "/>
           <span>Travel <span className="text-orange-600">Toor</span></span>
        </div>
        <hr className="mt-[10px] " />
        <div className="mt-[10px] flex flex-col gap-2 ">
           {
            btnData.map(btn =>(
                <Link to={btn.path} key={btn.id} onClick={() => dispatch(toggleSidebar())}>
                <SidebarBtn isActive={btn.path === pathname? true : false}>
                    <span className={`${btn.path === pathname? "" : "text-orange-600" } `}>{btn.icon()}</span>
                    <span>{t(btn.title)}</span>
                </SidebarBtn></Link>
            ))
           }
        </div>
    </div>
  )
}

export default Sidebar