import React from 'react'
import MotionSection from './MotionSection'

const VisionBanner = () => {
  return (
    <section className="bg-black py-24 md:py-36 rounded-[3rem] mx-6 md:mx-12 overflow-hidden relative group">
      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      <div className="max-w-site mx-auto px-6 md:px-12 relative z-10 text-center">
        <MotionSection>
          <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.5em] mb-10 block">Our Core Mission</span>
          <blockquote className="text-white text-4xl md:text-6xl lg:text-7xl font-teko font-bold leading-[0.9] uppercase tracking-tighter max-w-5xl mx-auto italic">
            "We don't just build websites; we build <span className="text-brand">digital legacies</span> that empower brands to dominate their space and inspire their users."
          </blockquote>
        </MotionSection>
      </div>
    </section>
  )
}

export default VisionBanner
