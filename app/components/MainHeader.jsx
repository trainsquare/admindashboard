"use client";
import React, { useContext } from 'react'
import {FaBars} from "react-icons/fa";
import {MenuContext} from "@/context/MenuContext"
const MainHeader = () => {

  const {toggle} =useContext(MenuContext);
  return (
    <div className='bg-green-100 flex justify-between items-center px4 h-12 mb-4'>
      <div>Trainsquare Admin</div>
      <div>
        <FaBars  className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default MainHeader