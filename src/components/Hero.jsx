import React, { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const slides = [
    {
      title: "CREATIVITY ABOVE ALL",
      description: "We are a full-service digital agency that builds fascinating user experiences; our team creates exceptional UI design and functionality.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=90",
      bgImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=90"
    },
    {
      title: "INNOVATION DRIVES US",
      description: "Pushing the boundaries of technology to deliver smart, scalable solutions that transform how businesses interact with the digital world.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=90",
      bgImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=90"
    },
    {
      title: "DESIGN THAT SPEAKS",
      description: "Crafting visual identities that resonate. We combine aesthetics with purpose to build brands that leave a lasting impression.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=90",
      bgImage: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?w=1200&q=90"
    }
  ]

  const SLIDE_DURATION = 12000; // Premium 12 seconds duration
  const TRANSITION_SPEED = 1000; // Deeper 1-second cross-fade

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, TRANSITION_SPEED)
  }

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-white flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#F5B419] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Main Content Grid aligned with Header width */}
      <div className="w-full max-w-site mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Side */}
          <div className="w-full lg:col-span-6 relative z-30 text-center lg:text-left order-2 lg:order-1">
            <div className="relative inline-block lg:block text-left w-full lg:w-auto">
              {/* Decorative side line for heading - Premium Timing */}
              <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-[2px] bg-black/[0.05] overflow-hidden">
                <div 
                  className="w-full bg-[#F5B419] origin-top transition-transform linear"
                  style={{ 
                    height: '100%',
                    transform: isTransitioning ? 'scaleY(0)' : 'scaleY(1)',
                    transitionDuration: isTransitioning ? '0ms' : `${SLIDE_DURATION}ms`,
                    transitionTimingFunction: 'linear'
                  }}
                ></div>
              </div>

              <div 
                className={`transition-all transform cubic-bezier(0.4, 0, 0.2, 1)`}
                style={{ 
                  transitionDuration: `${TRANSITION_SPEED}ms`,
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
                }}
              >
                <h1 className="font-teko font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] 2xl:text-[110px] leading-[0.85] uppercase tracking-tighter text-black">
                  {slides[currentSlide].title.split(' ')[0]}
                  <br />
                  <span className="text-[#F5B419]">{slides[currentSlide].title.split(' ')[1]}</span>
                  <br />
                  <span>{slides[currentSlide].title.split(' ').slice(2).join(' ')}</span>
                </h1>
              </div>
            </div>
            
            <div 
              className={`mt-8 transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
              style={{ 
                transitionDuration: `${TRANSITION_SPEED}ms`,
                transitionDelay: isTransitioning ? '0ms' : '150ms',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-outfit font-light leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            <div 
              className={`mt-10 flex flex-wrap justify-center lg:justify-start gap-5 transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
              style={{ 
                transitionDuration: `${TRANSITION_SPEED}ms`,
                transitionDelay: isTransitioning ? '0ms' : '300ms',
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              <button className="btn-primary group">
                GET STARTED NOW
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="btn-secondary group">
                VIEW PORTFOLIO
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="mt-16 flex justify-center lg:justify-start items-center gap-6">
              <div className="flex gap-4">
                {slides.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      if (currentSlide === i || isTransitioning) return;
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentSlide(i);
                        setIsTransitioning(false);
                      }, TRANSITION_SPEED);
                    }}
                    className={`group relative h-1.5 transition-all duration-500 cursor-pointer ${currentSlide === i ? 'bg-transparent w-16' : 'bg-black/10 w-6 hover:bg-black/20'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {currentSlide === i && (
                      <div className="absolute inset-0 bg-black/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#F5B419] origin-left transition-transform linear"
                          style={{ 
                            width: '100%',
                            transform: isTransitioning ? 'scaleX(0)' : 'scaleX(1)',
                            transitionDuration: isTransitioning ? '0ms' : `${SLIDE_DURATION}ms`,
                            transitionTimingFunction: 'linear'
                          }}
                        ></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="h-px w-20 bg-black/10 hidden lg:block"></div>
              <div className="flex items-baseline gap-1 font-teko text-2xl text-black/40 hidden lg:block uppercase tracking-widest leading-none">
                <span className="text-black overflow-hidden relative inline-block">
                   0{currentSlide + 1}
                </span>
                <span className="text-black/20">/</span>
                <span>0{slides.length}</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition Side */}
          <div className="w-full lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2 px-4 py-10 lg:py-0">
            {/* Background Circle Outline - Floating Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square border-2 border-black/2 rounded-full z-0 max-w-162.5 animate-[spin_20s_linear_infinite] opacity-50"></div>

            <div className="relative w-full aspect-4/5 sm:aspect-4/3 max-w-125 lg:max-w-none z-10 overflow-visible">
              {/* Backing Image - Kinetic Motion */}
              <div 
                className={`absolute right-0 top-0 w-[85%] h-[85%] overflow-hidden z-0 rounded-2xl shadow-2xl transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
                style={{ 
                  transitionDuration: `${TRANSITION_SPEED}ms`,
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'scale(0.95) rotate(-2deg)' : 'scale(1) rotate(0deg)'
                }}
              >
                <img 
                  src={slides[currentSlide].bgImage} 
                  alt="Background texture"
                  className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform linear"
                  style={{ 
                    transform: isTransitioning ? 'scale(1.15) translate(10px, 10px)' : 'scale(1) translate(0, 0)',
                    transitionDuration: `${SLIDE_DURATION}ms`
                  }}
                />
              </div>

              {/* Main Overlapping Image - Smooth Float */}
              <div 
                className={`absolute left-0 bottom-0 w-[85%] h-[85%] z-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden rounded-3xl ring-8 ring-white transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
                style={{ 
                  transitionDuration: `${TRANSITION_SPEED}ms`,
                  transitionDelay: '100ms',
                  opacity: isTransitioning ? 0 : 0.95,
                  transform: isTransitioning ? 'translate(20px, 20px) scale(0.95)' : 'translate(0, 0) scale(1)'
                }}
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt="Main visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge - Premium Slide */}
              <div 
                className={`absolute -right-4 bottom-1/4 z-30 bg-black text-white p-7 rounded-4xl shadow-2xl hidden md:block transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
                style={{ 
                  transitionDuration: `${TRANSITION_SPEED}ms`,
                  transitionDelay: '200ms',
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateX(40px)' : 'translateX(0)'
                }}
              >
                <p className="font-teko text-6xl leading-none font-bold">500+</p>
                <p className="font-outfit text-[12px] text-white/50 uppercase tracking-[0.3em] mt-3">Projects Delivered</p>
                {/* Subtle shine effect on badge */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform -translate-x-full animate-[shimmer_3s_infinite]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
