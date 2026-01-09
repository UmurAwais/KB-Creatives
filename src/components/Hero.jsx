import React from 'react'
import BannerSlider from './BannerSlider'

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-white flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#F5B419] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <BannerSlider />
    </section>
  )
}

export default Hero
