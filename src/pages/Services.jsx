import React, { useEffect } from 'react'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ServicesHero from '../components/services/ServicesHero'
import ProcessSection from '../components/services/ProcessSection'
import ServicesList from '../components/Services' // Reusing the high-quality services cards component

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const servicesFAQs = [
    {
      question: "Do you offer custom maintenance packages?",
      answer: "Yes, we providing ongoing support and maintenance packages tailored to your specific needs, ensuring your site remains secure and up-to-date."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. We specialize in taking outdated digital platforms and transforming them into modern, high-converting experiences."
    },
    {
      question: "What is included in your branding package?",
      answer: "Our branding packages typically include logo design, color palettes, typography guidelines, and a comprehensive brand strategy document."
    },
    {
      question: "Do you handle SEO for all websites you build?",
      answer: "Every site we build is developed with core SEO best practices. We also offer advanced SEO strategy as an additional service."
    },
    {
      question: "How do you ensure the security of your web applications?",
      answer: "We follow industry-standard security protocols, including SSL encryption, secure hosting environments, and regular vulnerability assessments."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <main>
        <ServicesHero />
        
        {/* Detailed Services Grid */}
        <div className="pb-24">
          <ServicesList isFullPage={true} />
        </div>

        <ProcessSection />

        <FAQ items={servicesFAQs} />
      </main>
      <Footer />
    </div>
  )
}

export default Services
