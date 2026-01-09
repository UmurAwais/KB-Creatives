import React from 'react'
import MotionSection from '../about/MotionSection'
import { Search, PenTool, Code, Rocket, ShieldCheck } from 'lucide-react'

const PROCESS_STEPS = [
  {
    icon: <Search size={32} />,
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to build a rock-solid strategic foundation."
  },
  {
    icon: <PenTool size={32} />,
    title: "Design",
    description: "Our designers craft visually stunning, intuitive interfaces that resonate with your target users."
  },
  {
    icon: <Code size={32} />,
    title: "Development",
    description: "Clean code and high-performance technologies bring the design to life with seamless functionality."
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch",
    description: "After rigorous testing, we deploy your project to the world, ensuring a flawless first impression."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Support",
    description: "We provide ongoing maintenance and strategic optimizations to ensure long-term digital success."
  }
]

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-36 bg-gray-900 rounded-[4rem] mx-6 md:mx-12 my-24 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/2 font-teko text-[30vw] font-bold uppercase pointer-events-none select-none">
        PROCESS
      </div>

      <div className="max-w-site mx-auto px-6 md:px-12 relative z-10">
        <MotionSection>
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">Our Workflow</span>
              <div className="w-12 h-[2px] bg-brand"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-teko font-bold text-white uppercase tracking-tighter">
              How We Bring Your <span className="text-brand">Vision To Life.</span>
            </h2>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {PROCESS_STEPS.map((step, idx) => (
            <MotionSection key={idx} delay={idx * 150} direction="up" className="relative group">
              {/* Step Number Badge */}
              <div className="absolute -top-6 -left-4 text-8xl font-teko font-bold text-white/5 group-hover:text-brand/10 transition-colors duration-500">
                0{idx + 1}
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-gray-900 transition-all duration-500 transform group-hover:-translate-y-2">
                  {step.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-teko font-bold text-white uppercase tracking-tight">{step.title}</h3>
                  <p className="text-white/50 font-outfit text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connector Line for Desktop */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[100%] w-full h-[1px] bg-gradient-to-r from-brand/30 to-transparent z-0"></div>
                )}
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
