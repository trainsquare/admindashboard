"use client"
import React from 'react'
import { useState,useEffect } from 'react';
const PayoutCards = () => {
    const [summarydata, setData] = useState([]);

    const fetchData = async () => {
        const response = await  fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/getworkshopsummary');
        const summarydata = await response.json();
        setData(summarydata);
        console.log(summarydata);
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

export default PayoutCards