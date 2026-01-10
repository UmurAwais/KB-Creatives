import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Portfolio = () => {
  const location = useLocation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(true)
    
    // Set filter based on URL
    const path = location.pathname
    if (path.includes('digital-marketing')) setActiveFilter('digital-marketing')
    else if (path.includes('brand-identity')) setActiveFilter('brand-identity')
    else if (path.includes('ui-ux-design')) setActiveFilter('ui-ux-design')
    else if (path.includes('web-development')) setActiveFilter('web-development')
    else if (path.includes('content-strategy')) setActiveFilter('content-strategy')
    else if (path.includes('video-editing')) setActiveFilter('video-editing')
    else setActiveFilter('all')
  }, [location])

  const portfolioFAQs = [
    {
      question: "Are all the projects in your portfolio currently live?",
      answer: "Most of our featured projects are live. However, some deep-tech or enterprise projects may show redacted versions due to NDA restrictions."
    },
    {
      question: "Do you specialize in specific industries?",
      answer: "We are industry-agnostic but have deep expertise in FinTech, E-commerce, SaaS, and luxury lifestyle brands."
    },
    {
      question: "Can you provide more detailed case studies?",
      answer: "Yes, we have comprehensive case studies that detail our process, challenges, and results. Reach out to us if you'd like to see a specific breakdown."
    },
    {
      question: "How long does a typical redesign project take?",
      answer: "A strategic redesign typically takes between 6 to 10 weeks, depending on the volume of content and technical complexity."
    },
    {
      question: "Have you won any awards for your portfolio work?",
      answer: "Yes, our work has been recognized by several international design communities for innovation and user experience excellence."
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'brand-identity', name: 'Brand Identity' },
    { id: 'ui-ux-design', name: 'UI/UX Design' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'content-strategy', name: 'Content Strategy' },
    { id: 'video-editing', name: 'Video Editing' }
  ]

  const projects = [
    {
      id: 1,
      title: 'FinTech Revolution',
      category: 'web-development',
      tags: ['Web Development', 'UI/UX Design'],
      description: 'A complete digital transformation for a leading financial services platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90',
      color: 'from-blue-500/10 to-purple-500/10'
    },
    {
      id: 2,
      title: 'Luxury Brand Refresh',
      category: 'brand-identity',
      tags: ['Brand Identity', 'Content Strategy'],
      description: 'Redefining elegance through strategic brand positioning',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=90',
      color: 'from-amber-500/10 to-orange-500/10'
    },
    {
      id: 3,
      title: 'E-Commerce Excellence',
      category: 'ui-ux-design',
      tags: ['UI/UX Design', 'Web Development'],
      description: 'Crafting seamless shopping experiences that convert',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90',
      color: 'from-green-500/10 to-teal-500/10'
    },
    {
      id: 4,
      title: 'Social Media Domination',
      category: 'digital-marketing',
      tags: ['Digital Marketing', 'Content Strategy'],
      description: 'Strategic campaigns that drove 300% engagement growth',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=90',
      color: 'from-pink-500/10 to-rose-500/10'
    },
    {
      id: 5,
      title: 'SaaS Platform Design',
      category: 'ui-ux-design',
      tags: ['UI/UX Design', 'Web Development'],
      description: 'Enterprise-grade interface design for complex workflows',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=90',
      color: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      id: 6,
      title: 'Cinematic Video Production',
      category: 'video-editing',
      tags: ['Video Editing', 'Content Strategy'],
      description: 'Award-winning video content with stunning visuals and storytelling',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=90',
      color: 'from-violet-500/10 to-purple-500/10'
    },
    {
      id: 7,
      title: 'Mobile App Innovation',
      category: 'web-development',
      tags: ['Web Development', 'UI/UX Design'],
      description: 'Award-winning mobile experience with 4.9★ rating',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=90',
      color: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      id: 8,
      title: 'Content Marketing Success',
      category: 'content-strategy',
      tags: ['Content Strategy', 'Digital Marketing'],
      description: 'Building thought leadership through strategic storytelling',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=90',
      color: 'from-emerald-500/10 to-green-500/10'
    },
    {
      id: 9,
      title: 'Corporate Rebranding',
      category: 'brand-identity',
      tags: ['Brand Identity', 'Digital Marketing'],
      description: 'Complete visual identity overhaul for global enterprise',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=90',
      color: 'from-red-500/10 to-orange-500/10'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                  Our Work
                </span>
                <div className="w-12 h-[2px] bg-brand"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter mb-6">
                Crafting Digital
                <br />
                <span className="text-brand relative inline-block">
                  Masterpieces.
                  <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-gray-500 font-outfit text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                A showcase of our best work, where creativity meets technical excellence to deliver real results. Each project tells a unique story of innovation and impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
                <div className="text-center">
                  <p className="font-teko text-5xl md:text-6xl font-bold text-brand">500+</p>
                  <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-teko text-5xl md:text-6xl font-bold text-brand">98%</p>
                  <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="font-teko text-5xl md:text-6xl font-bold text-brand">50+</p>
                  <p className="font-outfit text-sm text-gray-500 uppercase tracking-wider mt-2">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-y border-gray-100 sticky top-20 bg-white/95 backdrop-blur-xl z-40">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-outfit text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-brand text-white shadow-lg shadow-brand/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-brand/30 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex gap-2 mb-3">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-outfit">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-white/90 font-outfit text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-teko font-bold text-gray-900 uppercase tracking-tight group-hover:text-brand transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* View Project Arrow */}
                    <div className="flex items-center gap-2 mt-4 text-brand opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-outfit text-sm font-medium">View Project</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand/0 group-hover:border-brand/50 transition-all duration-500 rounded-tr-2xl"></div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 font-teko text-3xl uppercase">No projects found in this category</p>
                <p className="text-gray-500 font-outfit mt-2">Try selecting a different filter</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0Y1QjQxOSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="max-w-site mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-white leading-[0.85] uppercase tracking-tighter mb-6">
                Ready To Start
                <br />
                <span className="text-brand">Your Project?</span>
              </h2>
              <p className="text-gray-400 font-outfit text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's create something extraordinary together. Get in touch and let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand text-white font-outfit font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand/50 hover:scale-105"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-outfit font-medium rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQ items={portfolioFAQs} />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
