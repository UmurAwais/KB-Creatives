import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import VisionBanner from '../components/about/VisionBanner'
import CoreValues from '../components/about/CoreValues'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import JoinTeamCTA from '../components/about/JoinTeamCTA'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const aboutFAQs = [
    {
      question: "Where is KB Creatives physically based?",
      answer: "We are a remote-first agency with headquarters in digital innovation hubs, but our team is spread across four continents, allowing us to serve clients globally 24/7."
    },
    {
      question: "How large is your creative and technical team?",
      answer: "Our team consists of 25+ passionate multidisciplinary professionals, including senior designers, full-stack developers, project managers, and digital strategists."
    },
    {
      question: "What is your core design philosophy?",
      answer: "Our philosophy is 'Function through Form.' We believe that high-end aesthetics shouldn't come at the cost of usability; they should enhance and empower the user experience."
    },
    {
      question: "Do you offer remote collaboration for clients?",
      answer: "Absolutely. We've mastered the art of remote project management using tools like Slack, Figma, and ClickUp to ensure you're part of the creative process regardless of your timezone."
    },
    {
      question: "What tech stack do you primarily use for projects?",
      answer: "We specialize in modern technologies like React, Next.js, and Node.js for high-performance web apps, while utilizing robust platforms like Shopify and Webflow for rapid market entry."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <main>
        <AboutHero />
        <OurStory />
        <VisionBanner />
        <CoreValues />
        <div className="mb-24 md:mb-36">
          <Services />
        </div>
        <FAQ items={aboutFAQs} />
        {/* <JoinTeamCTA /> */}
      </main>
      <Footer />
    </div>
  )
}

export default About
