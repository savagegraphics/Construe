import React from 'react'
import 'tailwindcss/tailwind.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CTAskeleton from './components/CTAskeleton';
import Fixture from './components/Fixture';

type Props = {}

const page = (props: Props) => {
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <CTAskeleton/>
    <Features/>
    <Fixture/>
    <Footer/>
    </div>
  )
}

export default page