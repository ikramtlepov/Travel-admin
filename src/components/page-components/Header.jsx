import React from 'react'
import { btnData, langData } from '../../config/const'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectLang, toggleLang } from '../../store/slices/pageActionSlice'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const {pathname} = useLocation()
  const headerData = btnData.find(item => item.path===pathname)
  const {showLang, selectLang} = useSelector(state => state.pageActionSlice)
  const dispatch = useDispatch()
  const {t , i18n} = useTranslation()
  function handleLangChange (lang) {
    dispatch(toggleLang())
    dispatch(setSelectLang(lang))
    i18n.changeLanguage(lang.toLowerCase())
  }
  const selectedLang = langData.find(item => item.title === selectLang)
 
  return (
    <div className='h-[60px] border-[1px] shadow-md rounded-md p-[10px] flex justify-between items-center gap-1 '>
       <div className='flex justify-start items-center gap-2 text-[20px] text-gray-800'>
          <span className='h-[35px] w-[35px] bg-orange-600 text-white flex justify-center items-center rounded-md shadow-sm '>{headerData.icon()}</span>
          <span className='font-semibold'>{t(headerData.title)}</span>
       </div>

       <div className=' relative'>
        <button onClick={() => dispatch(toggleLang())} className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md  border-[1px] hover:bg-gray-50 active:scale-95 text-[16px] font-semibold'>
          <img className='w-[20px] h-[20px] object-contain  ' src={selectedLang.img} alt="" />
          <span>{selectedLang.title}</span>
        </button>
        <div className={`absolute ${showLang? "flex" : "hidden"} bottom-0 translate-y-[102%] w-[100px] right-[-20%] bg-white p-[5px] border-[1px] z-30 rounded-md flex-col gap-1`}>
          {langData.map(item => (
            <button onClick={() => handleLangChange(item.title)} key={item.id} className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md   hover:bg-gray-50 active:scale-95 text-[16px] font-semibold'>
            <img  className='w-[20px] h-[20px] object-contain ' src={item.img} alt="" />
            <span>{item.title}</span>
          </button>
          ))}
        </div>
       </div>
    </div>
  )
}

export default Header