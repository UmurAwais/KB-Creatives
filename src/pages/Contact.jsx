import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/contact/ContactForm'
import FAQ from '../components/FAQ'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const contactFAQs = [
    {
      question: "How quickly can I expect a response after submitting?",
      answer: "We value your time. Our team typically responds to all new project inquiries within 24 business hours to arrange an initial discovery session."
    },
    {
      question: "Do you offer free initial consultations?",
      answer: "Yes, your first 30-minute discovery call is completely free. We use this time to understand your goals and determine if we're a good strategic match for your vision."
    },
    {
      question: "What information should I provide for a more accurate quote?",
      answer: "Providing details about your project goals, target audience, preferred timeline, and a rough budget range helps us provide a much more accurate and meaningful proposal."
    },
    {
      question: "Are you available for in-person meetings?",
      answer: "While we are a remote-first agency, we are open to in-person meetings for large-scale projects or strategic partnerships, depending on location and project scope."
    },
    {
      question: "Do you require a deposit to begin a project?",
      answer: "Yes, we typically require a 50% initial deposit to secure your spot in our production cycle and begin the discovery and design phases of your project."
    }
  ]

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-40 md:pt-48">
      <main>
        <ContactForm />
        <FAQ items={contactFAQs} />
      </main>
      <Footer />
    </div>
  )
}

export default Contact