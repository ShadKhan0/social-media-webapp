"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import Layout from '@/components/ui/dashboard'
const Dashboard = () => {
    const [userposts, setUserposts] = useState([])
    const fetchpost = async () => {
        const res = await axios("http://localhost:5000/post/getall")
        setUserposts(res.data)
    }
    const deletepost = (id) => {
      axios
        .delete("http://localhost:5000/post/delete/" + id)
        .then((response) => {
          toast.success("Post deleted");
          fetchpost();
        })
        .catch((err) => {
          console.log(err);
          toast.error("failed to delete");
        });
    };
        useEffect(() => {
          fetchpost();
        
          
        }, [])
        
  return (
    
      <>
     
      <div>
 <Layout/>

  {/* End Sidebar */}
  {/* Content */}
  <div className="w-full lg:ps-64">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
    <>
    <div className="px-6 mb-0 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        All posts
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Manage your posts from here
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <Link
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="/allcommunity"
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
                          Create new
                        </Link>
                      </div>
                    </div>
                  </div>
      <div  className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userposts.map((posts) => {
        return(<div key={posts._id} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img className="h-52 flex flex-col justify-center items-center bg-violet-500 rounded-t-xl" src={posts.image} >
            
            </img>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-violet-600">
                {posts.title}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            {new Date(posts.createdAt).toDateString()}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
              {posts.description}
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-violet-400 hover:text-white focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href={"/updatepost/"+ posts._id}
              >
                Edit 
              </Link>
              <button
                  onClick={() => {
                    deletepost(posts._id);
                  }}
                className=" bg-red-500 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl  text-white shadow-sm hover:bg-red-600 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href=""
              >
                Delete
              </button>
            </div>
          </div>)})}
          
              {/* Card */}
              
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
  {/* Card Blog */}
 
  {/* End Card Blog */}
</>

      {/* your content goes here ... */}
    </div>
  </div>
  {/* End Content */}
  {/* ========== END MAIN CONTENT ========== */}
  </div>
</>

    
  )
}

export default Dashboard
