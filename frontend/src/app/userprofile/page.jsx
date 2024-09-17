"use client"
import React from 'react'
import imga from '../../../public/logo.png'
import Link from 'next/link'
import Layout from '@/components/ui/dashboard'

import Communities from '@/components/communities'
const Dashboard = () => {
  return (
    
      <>
     
      <div>
  <Layout/>
  {/* End Sidebar */}
  {/* Content */}
  <h1 className='text-center pt-9 lg:ps-64 text-4xl font-bold'>Your Profile</h1>
  <div className="w-full lg:ps-64 flex justify-center">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
    <div className="m-10 max-w-xl">
  <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-l">
    <div className="relative mx-auto w-36 rounded-full">
      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
      <img
        className="mx-auto h-auto w-full rounded-full"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt=""
      />
    </div>
    <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
      Michael Simbal
    </h1>
   
    <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
      placeat!
    </p>
    <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li className="flex items-center py-3 text-sm">
        <span>Email</span>
        <span className="ml-auto">
          <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
         john@gmail.com
          </span>
        </span>
      </li>
      <li className="flex items-center py-3 text-sm">
        <span>Full name</span>
        <span className="ml-auto">
          <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
         john eliya
          </span>
        </span>
      </li>
      <li className="flex items-center py-3 text-sm">
        <span>Joined On</span>
        <span className="ml-auto">Apr 08, 2022</span>
      </li>
    </ul>
  </div>
</div>

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
