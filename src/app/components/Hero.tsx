import React from 'react'
import 'tailwindcss/tailwind.css';
import Navbar from './navbar';
import Link from 'next/link'


type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="p-6 bg-[#EE6401] text-gray-100 lg:h-[140vh]">
    <Navbar/>
	<div className="container grid gap-6 mx-auto text-center lg:my-8 lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
			<h1 className="flex items-start lg:text-5xl text-2xl lg:font-[24px] sm:font-[16px]">We Build Very</h1>
            <h1 className="flex items-start lg:text-5xl text-2xl lg:font-[24px] sm:font-[16px]">Modern and</h1>
        	<h1 className="flex items-start whitespace-nowrap lg:text-5xl text-2xl lg:font-[24px] sm:font-[16px]">Stylish Buildings.</h1>
		    <p className="flex items-start pt-8 font-medium">Modular and versatile. Fugit vero facilis dolor sit</p>
            <p className="flex items-start pb-8 font-medium">neque cupiditate minus esse accusamus.</p>
          <button type="button" className="flex items-start px-8 py-3 bg-gray-100 text-gray-800 rounded-lg">Caret</button>
        </div>
        <div className='relative xl:col-span-3 sm:m-8 sm:mr-20'>
  <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80" 
  alt="" className="object-cover lg:w-[737px] lg:h-[549px] sm:w-[447px] sm:h-[449px] rounded-md " />

  {/* Hide the second image on md and small screens */}
  <img
    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrkeOfAQJZZdD6JRtzLbnTO0ualIrpstwIwu-MSMYT3t3w5F5t"
    alt=""
    className="hidden lg:block absolute lg:bottom-[-80px] lg:left-[-96px] w-[410.28px] h-[273.85px] rounded-md"
  />
</div>

    </div>
</section>
  )
}

export default Hero
