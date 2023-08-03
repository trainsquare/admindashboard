"use client"
import React from 'react';
import { useState,useEffect } from 'react';
const AllUsers = () => 
{
  const [hostData, setData] = useState([]);

  const fetchData = async () => {
    const response = await  fetch('https://localhost:44333/api/useradmin/getalluser');
    const hostData = await response.json();
    setData(hostData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
                Full Name
            </th>
            <th scope="col" className="px-6 py-3">
            Email Address
            </th>
            <th scope="col" className="px-6 py-3">
            phoneNumber
            </th>
            <th scope="col" className="px-6 py-3">
            Ticket bought
            </th>
            <th scope="col" className="px-6 py-3">
            isGuest
            </th>
           
            
        </tr>
    </thead>
    <tbody>

    {hostData.map(object => (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={object.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {object.fullName}
            </th>
            <td className="px-6 py-4">
            {object.email}
            </td>
            <td className="px-6 py-4">
            {object.mobileNumber=="" ? "N/A" : object.mobileNumber}
            
            </td>
            <td className="px-6 py-4">
                {object.ticketsBought}
            </td>
            <td className="px-6 py-4">
            {object.isGuest ? "Guest" : "Member"}
                
            </td>
            
            
        </tr>
    ))}
    
        
     
       
    </tbody>
</table>
</div>

  );
};

export default AllUsers;