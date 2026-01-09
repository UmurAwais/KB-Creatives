import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import TeamHero from '../components/team/TeamHero'
import TeamGrid from '../components/team/TeamGrid'
import JoinTeamCTA from '../components/about/JoinTeamCTA'

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamFAQs = [
    {
      question: "Is KB Creatives currently hiring?",
      answer: "We are always looking for exceptional talent! Check our Join Our Team section below or follow us on LinkedIn for open positions."
    },
    {
      question: "Do you offer remote work opportunities?",
      answer: "Yes, we are a remote-first agency. While we have creative hubs in key cities, our core team is spread across various time zones and continents."
    },
    {
      question: "What is your team's design process?",
      answer: "Our team follows a collaborative, research-driven process that merges senior creative leadership with agile technical execution."
    },
    {
      question: "Can I speak directly with the team working on my project?",
      answer: "Absolutely. We believe in direct communication. You'll have regular interactions with the lead designer and developer assigned to your vision."
    },
    {
      question: "How do you maintain quality across a remote team?",
      answer: "We use robust collaboration tools like Figma, ClickUp, and Slack, combined with daily syncs and a rigorous peer-review culture."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <main>
        <TeamHero />
        <TeamGrid />
        <FAQ items={teamFAQs} title="Our Culture" subtitle="F.A.Q." />
        <JoinTeamCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Team
