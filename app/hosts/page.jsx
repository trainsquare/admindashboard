"use client";
import React from 'react'
import AllHostList from '../components/AllHostList'
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

import { useState, useEffect } from 'react';
const hosts = () => {
  const router =useRouter();
  useEffect(() => {
    

// Retrieve the token from the cookies
const token= Cookies.get('token');
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