"use client";
import React from 'react'
import TopCards from './components/TopCards'
import NewHostList from './components/NewHostList';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
const page = () => {
  const router = useRouter();
  
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{
      const token = localStorage.getItem("token");

      const response = await fetch('https://localhost:44333/api/hostadmin/getnewhost', {
       
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
       
      });
  
      //const response = await fetch('https://localhost:44333/api/hostadmin/getnewhost');
      const data = await response.json();
      setData(data);
    }
    catch(error){
        console.error(error)
    }
    

  
    
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if((token===null)||(token==="")){
      console.log('no token')
      router.push("/login"); 
    }
    else{
      fetchData();
    }
   
  }, []);

  

  return (
    <div className='bg-blue-200'>
    
      <TopCards/>
      <NewHostList data={data}/>
      
   
    </div>
  )
}

export default page