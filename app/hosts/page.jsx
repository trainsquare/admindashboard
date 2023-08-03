"use client";
import React from 'react'
import AllHostList from '../components/AllHostList'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
const hosts = () => {
  const router =useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if((token===null)||(token==="")){
      console.log('no token')
      router.push("/login"); 
    }
   
   
  }, []);
  return (
   <AllHostList/>
  )
}

export default hosts