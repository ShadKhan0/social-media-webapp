"use client"
import React from 'react'
import Link from 'next/link'
import Communityform from '@/components/communityform'
import Layout from '@/components/ui/dashboard'

const Dashboard = () => {
  return (
    
      <>
     
      <div>
  <Layout/>
  {/* End Sidebar */}
  {/* Content */}
  <div className="w-full lg:ps-64">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Communityform/>
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
