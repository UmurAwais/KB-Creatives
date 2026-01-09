import React from 'react'
import Hero from '../components/Hero'
import ScrollingText from '../components/ScrollingText'
import StatsBanner from '../components/StatsBanner'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  const homeFAQs = [
    {
      question: "What specific services do you offer?",
      answer: "We offer a full suite of digital solutions including UI/UX design, custom web development, mobile app development, brand identity creation, and strategic digital marketing."
    },
    {
      question: "How do I start a project with KB Creatives?",
      answer: "Starting is easy! Just head to our contact page and fill out the form, or reach out directly via email. We'll schedule a discovery call to understand your needs and provide a tailored proposal."
    },
    {
      question: "What makes KB Creatives unique in the industry?",
      answer: "We bridge the gap between technical complexity and high-end design. Our team doesn't just build functional sites; we create premium digital experiences that are visually stunning and performance-optimized."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes, we love working with startups! We offer scalable solutions that grow with your business, from MVPs to full-scale enterprise platforms. We're partners in your growth journey."
    },
    {
      question: "How long does a typical digital project take?",
      answer: "Depending on the complexity, a standard project typically ranges from 4 to 12 weeks. We follow an agile methodology to ensure transparent communication and timely delivery of milestones."
    }
  ]

  return (
    <div>
      <Hero />
      <ScrollingText />
      <StatsBanner />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
      <FAQ items={homeFAQs} />
      <Footer />
    </div>
  )
}

export default Home