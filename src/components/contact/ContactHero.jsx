import React from 'react'
import MotionSection from '../about/MotionSection'

const ContactHero = () => {
  return (
    <section className="relative bg-white pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 w-full relative z-10">
        <MotionSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-brand animate-width-grow"></div>
            <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.5em]">Get In Touch</span>
          </div>
          
          <h1 className="font-teko font-bold text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] 2xl:text-[130px] leading-[0.8] uppercase tracking-tighter text-gray-900 mb-8">
            Let's Start Your <br />
            <span className="text-brand relative inline-block">
              Digital Journey.
              <div className="absolute -bottom-2 md:-bottom-4 left-0 w-1/2 h-2 md:h-3 bg-brand/20 rounded-full"></div>
            </span>
          </h1>

          <p className="text-gray-500 font-outfit text-xl md:text-2xl max-w-2xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and our team will get back to you within 24 hours.
          </p>
        </MotionSection>
      </div>
    </section>
  )
}

export default ContactHero
