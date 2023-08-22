import React from 'react'
import Link from 'next/link'


type Props = {}

const CTA = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 sm:gap-6">
        <Link className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="group-hover:text-gray-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                The Buildings 
                </h3>
                <h3 className="group-hover:text-gray-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                Questionnaire 
                </h3>
              </div>
              <div className="pl-3">
              <h2 className='text-xl'>Step</h2>
               <h2 className='text-4xl text-black font-semibold ml-4'>1</h2>
              </div>
            </div>
          </div>
        </Link>
        <Link className="group flex flex-col bg-black border border-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
              <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200">
              The Buildings
                </h3>
                <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200"> 
                Interview
                </h3>
              </div>
              <div className="pl-3">
              <h2 className='text-xl text-white'>Step</h2>
               <h2 className='text-4xl text-white font-semibold ml-4'>2</h2>
              </div>
            </div>
          </div>
        </Link>

        <Link className="group flex flex-col bg-black border border-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
              <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200">
              The Buildings 
                </h3>
                <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200">
               Design Process
                </h3>
              </div>
              <div className="pl-3">
              <h2 className='text-xl text-white'>Step</h2>
               <h2 className='text-4xl text-white font-semibold ml-4'>3</h2>
              </div>
            </div>
          </div>
        </Link>

        <Link className="group flex flex-col bg-black border border-white shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
              <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200">
              WE BUILD 
                </h3>
                <h3 className="group-hover:text-gray-400 font-semibold text-white dark:group-hover:text-gray-400 dark:text-gray-200">
               YOUR HOME
                </h3>
              </div>
              <div className="pl-3">
              <h2 className='text-xl text-white'>Step</h2>
               <h2 className='text-4xl text-white font-semibold ml-4'>4</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CTA