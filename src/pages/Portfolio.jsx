import React from 'react'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Portfolio = () => {
  const portfolioFAQs = [
    {
      question: "Are all the projects in your portfolio currently live?",
      answer: "Most of our featured projects are live. However, some deep-tech or enterprise projects may show redacted versions due to NDA restrictions."
    },
    {
      question: "Do you specialize in specific industries?",
      answer: "We are industry-agnostic but have deep expertise in FinTech, E-commerce, SaaS, and luxury lifestyle brands."
    },
    {
      question: "Can you provide more detailed case studies?",
      answer: "Yes, we have comprehensive case studies that detail our process, challenges, and results. Reach out to us if you'd like to see a specific breakdown."
    },
    {
      question: "How long does a typical redesign project take?",
      answer: "A strategic redesign typically takes between 6 to 10 weeks, depending on the volume of content and technical complexity."
    },
    {
      question: "Have you won any awards for your portfolio work?",
      answer: "Yes, our work has been recognized by several international design communities for innovation and user experience excellence."
    }
  ]

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-40 md:pt-48">
      <main>
        <div className="max-w-site mx-auto px-6 md:px-12 mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-teko font-bold text-gray-900 uppercase tracking-tighter">Our <span className="text-brand">Portfolio.</span></h1>
          <p className="text-gray-500 font-outfit text-xl mt-6 max-w-2xl mx-auto">A showcase of our best work, where creativity meets technical excellence to deliver real results.</p>
        </div>
        <FAQ items={portfolioFAQs} />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
