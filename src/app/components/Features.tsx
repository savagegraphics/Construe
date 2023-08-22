import React from 'react'
import Link from 'next/link'


type Props = {}

const Features = (props: Props) => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
    <div className="container flex flex-col lg:flex-row">
    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
        <div className="relative xl:col-span-3 flex items-start justify-start">
          <img src="https://www.idealdesignsource.com/assets/images/about.jpg" 
              alt="" className="h-[627px] w-[627px]" />
               <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEYlW676qPuhab7ifGYXMMUYUWHiuS1tG7Z4qiWMS8jnjb0RJW' alt="Image"
                 className="hidden md:block absolute lg:bottom-[20px] lg:right-[-80px] w-[297px] h-[200px] rounded-md"
                />
        </div>
      </div>
      <div className="flex flex-col px-6 py-8 m-14 my-14 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
      <div className="">
        <h1 className='text-black text-5xl lg:ml-36 font-[24px] whitespace-nowrap'>What You Get</h1>
      </div>
        <div className="flex space-x-2 sm:space-x-4 lg:ml-36">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="15" cy="15" r="15" fill="#EE6401"/>
        </svg>
          <div className="space-y-2">
            <p className="text-lg font-medium leading whitespace-nowrap">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:ml-36">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="15" cy="15" r="15" fill="#EE6401"/>
        </svg>
          <div className="space-y-2">
            <p className="text-lg font-medium leading whitespace-nowrap">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:ml-36">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="15" cy="15" r="15" fill="#EE6401"/>
        </svg>
          <div className="space-y-2">
            <p className="text-lg font-medium leading whitespace-nowrap">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:ml-36">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="15" cy="15" r="15" fill="#EE6401"/>
        </svg>
          <div className="space-y-2">
            <p className="text-lg font-medium leading whitespace-nowrap">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 lg:ml-36">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="15" cy="15" r="15" fill="#EE6401"/>
        </svg>
          <div className="space-y-2">
            <p className="text-lg font-medium leading whitespace-nowrap">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features