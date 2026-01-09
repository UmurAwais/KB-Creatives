import React from 'react'
import MotionSection from './MotionSection'
import { Lightbulb, Heart, Target, Zap } from 'lucide-react'

const Values = [
  {
    title: "Relentless Innovation",
    desc: "We don't follow trends; we set them. Our team is constantly exploring new technologies to keep your brand ahead.",
    icon: <Lightbulb size={32} />
  },
  {
    title: "User-First Thinking",
    desc: "Every pixel and line of code is crafted with the end-user in mind, ensuring seamless and delightful experiences.",
    icon: <Heart size={32} />
  },
  {
    title: "Absolute Integrity",
    desc: "Transparency is our foundation. We build trust through honest communication and consistent delivery of excellence.",
    icon: <Target size={32} />
  },
  {
    title: "High Performance",
    desc: "Speed and efficiency are baked into everything we build, ensuring your digital presence is always lightning-fast.",
    icon: <Zap size={32} />
  }
]

const CoreValues = () => {
  return (
    <section className="pt-24 md:pt-36">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="mb-16 lg:mb-24">
          <MotionSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">What We Stand For</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter">
              Our <br />
              <span className="text-brand inline-block relative">
                Core Values.
                <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-brand/20 rounded-full"></div>
              </span>
            </h2>
          </MotionSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Values.map((val, idx) => (
            <MotionSection key={idx} delay={idx * 150}>
              <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-brand/20 transition-all duration-500 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500 transform group-hover:rotate-[15deg]">
                  {val.icon}
                </div>
                <h3 className="text-3xl font-teko font-bold text-gray-900 mb-4 uppercase tracking-tight">{val.title}</h3>
                <p className="text-gray-500 font-outfit text-[15px] leading-relaxed">{val.desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
