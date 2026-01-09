import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const StatsBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredWord, setHoveredWord] = useState(null)
  const sectionRef = useRef(null)
  const digitalRef = useRef(null)
  const innovationRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: '100%' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Update underline position based on hover
  useEffect(() => {
    if (!digitalRef.current || !innovationRef.current) return

    if (hoveredWord === 'digital') {
      setUnderlineStyle({
        left: 0,
        width: `${digitalRef.current.offsetWidth}px`
      })
    } else if (hoveredWord === 'innovation') {
      setUnderlineStyle({
        left: `${digitalRef.current.offsetWidth + 12}px`, // 12px is approximate space between words
        width: `${innovationRef.current.offsetWidth}px`
      })
    } else {
      // Default: covers both
      const totalWidth = digitalRef.current.parentElement.offsetWidth
      setUnderlineStyle({
        left: 0,
        width: isVisible ? '100%' : '0%'
      })
    }
  }, [hoveredWord, isVisible])

  const stats = [
    { value: '250+', label: 'Projects', subLabel: 'Delivered' },
    { value: '150+', label: 'Happy', subLabel: 'Clients' },
    { value: '15+', label: 'Global', subLabel: 'Awards' },
    { value: '5+', label: 'Years of', subLabel: 'Excellence' },
    { value: '99%', label: 'Client', subLabel: 'Retention' },
  ]

  return (
    <div className="w-full max-w-site mx-auto px-6 py-12" ref={sectionRef}>
      <div className={`relative overflow-hidden rounded-[2.5rem] bg-black p-8 md:p-14 lg:p-20 shadow-2xl transition-all duration-[1200ms] cubic-bezier(0.2, 0, 0, 1) group/banner ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-[0.98]'
      }`}>
        {/* Abstract Background Accents */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/2 -right-1/4 w-[80%] h-full bg-brand/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand/5 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-b border-white/10 pb-16 mb-16">
            <div className={`max-w-3xl transition-all duration-[800ms] delay-300 cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-white text-4xl md:text-5xl lg:text-7xl leading-[0.9] font-teko font-bold uppercase tracking-tight cursor-default">
                <span className="inline-block transition-transform duration-500">
                  Empowering Brands With Cutting-Edge{' '}
                </span>
                <br />
                <div className="relative inline-flex items-center gap-3 mt-2">
                  <span 
                    ref={digitalRef}
                    onMouseEnter={() => setHoveredWord('digital')}
                    onMouseLeave={() => setHoveredWord(null)}
                    className={`transition-colors duration-300 ${hoveredWord === 'digital' ? 'text-white' : 'text-brand'}`}
                  >
                    Digital
                  </span>
                  <span 
                    ref={innovationRef}
                    onMouseEnter={() => setHoveredWord('innovation')}
                    onMouseLeave={() => setHoveredWord(null)}
                    className={`transition-colors duration-300 ${hoveredWord === 'innovation' ? 'text-white' : 'text-brand'}`}
                  >
                    Innovation.
                  </span>
                  
                  {/* The Dynamic Underline */}
                  <div 
                    className="absolute -bottom-2 h-1 bg-brand rounded-full transition-all duration-500 cubic-bezier(0.2, 0, 0.2, 1)"
                    style={{
                      left: underlineStyle.left,
                      width: underlineStyle.width
                    }}
                  ></div>
                </div>
              </h2>
            </div>

            <div className={`shrink-0 transition-all duration-[800ms] delay-500 cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
               <Button 
                variant="secondary" 
                className="!bg-white !text-black !h-14 !px-8 !text-lg !rounded-full hover:!scale-105 transition-all shadow-[0_10px_30px_-5px_rgba(255,255,255,0.2)] active:scale-95"
                to="/contact"
              >
                Let's Create Together
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-[800ms] cubic-bezier(0.2, 0, 0, 1) group/stat ${
                  index !== stats.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-8' : ''
                } ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${700 + (index * 100)}ms` }}
              >
                <div className="font-teko text-white text-6xl md:text-7xl font-bold mb-1 tracking-tight">
                  <span className="inline-block transition-all duration-500 text-brand group-hover/stat:scale-110 group-hover/stat:-translate-y-2 cursor-default drop-shadow-[0_0_0px_rgba(245,180,25,0)] group-hover/stat:drop-shadow-[0_10px_15px_rgba(245,180,25,0.3)]">
                    {stat.value}
                  </span>
                </div>
                <div className="text-white/50 font-outfit text-xs md:text-sm leading-relaxed uppercase tracking-[0.25em] font-medium transition-colors duration-500 group-hover/stat:text-white/80">
                  {stat.label}
                  {stat.subLabel && (
                    <>
                      <br />
                      {stat.subLabel}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Decorative Element (Abstract) */}
        <div className={`absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20 hidden lg:block pointer-events-none transition-all duration-[2000ms] delay-500 ${
          isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-50 rotate-180'
        }`}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-[spin_20s_linear_infinite] group-hover/banner:scale-110 transition-transform duration-1000">
            <path fill="#F5B419" d="M44.7,-76.4C58.3,-69.2,70,-58.5,78.2,-45.6C86.4,-32.7,91.1,-17.6,90.4,-2.4C89.7,12.7,83.6,28,74.5,41.4C65.4,54.8,53.3,66.4,39.1,73.8C24.9,81.2,8.6,84.4,-7.8,81.8C-24.2,79.2,-40.7,70.8,-54.6,59.4C-68.5,48,-79.8,33.6,-84.6,17.4C-89.4,1.2,-87.7,-16.8,-79.4,-31.6C-71.1,-46.4,-56.2,-57.9,-41,-64.7C-25.8,-71.5,-10.3,-73.4,3.1,-78.3C16.5,-83.2,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default StatsBanner
