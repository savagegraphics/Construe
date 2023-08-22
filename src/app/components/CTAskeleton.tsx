import React from 'react'
import CTA from './CTA'
import Link from 'next/link'

type Props = {}

const CTAskeleton = (props: Props) => {
  return (
<div className="bg-black max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid md:grid-cols-2 gap-12">
    <div className="lg:w-3/4">
    <CTA/>
    </div>

    <div className="space-y-6 lg:space-y-10">
      <div className="flex">
        <div className="lg:mt-44 m-16 sm:ml-8">
          <h3 className="lg:text-6xl text-4xl whitespace-nowrap font-bold text-white dark:text-gray-200">
          How This Works
          </h3>
          <p className="text-xl font-medium leading-9 mt-10 text-white dark:text-gray-400">
          At this stage, you get to decide on what you want. This is then brought up to 3D ,
           so  that the final design looks as close as what you have envisioned. </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CTAskeleton