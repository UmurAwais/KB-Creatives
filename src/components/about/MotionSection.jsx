import React, { useEffect, useRef, useState } from 'react'

const MotionSection = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <div 
      ref={ref}
      className={`transition-all duration-[1000ms] cubic-bezier(0.2, 0, 0, 1) ${className}`}
      style={{ 
        transform: isVisible ? 'translate(0, 0)' : direction === 'up' ? 'translateY(50px)' : direction === 'left' ? 'translateX(50px)' : 'translateX(-50px)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export default MotionSection
