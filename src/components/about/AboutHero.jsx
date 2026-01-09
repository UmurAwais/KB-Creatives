import React from 'react'
import MotionSection from './MotionSection'

const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-white flex items-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-site mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Content Side */}
          <div className="w-full lg:col-span-6 relative z-30 text-center lg:text-left order-2 lg:order-1">
            <MotionSection>
              <div className="relative inline-block lg:block text-left w-full lg:w-auto">
                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                  <div className="w-12 h-[2px] bg-brand animate-width-grow"></div>
                  <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.5em]">Establish 2021</span>
                </div>
                
                <h1 className="font-teko font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] 2xl:text-[110px] leading-[0.85] uppercase tracking-tighter text-gray-900 mb-8">
                  Crafting The <br />
                  <span className="text-brand relative inline-block">
                    Digital Future.
                    <div className="absolute -bottom-2 md:-bottom-4 left-0 w-1/2 h-2 md:h-3 bg-brand/20 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-gray-500 font-outfit text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                  KB Creatives is a design-driven technology agency. We help forward-thinking brands build meaningful connections with their audience through cutting-edge digital experiences.
                </p>

                <div className="flex flex-wrap gap-8 justify-center lg:justify-start border-t border-gray-100 pt-10">
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">120+</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Projects Done</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">50+</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Happy Clients</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">15+</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Awards Won</div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* Right Visual Side - Matching BannerSlider aspect and sizing */}
          <div className="w-full lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2 px-4 py-10 lg:py-0">
            <MotionSection direction="left" delay={300} className="w-full flex justify-center">
              <div className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-square max-w-125 lg:max-w-none z-10 overflow-visible group">
                {/* Decorative Background for Image */}
                <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="absolute -inset-4 border border-gray-100 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                
                {/* Main Image */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80"
                    alt="KB Creatives Work"
                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20 animate-bounce-slow">
                    <div className="text-brand font-teko text-5xl font-bold leading-none">99%</div>
                    <div className="text-gray-900 font-outfit text-[10px] font-bold uppercase tracking-widest mt-1">Success Rate</div>
                  </div>
                </div>

                {/* Accent Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand rounded-full flex items-center justify-center text-white z-20 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </MotionSection>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero
