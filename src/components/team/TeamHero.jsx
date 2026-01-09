import React from 'react'
import MotionSection from '../about/MotionSection'

const TeamHero = () => {
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
                  <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.5em]">The Creatives</span>
                </div>
                
                <h1 className="font-teko font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] 2xl:text-[110px] leading-[0.85] uppercase tracking-tighter text-gray-900 mb-8">
                  The Minds Behind <br />
                  <span className="text-brand relative inline-block">
                    The Innovation.
                    <div className="absolute -bottom-2 md:-bottom-4 left-0 w-1/2 h-2 md:h-3 bg-brand/20 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-gray-500 font-outfit text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
                  A multidisciplinary collective of obsessively curious designers, builders, and strategists dedicated to pushing the boundaries of digital possibility.
                </p>

                <div className="flex flex-wrap gap-8 justify-center lg:justify-start border-t border-gray-100 pt-10">
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">25+</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Global Experts</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">04</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Continents</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-teko font-bold text-gray-900 tracking-tight leading-none">∞</div>
                    <div className="text-gray-400 font-outfit text-[10px] uppercase font-bold tracking-widest mt-2 px-0.5">Creative Energy</div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* Right Visual Side */}
          <div className="w-full lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2 px-4 py-10 lg:py-0">
            <MotionSection direction="left" delay={300} className="w-full flex justify-center">
              <div className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-square max-w-125 lg:max-w-none z-10 overflow-visible group">
                <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="absolute -inset-4 border border-gray-100 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                
                <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="KB Creatives Team"
                    className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl z-20">
                    <div className="text-brand font-teko text-5xl font-bold leading-none">Join</div>
                    <div className="text-gray-900 font-outfit text-[10px] font-bold uppercase tracking-widest mt-1">Our Journey</div>
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 w-24 h-24 bg-brand rounded-full flex items-center justify-center text-white z-20 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

export default TeamHero
