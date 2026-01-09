import React from 'react'
import MotionSection from './MotionSection'
import Button from '../Button'

const OurStory = () => {
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <MotionSection direction="right" className="h-full">
            <div className="relative h-full">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-[80px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                alt="Our Office" 
                className="rounded-[3rem] w-full h-full object-cover shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand p-12 rounded-[2.5rem] hidden md:block z-20 shadow-xl">
                <div className="text-white font-teko text-7xl font-bold leading-none">05+</div>
                <div className="text-white/80 font-outfit text-sm font-bold uppercase tracking-widest mt-2 text-center">Years of <br/>Innovation</div>
              </div>
            </div>
          </MotionSection>

          <MotionSection direction="left" className="h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">Our Journey</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter mb-8">
              From A Small Studio <br /> To A 
              <span className="text-brand inline-block relative ml-3">
                Global Agency.
                <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-brand/20 rounded-full"></div>
              </span>
            </h2>
            <div className="space-y-6 text-gray-500 font-outfit text-lg leading-relaxed">
              <p>
                Starting in 2021 with just three designers, KB Creatives was born from a simple belief: digital experiences should be as beautiful as they are functional. We saw a gap between technical development and high-end design, and we bridged it.
              </p>
              <p>
                Today, we are a multidisciplinary team of designers, developers, and strategists working with clients across four continents. Our growth is fueled by a relentless pursuit of excellence and a refusal to settle for "good enough."
              </p>
              <div className="pt-8">
                <Button variant="secondary" to="/portfolio">
                  See Our Work
                </Button>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  )
}

export default OurStory
