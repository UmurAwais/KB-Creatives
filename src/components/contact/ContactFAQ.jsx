import React, { useState } from 'react'
import MotionSection from '../about/MotionSection'
import { Plus, Minus } from 'lucide-react'

const FAQ_DATA = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope, but a typical website project takes 4-8 weeks from discovery to launch. We prioritize quality and thorough testing to ensure a seamless experience."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer various maintenance packages to ensure your digital product stays secure, updated, and performing at its peak long after launch."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use Slack for daily communication and scheduled video calls for milestone reviews. You'll have a dedicated account manager throughout the process."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we are a global agency. We currently serve clients across four continents and are experienced in managing projects across different time zones."
  }
]

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

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
              Frequently Asked <span className="text-brand">Questions.</span>
            </h2>
          </div>
        </MotionSection>

        <div className="space-y-6">
          {FAQ_DATA.map((faq, idx) => (
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

export default ContactFAQ
