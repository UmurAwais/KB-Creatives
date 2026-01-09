import React from 'react'
import MotionSection from './MotionSection'
import Button from '../Button'

const JoinTeamCTA = () => {
  const [hoveredWord, setHoveredWord] = React.useState(null)
  
  const words = [
    { text: 'Ready', highlight: false },
    { text: 'To', highlight: false },
    { text: 'Be', highlight: false },
    { text: 'Part', highlight: false },
    { text: 'Of', highlight: true },
    { text: 'The', highlight: true },
    { text: 'Story?', highlight: true }
  ]

  return (
    <section className="py-24 md:py-36 mt-24 md:mt-36 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,180,25,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-site mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden group">
          {/* Subtle Glow Effect On Group Hover */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/10 transition-colors duration-1000"></div>
          
          <MotionSection direction="right" className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-brand animate-width-grow"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">Career Opportunities</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-teko font-bold text-gray-900 leading-[0.8] uppercase tracking-tighter mb-8 cursor-default">
              {words.map((word, i) => (
                <span 
                  key={i}
                  onMouseEnter={() => setHoveredWord(i)}
                  onMouseLeave={() => setHoveredWord(null)}
                  className={`inline-block mr-[0.2em] transition-all duration-300 transform ${
                    word.highlight ? 'text-brand' : ''
                  } ${hoveredWord === i ? 'scale-110 -translate-y-1' : ''}`}
                >
                  {word.text}
                  {word.highlight && i === words.length - 1 && (
                    <div className="h-2 md:h-3 bg-brand/20 mt-[-0.2em] rounded-full w-full transform origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-700"></div>
                  )}
                </span>
              ))}
            </h2>
            
            <p className="text-gray-500 font-outfit text-xl max-w-lg leading-relaxed mb-4">
              We're building the future of digital experiences. Are you ready to join a team that values <span className="text-gray-900 font-semibold">innovation above all?</span>
            </p>
          </MotionSection>

          <MotionSection direction="left" className="relative z-10 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button 
                variant="primary" 
                to="/careers" 
                className="w-full sm:w-auto !h-20 !px-12 !text-xl shadow-2xl shadow-brand/20 transform hover:scale-105 transition-all"
              >
                Join Our Team
              </Button>
              <Button 
                variant="secondary" 
                to="/contact" 
                className="w-full sm:w-auto !h-20 !px-12 !text-xl hover:bg-gray-50 transition-all"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-400 font-outfit text-sm uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Hiring Designers
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Hiring Developers
              </span>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  )
}

export default JoinTeamCTA
