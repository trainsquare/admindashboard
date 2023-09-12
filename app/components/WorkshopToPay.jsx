"use client"

import React from 'react';
import { useState,useEffect } from 'react';
const WorkshopToPay = () => 
{
  



  const handleApproval = async (hostId, payoutOption) => {
    const token = localStorage.getItem("token");
    console.log("id "+ hostId + " payout option " +payoutOption)
    if (payoutOption==="localtransfer") {
      const bankDetails = prompt('Please enter your bank details:');
      if (bankDetails) {
        console.log(" local bank : ",bankDetails);
        const response =await fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/approvehost', {
          method: 'POST',
          body: JSON.stringify({ hostId: hostId, BankAccount:bankDetails,payoutOption:payoutOption,}),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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
      console.log(JSON.stringify({ hostId: hostId, payoutOption,token }));
      const response =await fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostadmin/approvehost', 
      {
        method: 'POST',
        body: JSON.stringify({ hostId: hostId, payoutOption,token }),
        headers: {
          
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if(response.ok){
        console.log(response)
      }
    }
  }; 
  const [workshopdata, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://trainsquare-web-api2.azurewebsites.net/api/hostpaymentsummary/allworkshoppayment');
    const workshopdata = await response.json();
    setData(workshopdata);
    console.log(workshopdata);
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
                WorkName Name 
            </th>
            <th scope="col" className="px-6 py-3">
            Host Name
            </th>
            <th scope="col" className="px-6 py-3">
            Payment Channel
            </th>
            <th scope="col" className="px-6 py-3">
            Total Revenue
            </th>
            <th scope="col" className="px-6 py-3">
            Total Payout
            </th>
            <th scope="col" className="px-6 py-3">
            Company Profit 
            </th>
            <th scope="col" className="px-6 py-3">
            Host Account  
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>

    {workshopdata.map(object => (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={object.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {object.workshopName}
            </th>
            <td className="px-6 py-4">
            {object.hostName}
            </td>
            <td className="px-6 py-4">
            {object.paymentChannel}
            </td>
            <td className="px-6 py-4">
                {object.totalPaid}
            </td>
            <td className="px-6 py-4">
                {object.totalPayout}
            </td>
            <td className="px-6 py-4">
                {object.companyRevenue}
            </td>
            <td className="px-6 py-4">
            {object.paymentChannel=="stripe"?(
                <span> Stripe proceed</span>
            )
             :(
             
                <span>Local account</span>
           
             )
          }
          
        
          </td>
           
            <td className="px-6 py-4">
              {object.paymentChannel==="stripe"?(
                  <span> Stripe proceed</span>
              )
               :(
                <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleApproval(object.id,"stripe")}
              >Mark as Paid</button>
               )
            }
            
          
            </td>
        </tr>
    ))}
    
        
     
       
    </tbody>
</table>
</div>

  );
};

export default WorkshopToPay;