"use client"
import React from 'react'
import Cookies from 'js-cookie'
import { useState,useEffect } from 'react';
const TopCards = () => {
    const [summarydata, setData] = useState([]);


    // Retrieve the token from the cookies
   const token= Cookies.get('token');
    const fetchData = async () => {
        const response = await  fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/getoverallsummary', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        const summarydata = await response.json();
        setData(summarydata);
        console.log(summarydata);
        console.log("topcards")
      };
      useEffect(() => {
        fetchData();
      
      }, []);
    return (




        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {summarydata.map(object => (
            <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-gray-800" key={object.id}>
            <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-orange-500 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 mr-4">
                </div><div><p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{object.name}</p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{object.value}</p>
                </div>
            </div>
        </div>

         ))}
            
           
        </div>



    )
}

export default TopCards
