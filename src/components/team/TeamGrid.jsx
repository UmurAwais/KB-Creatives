import React, { useState } from 'react'
import MotionSection from '../about/MotionSection'
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: "Thomas Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    category: "Leadership",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    category: "Design",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    category: "Engineering",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    category: "Marketing",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Smith",
    role: "Senior UI Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    category: "Design",
    social: { linkedin: "#", dribbble: "#" }
  },
  {
    name: "Jessica Lee",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    category: "Engineering",
    social: { linkedin: "#", github: "#" }
  }
]

const CATEGORIES = ["All", "Leadership", "Design", "Engineering", "Marketing"]

const MemberCard = ({ member, index }) => {
  return (
    <MotionSection delay={index * 100} className="group">
      <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-6 shadow-xl bg-gray-100">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Social Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-gray-900/90 to-transparent">
          <div className="flex items-center justify-center gap-4">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-gray-900 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-gray-900 transition-all duration-300">
                <Twitter size={18} />
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-gray-900 transition-all duration-300">
                <Github size={18} />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-gray-900 transition-all duration-300">
                <Instagram size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="text-center px-4">
        <h3 className="text-2xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-1 group-hover:text-brand transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-gray-400 font-outfit text-sm uppercase font-bold tracking-[0.2em]">
          {member.role}
        </p>
      </div>
    </MotionSection>
  )
}

const TeamGrid = () => {
  const [activeTab, setActiveTab] = useState("All")

  const filteredMembers = activeTab === "All" 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(member => member.category === activeTab)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-teko text-xl font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                activeTab === cat 
                  ? 'bg-brand border-brand text-gray-900 shadow-xl shadow-brand/20' 
                  : 'bg-transparent border-gray-100 text-gray-400 hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredMembers.map((member, idx) => (
            <MemberCard key={member.name} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGrid
