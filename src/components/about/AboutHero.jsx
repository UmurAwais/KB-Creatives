import React, { useState, useEffect } from 'react'

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-brand"></div>
            <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
              Established 2021
            </span>
            <div className="w-12 h-[2px] bg-brand"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter mb-6">
            Crafting The
            <br />
            <span className="text-brand relative inline-block">
              Digital Future.
              <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand/20 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-gray-500 font-outfit text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            KB Creatives is a design-driven technology agency. We help forward-thinking brands build meaningful connections with their audience through cutting-edge digital experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <p className="font-teko text-5xl md:text-6xl font-bold text-brand">120+</p>
              <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="font-teko text-5xl md:text-6xl font-bold text-brand">50+</p>
              <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="font-teko text-5xl md:text-6xl font-bold text-brand">15+</p>
              <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
