import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Simon Johnson',
    role: 'CEO, TechFlow',
    content: "KB Creatives transformed our digital presence. Their strategic approach to UI/UX didn't just make our app look better; it significantly improved our user engagement and conversion rates.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Nexus Labs',
    content: "The level of innovation and technical expertise the team brings is unparalleled. They understood our complex requirements perfectly and delivered a scalable solution on time.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80'
  },
  {
    name: 'Everett Rodriguez',
    role: 'Marketing Director, Lumina',
    content: "Working with KB Creatives was the best decision for our rebranding. They captured our brand essence effortlessly and created a visual identity that truly stands out in the market.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80'
  }
]

const SLIDE_DURATION = 6000 // 6 seconds

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredWord, setHoveredWord] = useState(null)
  const sectionRef = useRef(null)
  const sayRef = useRef(null)
  const aboutUsRef = useRef(null)
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

  // Auto-play logic
  useEffect(() => {
    if (!isVisible || isPaused) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [isVisible, isPaused])

  // Update underline position based on hover
  useEffect(() => {
    if (!sayRef.current || !aboutUsRef.current) return

    if (hoveredWord === 'say') {
      setUnderlineStyle({
        left: 0,
        width: `${sayRef.current.offsetWidth}px`
      })
    } else if (hoveredWord === 'about') {
      setUnderlineStyle({
        left: `${sayRef.current.offsetWidth + 12}px`, // 12px gap
        width: `${aboutUsRef.current.offsetWidth}px`
      })
    } else {
      setUnderlineStyle({
        left: 0,
        width: isVisible ? '100%' : '0%'
      })
    }
  }, [hoveredWord, isVisible])

  return (
    <div 
      className="w-full max-w-site mx-auto px-6 py-12" 
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`relative overflow-hidden rounded-[2.5rem] bg-black p-8 md:p-14 lg:p-20 shadow-2xl transition-all duration-[1200ms] cubic-bezier(0.2, 0, 0, 1) ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-[0.98]'
      }`}>
        {/* Background Accents */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-1/2 -right-1/4 w-[80%] h-full bg-brand/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand/5 blur-[80px] rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-white/10 pb-12 mb-16">
            <div className={`max-w-3xl transition-all duration-[800ms] delay-300 cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                  The Voice of Success
                </span>
              </div>
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-teko font-bold uppercase tracking-tighter leading-[0.85] cursor-default">
                What Our Clients <br />
                <div className="relative inline-flex items-center gap-3 mt-2">
                  <span 
                    ref={sayRef}
                    onMouseEnter={() => setHoveredWord('say')}
                    onMouseLeave={() => setHoveredWord(null)}
                    className={`transition-colors duration-300 ${hoveredWord === 'say' ? 'text-white' : 'text-brand'}`}
                  >
                    Say
                  </span>
                  <span 
                    ref={aboutUsRef}
                    onMouseEnter={() => setHoveredWord('about')}
                    onMouseLeave={() => setHoveredWord(null)}
                    className={`transition-colors duration-300 ${hoveredWord === 'about' ? 'text-white' : 'text-brand'}`}
                  >
                    About Us.
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
            
            <div className={`hidden lg:block transition-all duration-[800ms] delay-500 ${
              isVisible ? 'opacity-20' : 'opacity-0'
            }`}>
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-brand">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.834z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-2/3">
              <div className="relative min-h-[300px] md:min-h-[220px]">
                {testimonials.map((item, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-[800ms] cubic-bezier(0.2, 0, 0, 1) ${
                      activeIndex === index 
                        ? 'opacity-100 translate-x-0 pointer-events-auto' 
                        : activeIndex < index ? 'opacity-0 translate-x-20 pointer-events-none' : 'opacity-0 -translate-x-20 pointer-events-none'
                    }`}
                  >
                    <p className="text-white/80 font-outfit text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic">
                      "{item.content}"
                    </p>
                    
                    <div className="mt-8">
                       <h4 className="text-brand font-teko text-3xl font-bold uppercase tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-white/40 font-outfit text-xs md:text-sm uppercase tracking-[0.25em] font-medium mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 justify-center">
              {testimonials.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPaused(true)
                  }}
                  className={`group relative flex items-center gap-5 p-4 rounded-3xl transition-all duration-500 overflow-hidden ${
                    activeIndex === index 
                      ? 'bg-white/10 shadow-[0_15px_30px_-10px_rgba(245,180,25,0.15)] scale-105' 
                      : 'hover:bg-white/5 opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 transition-all duration-500 group-hover:rotate-6 ${
                    activeIndex === index ? 'border-brand p-1' : 'border-transparent'
                  }`}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  
                  <div className="text-left hidden md:block">
                     <div className={`font-teko text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                        activeIndex === index ? 'text-brand' : 'text-white'
                      }`}>
                        {item.name.split(' ')[0]}
                      </div>
                      <div className="text-white/30 font-outfit text-[10px] uppercase tracking-widest font-bold">
                        Client
                      </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
