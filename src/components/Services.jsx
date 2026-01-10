import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const Card = ({ service, index, isVisible }) => {
  return (
    <div 
      className={`group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] transition-all duration-[800ms] cubic-bezier(0.2, 0, 0, 1) hover:border-brand/30 hover:shadow-[0_20px_50px_-15px_rgba(245,180,25,0.15)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${200 + (index * 150)}ms` }}
    >
      {/* Icon/Number Background */}
      <div className="absolute top-8 right-8 text-6xl font-teko font-bold text-gray-50 opacity-[0.05] transition-all duration-500 group-hover:opacity-[0.08] group-hover:scale-110 group-hover:text-brand">
        0{index + 1}
      </div>

      {/* Icon Placeholder with Brand Color */}
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 group-hover:bg-brand/10">
        <div className="text-brand">
          {service.icon}
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-teko font-bold text-gray-900 mb-4 tracking-tight uppercase">
        {service.title}
      </h3>
      
      <p className="text-gray-500 font-outfit text-base leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Decorative Line */}
      <div className="w-12 h-1 bg-gray-100 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-brand"></div>
      
      {/* Invisible Hover Overlay */}
      <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 group-hover:ring-brand/20 pointer-events-none"></div>
    </div>
  )
}

const Services = ({ isFullPage = false }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that grow your online presence, increase engagement, and deliver measurable business results.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      title: 'Brand Identity',
      description: 'Developing unique visual stories and brand strategies that help businesses stand out and connect with their audience.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-10.426A7.245 7.245 0 0110 3c.994 0 1.939.21 2.793.586m4.207 4.207A7.245 7.245 0 0118 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-10.426A7.245 7.245 0 0114 3c.994 0 1.939.21 2.793.586m-7.447 8.414A7.245 7.245 0 0010 18c.994 0 1.939-.21 2.793-.586m4.207-4.207A7.245 7.245 0 0018 13c0-3.517-1.009-6.799-2.753-9.571m-3.44 10.426A7.245 7.245 0 0014 18c.994 0 1.939-.21 2.793-.586" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive digital experiences that delight users and drive conversion through research-backed design systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.3c-.6 0-1.2.3-1.5.8l-1.4 1.4c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-1.4-1.4c-.3-.5-.9-.8-1.5-.8H2" />
        </svg>
      )
    },
    {
      title: 'Web Development',
      description: 'Building high-performance, scalable web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Content Strategy',
      description: 'Producing high-quality content and strategies that position your brand as an authority in its industry.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing and motion graphics that bring your stories to life with cinematic quality and engaging visuals.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section className={`bg-white overflow-hidden ${isFullPage ? 'pt-0' : 'pt-24 md:pt-36'}`} ref={sectionRef}>
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        {!isFullPage && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
            <div className={`max-w-3xl transition-all duration-[1000ms] cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                  What We Do Best
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter">
                Pushing The Boundaries Of <br />
                <span className="text-brand inline-block relative">
                  Digital Excellence.
                  <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h2>
            </div>
            
            <div className={`transition-all duration-[1000ms] delay-300 cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button variant="primary" to="/services">
                Explore All Services
              </Button>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              service={service} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
