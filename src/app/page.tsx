import React from 'react'
import 'tailwindcss/tailwind.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Feature from './components/Feature';
import Footer from './components/Footer';
import CTAskeleton from './components/CTAskeleton';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
    <Hero/>
    <CTAskeleton/>
    <Features/>
    <Feature/>
    <Footer/>
    </div>
  )
}

export default page