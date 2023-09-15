"use client"
import React from 'react';
import { useState,useEffect } from 'react';
const WorkshopList = ({data}) => 
{
  const [workshopdata, setData] = useState([]);
  const token = localStorage.getItem('token');
  const fetchData = async () => {
    const response = await fetch('https://trainsquare-web-api2.azurewebsites.net/api/useradmin/getallworkshops', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
                Name 
            </th>
            <th scope="col" className="px-6 py-3">
            Category
            </th>
            <th scope="col" className="px-6 py-3">
            WorkshopDate 
            </th>
            <th scope="col" className="px-6 py-3">
            Cost
            </th>
            <th scope="col" className="px-6 py-3">
            Ticket Sold
            </th>
            <th scope="col" className="px-6 py-3">
            Total Revenue
            </th>
            <th scope="col" className="px-6 py-3">
            Available Tickets
            </th>
            <th scope="col" className="px-6 py-3">
             Publish Status
            </th>
            <th scope="col" className="px-6 py-3">
             Status
            </th>
            
            
        </tr>
    </thead>
    <tbody>

    {workshopdata.map(object => (
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={object.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {object.name}
            </th>
            <td className="px-6 py-4">
            {object.categories}
            </td>
            <td className="px-6 py-4">
            {object.workshopDate}
            </td>
            <td className="px-6 py-4">
                {object.cost}
            </td>
            <td className="px-6 py-4">
                {object.ticketSold}
            </td>
            <td className="px-6 py-4">
                {object.totalPaid}
            </td>
            <td className="px-6 py-4">
                {object.avaliableSeats}
            </td>
            <td className="px-6 py-4">
            {object.status}
        </td><td className="px-6 py-4">
        {object.isPublished?(<span> Published</span>):(<span> Not Published</span>)}
        </td>
        </tr>
    ))}
    
        
     
       
    </tbody>
</table>
</div>

  );
};

export default WorkshopList;