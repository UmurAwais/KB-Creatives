import React, { useState } from 'react'
import MotionSection from './about/MotionSection'
import { Plus, Minus } from 'lucide-react'

const FAQ = ({ items, title = "Frequently Asked", subtitle = "Questions." }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items || items.length === 0) return null

  return (
    <section className="py-24 md:py-36 bg-gray-50 rounded-[4rem] mx-6 md:mx-12 mb-24 md:mb-36">
      <div className="max-w-4xl mx-auto px-6">
        <MotionSection>
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">Common Questions</span>
              <div className="w-12 h-[2px] bg-brand"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-teko font-bold text-gray-900 uppercase tracking-tighter">
              {title} <span className="text-brand">{subtitle}</span>
            </h2>
          </div>
        </MotionSection>

        <div className="space-y-6">
          {items.map((faq, idx) => (
            <MotionSection key={idx} delay={idx * 100}>
              <div 
                className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
                  activeIndex === idx ? 'bg-white border-brand shadow-xl' : 'bg-transparent border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-2xl font-teko font-bold uppercase tracking-tight transition-colors duration-300 ${
                    activeIndex === idx ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === idx ? 'bg-brand text-gray-900 rotate-180' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === idx ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 font-outfit text-lg leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
