import React from 'react'
import {AiOutlineHome,AiOutlineReddit,AiOutlineTable,AiOutlineTransaction,AiOutlineTeam} from "react-icons/ai"

import Link from  "next/link";
function Sidebar() {
  return (
    <ul>
        <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
        <AiOutlineHome className='mr-2'/>
        <Link href="/">Home</Link>
        </li>
          <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
         <AiOutlineTable className='mr-2'/>
        <Link href="/hosts">All Hosts</Link>
        </li>
          <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
         <AiOutlineTeam className='mr-2'/>
        <Link href="/users">Users</Link>
        </li>
          <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
         <AiOutlineTransaction className='mr-2'/>
        <Link href="/payouts">Payouts</Link>
        </li>
          <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
         <AiOutlineReddit className='mr-2'/>
        <Link href="/workshops">Worksops</Link>
        </li>
        
        <li className='flex items-center hover:bg-blue-100 hover :text-blue-800 rounded-xl p-2'>
         <AiOutlineHome className='mr-2'/>
        <Link href="/login">Login</Link>
        </li>
        
    </ul>
  )
}

export default Sidebar