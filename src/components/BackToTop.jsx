import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div 
      className={`fixed bottom-8 right-6 md:right-10 z-[999] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center cursor-pointer"
        aria-label="Back to top"
      >
        {/* Outer Ring Animation */}
        <div className={`absolute inset-[-4px] border border-brand/20 rounded-2xl transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100`}></div>
        
        {/* Main Button Body */}
        <div className="relative w-14 h-14 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(245,180,25,0.25)] group-hover:scale-110 group-active:scale-95 border border-gray-100">
          {/* Brand Background Slide Up on Hover */}
          <div className={`absolute inset-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0`}></div>
          
          {/* Arrow Icon */}
          <ArrowUp 
            className={`relative z-10 transition-all duration-500 ${
              isHovered ? 'text-white -translate-y-1' : 'text-brand'
            }`} 
            size={22} 
            strokeWidth={2.5}
          />

          {/* Magnetic Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] pointer-events-none"></div>
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden md:block">
          Back to Top
        </span>
      </button>
    </div>
  )
}

export default BackToTop
