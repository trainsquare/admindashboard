"use client";
import React from 'react'
import TopCards from './components/TopCards'
import NewHostList from './components/NewHostList';

import { useState, useEffect } from 'react';
const page = () => {

  
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch('https://localhost:44333/api/hostadmin/getnewhost');
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div className='bg-blue-200'>
    
      <TopCards/>
      <NewHostList data={data}/>
      
   
    </div>
  )
}

export default page