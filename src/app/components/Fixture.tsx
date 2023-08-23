import React from 'react'

type Props = {}

const Fixture = (props: Props) => {
  return (
    <section className="bg-[#EE6300] text-gray-100">
	<div className="container lg:ml-32 ml-0 flex flex-col-reverse lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
			<div className="flex space-x-2 sm:space-x-4">
				<div className="space-y-2 lg:mb-14 mb-2">
					<p className="flex items-center justify-center text-white text-4xl font-[2rem] mt-8 mb-14 text-left pr-8 leading-8 tracking-wide">About Us</p>
					<p className="text-white lg:ml-[-3rem] ml-6 text-[1rem] font-[6px] text-left pr-8 leading-8 tracking-wide">At Construe, we take pride in building dreams from the ground up. 
          Established with a vision for excellence and passion for construction,
           we have emerged as a trusted leader in the industry. With unwavering commitment 
           and a team of skilled professionals, we have successfully transformed countless ideas into tangible, 
            awe-inspiring structures.</p>
				</div>
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 right-0">
			<div className="flex items-center justify-center">
				<img  src="https://lirp.cdn-website.com/802007e2/dms3rep/multi/opt/pexels-photo-2816323-0a2f4a0c-130239be-1920w.jpeg"  alt="" 
                className="shadow-lg lg:h-[691px] lg:w-[673px]" />
			</div>
		</div>
	</div>
</section>
  )
}

export default Fixture