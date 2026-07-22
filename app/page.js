import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Products'
import Industries from './components/Industries'
import About from './components/About'
import Parallax from "./components/Parallex"

import Testimonial from './components/Testimonials'
import CTA from './components/CTA'
import Blog from './components/Blog'
import Footer from './components/Footer'
const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    {/* <Services /> */}
    <WhyChooseUs />
    {/* <Products /> */}
    <Industries />
       <Parallax img="/parallax/banner1.png"/>
      <Blog />
      <CTA />
    <Testimonial/>
    
  
    <Footer />
      
    </>
  )
}

export default page
