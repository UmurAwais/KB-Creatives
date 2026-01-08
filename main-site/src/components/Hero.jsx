import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-linear-to-b from-white to-gray-50 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-350 mx-auto px-8 w-full pb-20 pt-17 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side Content */}
          <div className="relative animate-slideInFromBottom">
            {/* Eyebrow Text */}
            {/* <div className="inline-flex items-center gap-2 bg-brand/10 px-4 py-2 rounded-full mb-6 animate-fadeIn">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
              <span className="text-brand font-bold text-xs uppercase tracking-wider">Digital Agency</span>
            </div> */}

            {/* Main Heading with Gradient */}
            <h1 className="font-teko font-bold text-[100px] lg:text-[120px] leading-[0.85] uppercase mb-0 tracking-normal">
              <span className="text-gray-900">
                WE ARE
                <br />
                <span className="inline-flex items-center justify-center bg-[#F5B419] text-white px-3 pt-3 pb-0 mb-6 rounded-xl mr-2 transform translate-y-1 leading-none">SKILLED</span>
                IN
                <br />
                AND
              </span>
            </h1>

            {/* Description with Better Typography */}
            <div className="relative max-w-130 mb-10 animate-fadeIn" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
              {/* Gradient Accent Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-brand via-brand/50 to-transparent rounded-full"></div>
              
              <p className="text-gray-600 text-[16px] leading-relaxed font-normal mb-2">
                We are a full-service digital agency that builds fascinating user experiences; our team creates exceptional UI design and functionality.
              </p>
              
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">UI/UX Design</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">Development</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">Branding</span>
              </div>
            </div>

            {/* CTA Buttons - Material Design */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn" style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
              <a 
                href="#" 
                className="inline-flex items-center gap-3 bg-[#F5B419] text-white px-8 py-4 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-brand hover:shadow-2xl hover:shadow-brand/20 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                GET STARTED NOW
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-[12px] uppercase tracking-wider hover:shadow-xl border-2 border-gray-200 hover:border-brand transform hover:-translate-y-1 transition-all duration-300 group"
              >
                VIEW PORTFOLIO
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Stats - Material Design Cards */}
            <div className="grid grid-cols-3 gap-4 animate-fadeIn" style={{animationDelay: '0.6s', animationFillMode: 'backwards'}}>
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <p className="font-teko text-4xl font-bold bg-linear-to-r from-brand to-yellow-500 bg-clip-text mb-1 group-hover:scale-110 transition-transform duration-300 text-black">10k+</p>
                <p className="text-gray-600 text-xs font-medium">Happy Clients</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <p className="font-teko text-4xl font-bold bg-linear-to-r from-gray-700 to-gray-900 bg-clip-text text-black mb-1 group-hover:scale-110 transition-transform duration-300">500+</p>
                <p className="text-gray-600 text-xs font-medium">Projects Done</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <p className="font-teko text-4xl font-bold bg-linear-to-r from-gray-800 to-gray-900 bg-clip-text text-black mb-1 group-hover:scale-110 transition-transform duration-300">15+</p>
                <p className="text-gray-600 text-xs font-medium">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Premium Image Layout */}
          <div className="relative animate-fadeIn" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
            {/* Decorative Floating Elements */}
            <div className="absolute -top-8 left-8 z-20 flex gap-3">
              <div className="w-4 h-4 rounded-full bg-brand shadow-lg animate-bounce" style={{animationDuration: '3s'}}></div>
              <div className="w-4 h-4 rounded-full bg-gray-900 shadow-lg animate-bounce" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 rounded-full bg-[#F5B419] shadow-lg animate-bounce" style={{animationDuration: '3s', animationDelay: '0.4s'}}></div>
            </div>

            <div className="relative">
              {/* Background Decorative Circle with Blur */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-75 h-75 bg-linear-to-br from-brand via-yellow-500 to-yellow-600 rounded-full blur-2xl opacity-40"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-130 mx-auto">
                {/* Main Team Image with Material Design */}
                <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group bg-linear-to-br from-gray-100 to-gray-200 border-16 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=900&fit=crop&crop=faces&auto=format&q=90" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-105"
                    loading="eager"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="font-teko text-lg font-bold text-gray-900">Our Creative Team</p>
                    <p className="text-xs text-gray-600">Building amazing experiences</p>
                  </div>
                </div>

                {/* Floating Badge - Development */}
                <div className="absolute -bottom-6 -left-6 bg-linear-to-br from-brand to-yellow-500 px-6 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer animate-scaleIn border-4 border-white" style={{animationDelay: '0.5s', animationFillMode: 'backwards'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                    <p className="font-teko font-bold text-[14px] uppercase tracking-wider text-gray-900">
                      Development
                    </p>
                  </div>
                </div>

                {/* Floating Avatar with Badge */}
                <div className="absolute -top-6 -right-6 animate-scaleIn" style={{animationDelay: '0.7s', animationFillMode: 'backwards'}}>
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-[5px] border-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 cursor-pointer bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&auto=format&q=90" 
                        alt="Team member"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 filter brightness-105"
                        loading="eager"
                      />
                    </div>
                    {/* Online Badge */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-brand rounded-full border-[3px] border-white shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Customer Avatars - Material Design */}
              <div className="flex items-center justify-center gap-4 mt-10 animate-slideInFromBottom" style={{animationDelay: '1s', animationFillMode: 'backwards'}}>
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format&q=90',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=90',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format&q=90'
                  ].map((src, i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-[3px] border-white overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-300 cursor-pointer bg-gray-100">
                      <img 
                        src={src}
                        alt={`Customer ${i + 1}`}
                        className="w-full h-full object-cover filter brightness-105"
                        loading="eager"
                      />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-[3px] border-white bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:from-brand hover:to-brand transition-all duration-300 cursor-pointer">
                    <span className="text-white text-sm font-bold">+7k</span>
                  </div>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <p className="font-teko text-[14px] font-bold text-gray-900">
                    <span className="text-brand">10,000+</span> <span className="font-normal text-gray-600">customers worldwide</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
