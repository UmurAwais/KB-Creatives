import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const FeatureItem = ({ title, description, index, isVisible }) => {
  return (
    <div 
      className={`group flex gap-6 p-6 rounded-[2rem] transition-all duration-700 cubic-bezier(0.2, 0, 0, 1) hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-transparent hover:border-brand/10 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
      }`}
      style={{ transitionDelay: `${400 + (index * 150)}ms` }}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-brand font-teko text-3xl font-bold group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-teko font-bold text-gray-900 mb-2 uppercase tracking-tight transition-colors duration-300 group-hover:text-brand">
          {title}
        </h3>
        <p className="text-gray-500 font-outfit text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  )
}

const WhyChooseUs = () => {
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

  const features = [
    {
      title: 'Strategic Innovation',
      description: 'We don’t just design; we strategize. Every pixel and line of code is purpose-built to solve complex business challenges.'
    },
    {
      title: 'User-First Philosophy',
      description: 'Your customers are at the heart of everything we create. We build experiences that resonate and convert.'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We stay ahead of the curve, utilizing the latest frameworks and design trends to keep your brand state-of-the-art.'
    }
  ]

  return (
    <section className="bg-white py-24 md:py-38 overflow-hidden" ref={sectionRef}>
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          {/* Left Visual Side */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-[1500ms] cubic-bezier(0.2, 0, 0, 1) flex ${
            isVisible ? 'translate-x-0 opacity-100 scale-100 rotate-0' : '-translate-x-32 opacity-0 scale-90 -rotate-2'
          }`}>
            <div className="relative group/image w-full flex flex-col">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden flex-grow min-h-[400px] shadow-2xl transition-transform duration-700 group-hover/image:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Floating Tags on Image */}
                <div className="absolute top-8 left-8 bg-brand text-white px-6 py-2 rounded-full font-teko text-xl font-bold tracking-widest uppercase animate-bounce" style={{ animationDuration: '3s' }}>
                  Best Agency
                </div>
              </div>

              {/* Overlapping Info Card */}
              <div className={`absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] max-w-[320px] transition-all duration-1000 delay-500 cubic-bezier(0.2, 0, 0, 1) ${
                isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-20 translate-y-20 opacity-0'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-brand font-teko text-6xl font-bold leading-none tracking-tighter">98%</div>
                  <div className="h-10 w-1 bg-brand/20 rounded-full"></div>
                </div>
                <div className="text-gray-900 font-teko text-2xl font-bold uppercase tracking-tight mb-4 leading-none">Customer <br /> Satisfaction</div>
                <p className="text-gray-500 font-outfit text-base leading-relaxed font-light">
                  Our commitment to excellence is reflected in our global client success stories and long-term partnerships.
                </p>
              </div>

              {/* Advanced Decorative Elements */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-brand/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute top-1/2 -left-20 w-40 h-40 border-[20px] border-brand/5 rounded-full z-0 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute -bottom-10 left-10 w-6 h-6 bg-brand rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="w-full lg:w-1/2">
            <div className={`transition-all duration-[1000ms] cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                  The KB Difference
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter mb-10">
                Why Choose Us For <br />
                <span className="text-brand inline-block relative">
                  Your Future?
                  <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-500 font-outfit text-xl leading-relaxed mb-16 max-w-xl font-light">
                We bridge the gap between imagination and reality by combining creative artistry with technical precision.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  index={index} 
                  {...feature} 
                  isVisible={isVisible} 
                />
              ))}
            </div>

            <div className={`mt-20 transition-all duration-[1000ms] delay-1000 cubic-bezier(0.2, 0, 0, 1) ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button 
                variant="primary" 
                to="/about"
                className="!h-16 !px-10 !text-lg shadow-[0_15px_30px_-5px_rgba(245,180,25,0.3)] hover:!scale-105 transition-all"
              >
                Know More About Us
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
