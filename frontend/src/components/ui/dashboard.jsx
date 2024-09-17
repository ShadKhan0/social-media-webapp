import React from 'react'
import Link from 'next/link'
const dashboard = () => {
  return (
   <div>  <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
   <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
     <div className="me-5 lg:me-0 lg:hidden">
       {/* Logo */}
       <a
         className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
         href="#"
         aria-label="Preline"
       >
     <img src="/logo.png" alt="" />
       </a>
       {/* End Logo */}
     </div>
     <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
       <div className="hidden md:block">
         {/* Search Input */}
         <div className="relative">
           <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
             <svg
               className="shrink-0 size-4 text-gray-400 dark:text-white/60"
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
               <circle cx={11} cy={11} r={8} />
               <path d="m21 21-4.3-4.3" />
             </svg>
           </div>
           <input
             type="text"
             className="py-2 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
             placeholder="Search"
           />
           <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
             <button
               type="button"
               className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
               aria-label="Close"
             >
               <span className="sr-only">Close</span>
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
                 <circle cx={12} cy={12} r={10} />
                 <path d="m15 9-6 6" />
                 <path d="m9 9 6 6" />
               </svg>
             </button>
           </div>
           <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-gray-400">
             <svg
               className="shrink-0 size-3 text-gray-400 dark:text-white/60"
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
               <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
             </svg>
             <span className="mx-1">
               <svg
                 className="shrink-0 size-3 text-gray-400 dark:text-white/60"
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
             </span>
             <span className="text-xs">/</span>
           </div>
         </div>
         {/* End Search Input */}
       </div>
       <div className="flex flex-row items-center justify-end gap-1">
         <button
           type="button"
           className="md:hidden size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
             <circle cx={11} cy={11} r={8} />
             <path d="m21 21-4.3-4.3" />
           </svg>
           <span className="sr-only">Search</span>
         </button>
         <button
           type="button"
           className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
             <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
             <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
           </svg>
           <span className="sr-only">Notifications</span>
         </button>
         <button
           type="button"
           className="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
             <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
           </svg>
           <span className="sr-only">Activity</span>
         </button>
         {/* Dropdown */}
         <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
           <button
             id="hs-dropdown-account"
             type="button"
             className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white"
             aria-haspopup="menu"
             aria-expanded="false"
             aria-label="Dropdown"
           >
             <img
               className="shrink-0 size-[38px] rounded-full"
               src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
               alt="Avatar"
             />
           </button>
           <div
             className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
             role="menu"
             aria-orientation="vertical"
             aria-labelledby="hs-dropdown-account"
           >
             <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
               <p className="text-sm text-gray-500 dark:text-neutral-500">
                 Signed in as
               </p>
               <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                 james@site.com
               </p>
             </div>
             <div className="p-1.5 space-y-0.5">
               <a
                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                 href="#"
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
                   <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                   <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                 </svg>
                 Newsletter
               </a>
               <a
                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                 href="#"
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
                   <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                   <path d="M3 6h18" />
                   <path d="M16 10a4 4 0 0 1-8 0" />
                 </svg>
                 Purchases
               </a>
               <a
                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                 href="#"
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
                   <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                   <path d="M12 12v9" />
                   <path d="m8 17 4 4 4-4" />
                 </svg>
                 Downloads
               </a>
               <a
                 className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                 href="#"
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
                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                   <circle cx={9} cy={7} r={4} />
                   <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                   <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                 </svg>
                 Team Account
               </a>
             </div>
           </div>
         </div>
         {/* End Dropdown */}
       </div>
     </div>
   </nav>
 </header>
 {/* ========== END HEADER ========== */}
 {/* ========== MAIN CONTENT ========== */}
 <div className="-mt-px">
   {/* Breadcrumb */}
   <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
     <div className="flex items-center py-2">
       {/* Navigation Toggle */}
       <button
         type="button"
         className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
         aria-haspopup="dialog"
         aria-expanded="false"
         aria-controls="hs-application-sidebar"
         aria-label="Toggle navigation"
         data-hs-overlay="#hs-application-sidebar"
       >
         <span className="sr-only">Toggle Navigation</span>
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
           <rect width={18} height={18} x={3} y={3} rx={2} />
           <path d="M15 3v18" />
           <path d="m8 9 3 3-3 3" />
         </svg>
       </button>
       {/* End Navigation Toggle */}
       {/* Breadcrumb */}
       <ol className="ms-3 flex items-center whitespace-nowrap">
         <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
           Nexus
           <svg
             className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
             width={16}
             height={16}
             viewBox="0 0 16 16"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
               stroke="currentColor"
               strokeWidth={2}
               strokeLinecap="round"
             />
           </svg>
         </li>
         <li
           className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
           aria-current="page"
         >
           Dashboard
         </li>
       </ol>
       {/* End Breadcrumb */}
     </div>
   </div>
   {/* End Breadcrumb */}
 </div>
 {/* Sidebar */}
 <div
   id="hs-application-sidebar"
   className="hs-overlay  [--auto-close:lg]
 hs-overlay-open:translate-x-0
 -translate-x-full transition-all duration-300 transform
 w-[260px] h-full
 hidden
 fixed inset-y-0 start-0 z-[60]
 bg-white border-e border-gray-200
 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 dark:bg-neutral-800 dark:border-neutral-700"
   role="dialog"
   tabIndex={-1}
   aria-label="Sidebar"
 >
   <div className="relative flex flex-col h-full max-h-full">
     <div className="px-6 pt-4">
       {/* Logo */}
       <a
         className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
         href="#"
         aria-label="Preline"
       >
         <img src="/logo.png" alt="" />
       </a>
       {/* End Logo */}
     </div>
     {/* Content */}
     <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
       <nav
         className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
         data-hs-accordion-always-open=""
       >
         <ul className="flex flex-col space-y-1">
           <li className=''>
             <Link
               className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
               href="/feed"
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
                   
                 <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                 <polyline points="9 22 9 12 15 12 15 22" />
               </svg>
               Home
             </Link>
           </li>
          
           <li className="hs-accordion" id="account-accordion">
             <button
               type="button"
               className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
               aria-expanded="true"
               aria-controls="account-accordion-child"
             >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/> </svg>
               Communities
               <svg
                 className="hs-accordion-active:block ms-auto hidden size-4"
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
                 <path d="m18 15-6-6-6 6" />
               </svg>
               <svg
                 className="hs-accordion-active:hidden ms-auto block size-4"
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
                 <path d="m6 9 6 6 6-6" />
               </svg>
             </button>
             <div
               id="account-accordion-child"
               className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
               role="region"
               aria-labelledby="account-accordion"
             >
               <ul className="ps-8 pt-1 space-y-1">
                 
                 <li>
                   <Link
                     className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                     href="/allcommunity"
                   >
                     Browse All
                   </Link>
                 </li>
                 <li>
                   <Link
                     className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                     href="/createcommunity"
                   >
                     Create own community
                   </Link>
                 </li>
               </ul>
             </div>
           </li>
           <li className="hs-accordion" id="account-accordion">
             <button
               type="button"
               className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
               aria-expanded="true"
               aria-controls="account-accordion-child"
             >
               <svg
                 className="shrink-0 mt-0.5 size-4"
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
                 <circle cx={18} cy={15} r={3} />
                 <circle cx={9} cy={7} r={4} />
                 <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                 <path d="m21.7 16.4-.9-.3" />
                 <path d="m15.2 13.9-.9-.3" />
                 <path d="m16.6 18.7.3-.9" />
                 <path d="m19.1 12.2.3-.9" />
                 <path d="m19.6 18.7-.4-1" />
                 <path d="m16.8 12.3-.4-1" />
                 <path d="m14.3 16.6 1-.4" />
                 <path d="m20.7 13.8 1-.4" />
               </svg>
               Account
               <svg
                 className="hs-accordion-active:block ms-auto hidden size-4"
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
                 <path d="m18 15-6-6-6 6" />
               </svg>
               <svg
                 className="hs-accordion-active:hidden ms-auto block size-4"
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
                 <path d="m6 9 6 6 6-6" />
               </svg>
             </button>
             <div
               id="account-accordion-child"
               className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
               role="region"
               aria-labelledby="account-accordion"
             >
               <ul className="ps-8 pt-1 space-y-1">
                 
                 <li>
                   <Link
                     className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                     href="/userprofile"
                   >
                     View Profile
                   </Link>
                 </li>
                 <li>
                   <a
                     className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200"
                     href="#"
                   >
                     Edit Profile
                   </a>
                 </li>
               </ul>
             </div>
           </li>
        
           <li>
             <Link
               className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
               href="/myposts"
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
                 <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                 <line x1={16} x2={16} y1={2} y2={6} />
                 <line x1={8} x2={8} y1={2} y2={6} />
                 <line x1={3} x2={21} y1={10} y2={10} />
                 <path d="M8 14h.01" />
                 <path d="M12 14h.01" />
                 <path d="M16 14h.01" />
                 <path d="M8 18h.01" />
                 <path d="M12 18h.01" />
                 <path d="M16 18h.01" />
               </svg>
               My posts
             </Link>
           </li>
        
         </ul>
       </nav>
     </div>
     {/* End Content */}
   </div>
 </div></div>
  )
}

export default dashboard
