import React from 'react'
import Hero from '../components/Hero'
import ScrollingText from '../components/ScrollingText'
import StatsBanner from '../components/StatsBanner'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollingText />
      <StatsBanner />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home