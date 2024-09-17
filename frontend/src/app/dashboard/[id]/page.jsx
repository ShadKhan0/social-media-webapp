"use client"
import React, { useEffect, useState } from 'react'
import Allpost from '@/components/allpost'
import Layout from '@/components/ui/dashboard';
import Link from "next/link";
import { useParams } from 'next/navigation';
import axios from 'axios';
const Dashboard = () => {
  const [community, setCommunity] = useState({})
  const {id} = useParams();
const fetchdata=async () =>{
  const res = await axios.get("http://localhost:5000/community/getbyid/"+id);
  console.log(res.data);
  
  setCommunity(res.data);
}
useEffect(() => {
  fetchdata()

 
}, [])

  return (

    
      <>
     
      <div>

<Layout/>
  {/* End Sidebar */}
  {/* Content */}
  <div className="w-full lg:ps-64">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* your content goes here ... */}
   
      <div  className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        {community.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Join and post in this community.
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <Link
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href={`/addpost/${id}`}
                        >
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          Add post
                        </Link>
                      </div>
                    </div>
                  </div>
      <Allpost/>
    </div>
  </div>
  {/* End Content */}
  {/* ========== END MAIN CONTENT ========== */}
  </div>
</>

    
  )
}

export default Dashboard
