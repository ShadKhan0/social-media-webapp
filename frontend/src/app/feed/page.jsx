import React from 'react'
import Layout from '@/components/ui/dashboard'
import Randompost from '@/components/randompost'
const page = () => {
  return (
    <div>
      <Layout/>
       {/* Content */}
  <div className="w-full lg:ps-64">
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Randompost/>
      {/* your content goes here ... */}
    </div>
  </div>
  {/* End Content */}
    </div>
  )
}

export default page
