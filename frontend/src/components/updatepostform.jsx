import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';

import axios from "axios";

import { useParams, useRouter } from "next/navigation";
import  toast from "react-hot-toast";

const Postform = () => {
  
 const [data, setData] = useState(null)
 const {id} =useParams();
    const router =useRouter();
    const getdata = async() =>{
const res = await axios("http://localhost:5000/post/getbyid/" + id)
setData(res.data);
console.log(data);

    }

    useEffect(() => {
        getdata();
      
       
      }, [id])

   const formik=useFormik({
    enableReinitialize: true,
    initialValues:{
        user:"",
        image:data?.image || null,
        title:data?.title || "",
        description:data?.description || "",
    },
    
    onSubmit:(values, {setSubmitting}) => {
        console.log(values);
        axios.put("http://localhost:5000/update/"+id, values).then((response) => {
            console.log(response.status);
         
           toast.success("Post updated") ;
           setTimeout(() => {
            router.push("/myposts");
          }, 1000);
        }).catch((err) => {
            console.log(err);
           
            setSubmitting(false);
            
        });
        
    }
   })
   if (!data) {
    return <div>Loading...</div>; // Show a loading state until data is fetched
  }
  return (
    <div>
      <>
  {/* Card Section */}
  <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <form onSubmit={formik.handleSubmit}>
      {/* Card */}
      <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
      
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          {/* Grid */}
          <div className="space-y-4 sm:space-y-6">
            <div>
             
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
              
                <div className="mt-4 pt-2 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                
                <label htmlFor="image" className="sr-only">
    Choose Thumbnail
  </label>
  <input
    type="file"
    name="image"
    onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                       
    id="image"
    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
      file:bg-gray-50 file:border-0
      file:bg-gray-100 file:me-4
      file:py-2 file:px-4
      dark:file:bg-neutral-700 dark:file:text-neutral-400"
  />
                 
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="user"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Display Name
              </label>
              <input
                id="user"
                name="user"
                onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.user}
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Title
              </label>
              <input
                id="title"
                name='title'
                onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Title"
              />
            </div>
          
           
       
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows={6}
                placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                
              />
            </div>
          </div>
          {/* End Grid */}
          <div className="mt-5 flex justify-center gap-x-2">
            <button
            disabled={formik.isSubmitting}
              type="submit"
              className="py-3 px-12 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Update Post
            </button>
          </div>
        </div>
      </div>
      {/* End Card */}
    </form>
  </div>
  {/* End Card Section */}
</>

    </div>
  )
}

export default Postform
