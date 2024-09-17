"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const Communities = () => {
  const [communitylist, setCommunitylist] = useState([]);
  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/community/getall");
    setCommunitylist(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <>
        {/* Table Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl mb-8 shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        Communities
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Join and post in any community.
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <Link
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="/createcommunity"
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
                </div>
                {/* End Header */}
                {/* Table */}
                {communitylist.map((community) => {
                  return (
                    <div className="bg-white border border-gray-200 rounded-xl mb-4 shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 table-fixed">
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                          <tr>
                            <td className="w-3/12 whitespace-nowrap">
                              <div className="px-6 py-3 flex items-center gap-x-3">
                                <img
                                  className="inline-block size-[38px] rounded-full"
                                  src={community.image}
                                  alt="Avatar"
                                />
                                <div>
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                    {community.title}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="max-w-72 text-wrap">
                              <div className="px-6 py-3">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  Description
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-neutral-500 break-words">
                                  {community.description}
                                </span>
                              </div>
                            </td>
                            <td className="text-end whitespace-nowrap">
                              <div className="px-6 py-3">
                                <Link
                                  className="inline-flex bg-violet-500 hover:bg-violet-700 items-center gap-x-1 text-sm text-white rounded-lg py-2 px-4 decoration-2 focus:outline-none font-medium dark:text-blue-500"
                                  href={'/dashboard/'+community._id}
                                >
                                  View Posts
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
                {/* End Table */}
                {/* Footer */}
                {/* End Footer */}
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </>
    </div>
  );
};

export default Communities;
