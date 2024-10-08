
"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

const allpost = () => {
  const {id}=useParams();
  const [post, setPost] = useState([])
  const fetchdata = async() =>{
    const res = await axios.get("http://localhost:5000/post/dashboard/"+id);
    setPost(res.data);
    
  }
  console.log(post);
  
  useEffect(() => {
    fetchdata();
  
    
  }, [id])
  
  return (
    <div>
      <>
        {/* component */}

        <div className="h-screen overflow-y-scroll bg-white">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8">
            {post.map((post) =>{
              return( <div key={post._id} className="col-span-1 lg:col-span-3 p-4 bg-white mt-3" id="posted">
                <div className="grid grid-cols-1 gap-4">
                  {/* First Column */}
                  <div className="bg-white p-8 rounded-lg shadow-md w-full">
                    {/* User Info with Three-Dot Menu */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                       
                        <div>
                          <p className="text-gray-800 font-semibold">{post.title}</p>
                          <p className="text-gray-500 text-sm">{new Date(post.createdAt).toDateString()}</p>
                        </div>
                      </div>
                      <div className="text-gray-500 cursor-pointer">
                        {/* Three-dot menu icon */}
                        <button className="hover:bg-gray-50 rounded-full p-1">
                          <svg
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
                            <circle cx={12} cy={7} r={1} />
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={17} r={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                     {/* Image */}
                     <div className="mb-4">
                     <img src={post.image} alt="post img" style={{maxWidth:'20%', maxHeight:'20%'}}/>
                    </div>
                    {/* Message */}
                    <div className="mb-4">
                      <p className="text-gray-800">
                       {post.description}
                       
                      </p>
                    </div>
                   
                    {/* Like, Comment, and Share Section */}
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>42 Likes</span>
                        </button>
                      </div>
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg
                          width="22px"
                          height="22px"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                            />
                          </g>
                        </svg>
                        <span>3 Comments</span>
                      </button>
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg
    className="w-5 h-5 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
  <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
  </svg>
                        <span>7 Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>)
            })}
           
          </div>
        </div>
      </>
    </div>
  )
}


export default allpost
