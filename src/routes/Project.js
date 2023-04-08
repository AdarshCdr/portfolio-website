import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer" 
import Heroimg2 from "../components/Heroimg2"
import PricingCard from '../components/PricingCard'
import Work1 from '../components/Work1'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work1 />
      <PricingCard />
      <Footer />
      
    </div>
  )
}

export default Project;
