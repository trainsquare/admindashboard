"use client";
import React, { useContext } from 'react'
import MainHeader from './MainHeader'
import Sidebar from './Sidebar'
import { MenuContext } from '@/context/MenuContext'

const MainLayout = ({children}) => {
  const{open} =useContext(MenuContext);
  return (
    <div className='bg-red-800 w-screen min-h-screen'>
   <MainHeader/>

  <div className='flex justify-start item-start'>
    <aside className="bg-white rounded-lg overflow-hidden w-60 p-4w-0">
  
    <Sidebar/>
    </aside>
    <main className='flex-1 bg-yellow-100 mx-5 rounded-lg'>{children}</main>
    </div>
    </div>
  )
}

export default MainLayout