import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";
const hero = () => {
  return (
    <section>
      <div className="px-8 pt-16 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="text-center">
          <h1 className=" whitespace-nowrap text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
            Bringing People Together, Anytime
            <span>
              {" "}
              <TextGenerateEffect words="with Nexus" />
            </span>
          </h1>
          <p className="mt-4 text-base font-medium text-gray-500">
            The Fastest Way to Collaborate
            <span className="md:block">
              {" "}
              on Flexible, Temporary Spaces Virtually.
            </span>
          </p>
          <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
            <Button
              borderRadius="0.8rem"
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 md:w-auto rounded-xl text-white hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Download on Google Play"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-4"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
              </svg>
              <span className="text-xs text-white">
                Download on Google Play
              </span>
            </Button>
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Download on App Store"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-4"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
              </svg>
              <span className="text-xs text-gray-600">
                Download on App Store
              </span>
            </button>
          </div>
          <div className="grid mx-auto mt-12 sm:grid-cols-3 lg:mt-24">
            <img
              className="hidden mx-auto sm:block lg:-mr-24"
              src="/images/appify/mockup.png"
              alt=""
            />
            <img
              className="hidden mx-auto sm:block lg:-mt-12 lg:z-50"
              src="/images/appify/mockup.png"
              alt=""
            />
            <img
              className="mx-auto lg:-ml-24"
              src="/images/appify/mockup.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <section>
        <div className=" px-8 sm:pb-0 md:pb-[6em] lg:pb-[6em] mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="grid grid-cols-1 text-sm font-medium text-center text-gray-500 gap-x-6 gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 text-balance">
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="flex items-center justify-center mx-auto bg-gray-100 rounded-full size-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="text-gray-600 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-base text-gray-900">Experience</h3>
                <p className="mt-2">
                  Seamlessly operates on low connectivity, efficiently and
                  ensuring a smooth experience.
                </p>
                <div className="flex justify-center mt-8">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none"
                    aria-label="Read more about the topic"
                  >
                    <span>Read more</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="size-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="flex items-center justify-center mx-auto bg-gray-100 rounded-full size-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="text-gray-600 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-base text-gray-900">Capture & Share</h3>
                <p className="mt-2">
                  Effortlessly capture and post moments from your day to keep
                  your followers updated!
                </p>
                <div className="flex justify-center mt-8">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none"
                    aria-label="Read more about the topic"
                  >
                    <span>Read more</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="size-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="flex items-center justify-center mx-auto bg-gray-100 rounded-full size-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="text-gray-600 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-base text-gray-900">Secure</h3>
                <p className="mt-2">
                  Utilizes multiple layers of security to protect your data and
                  ensure your privacy.
                </p>
                <div className="flex justify-center mt-8">
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none"
                    aria-label="Read more about the topic"
                  >
                    <span>Read more</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="size-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default hero;
