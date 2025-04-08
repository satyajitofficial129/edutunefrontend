import React from 'react'
import Banner from "@/componants/Banner";
import Feature from "@/componants/Feature";
import About from '@/componants/About';
import Courses from '@/componants/Courses';
import Counter from '@/componants/Counter';
import OurStaff from '@/componants/OurStaff';
import AppDownload from '@/componants/AppDownload';
import Facility from '@/componants/Facility';
import Testimonial from '@/componants/Testimonial';
import PartnerSlider from '@/componants/PartnerSlider';
import Gallery from '@/componants/Gallery';
import Blog from '@/componants/Blog';

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Courses />
      <Counter />
      <OurStaff />
      <Gallery />
      <AppDownload />
      <Facility />
      <Testimonial />
      <Blog />
      <PartnerSlider />
    </>
  )
}

export default Home
