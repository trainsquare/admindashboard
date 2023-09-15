"use client"
import React from 'react';
import { useState,useEffect } from 'react';
const AllHostList = () => 
{
  const [hostData, setData] = useState([]);
  const token = localStorage.getItem('token');
  const fetchData = async () => {
    const response = await  fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/getallhosts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const hostData = await response.json();
    setData(hostData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleApproval = async (id, payoutOption) => {
    console.log("id "+ id + " payout option " +payoutOption)
    if (payoutOption=="localtransfer") {
      const bankDetails = prompt('Please enter your bank details:');
      if (bankDetails) {
        console.log(" local bank : ",bankDetails);
        const response =await fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/approvehost', {
          method: 'POST',
          body: JSON.stringify({ id, bankDetails,payoutOption}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          alert("Host has being approved and notificed");
          // Handle success case
          location.reload();
          console.log('Approval successful!');
        } 
      }
    } else {
      await fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/approvehost', {
        method: 'POST',
        body: JSON.stringify({ id, payoutOption,payoutOption }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }; 


  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
                Host Name 
            </th>
            
            <th scope="col" className="px-6 py-3">
            phoneNumber
            </th>
            <th scope="col" className="px-6 py-3">
            host Email
            </th>
            <th scope="col" className="px-6 py-3">
                Status
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
            {object.phoneNumber}
            </td>
            <td className="px-6 py-4">
                {object.hostEmail}
            </td>
            <td className="px-6 py-4">
            {object.approved ?(<span> Approved</span>):(<span>Not Approved</span>)}
          
            </td>
        </tr>
    ))}
    
        
     
       
    </tbody>
</table>
</div>

  );
};

export default AllHostList;