import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HassanImg from '../assets/hassan-associates.png'
import EvoSolImg from '../assets/theevosol.png'
import CueImg from '../assets/cuestudio.png'
import BFMakeupImg from '../assets/bfmakeup.png'
import SemblissImg from '../assets/sembliss.png'
import KrayzImg from '../assets/krayz.png'
import DairylandImg from '../assets/dairyland.png'
import HumSubImg from '../assets/humsub.png'

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
    else if (path.includes('shopify-development')) setActiveFilter('shopify-development')
    else if (path.includes('graphic-design')) setActiveFilter('graphic-design')
    else if (path.includes('content-monetization')) setActiveFilter('content-monetization')
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
    { id: 'video-editing', name: 'Video Editing' },
    { id: 'shopify-development', name: 'Shopify Development' },
    { id: 'graphic-design', name: 'Graphic Design' },
    { id: 'content-monetization', name: 'Content Monetization' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Hassan Associates',
      category: 'web-development',
      tags: ['Web Development', 'UI/UX Design', 'Real Estate'],
      description: 'A premium real estate platform for Hassan Associates Realty Group, Lahore.',
      image: HassanImg,
      color: 'from-blue-500/10 to-purple-500/10',
      link: 'https://hassanassociates.pk/'
    },
    {
      id: 2,
      title: 'The EvoSol',
      category: 'ui-ux-design',
      tags: ['Strategic PR', 'Elite Networking', 'Software Dev'],
      description: 'A high-end PR and networking agency connecting brands and building global influence.',
      image: EvoSolImg,
      color: 'from-blue-600/10 to-cyan-500/10',
      link: 'https://theevosol.com/'
    },
    {
      id: 3,
      title: 'Cue Studio',
      category: 'video-editing',
      tags: ['Podcast Production', 'Studio Rental', 'Content Creation'],
      description: 'A premium turnkey podcasting facility providing professional studio sets and technical support.',
      image: CueImg,
      color: 'from-orange-500/10 to-red-500/10',
      link: 'https://cuestudio.pk/'
    },
    {
      id: 4,
      title: 'Social Media Domination',
      category: 'digital-marketing',
      tags: ['Digital Marketing', 'Content Strategy'],
      description: 'Strategic campaigns that drove 300% engagement growth',
      image: '/portfolio_social_media_1768044330531.png',
      color: 'from-pink-500/10 to-rose-500/10'
    },
    {
      id: 5,
      title: 'SaaS Platform Design',
      category: 'ui-ux-design',
      tags: ['UI/UX Design', 'Web Development'],
      description: 'Enterprise-grade interface design for complex workflows',
      image: '/portfolio_saas_1768044355258.png',
      color: 'from-indigo-500/10 to-blue-500/10'
    },
    {
      id: 6,
      title: 'Cinematic Video Production',
      category: 'video-editing',
      tags: ['Video Editing', 'Content Strategy'],
      description: 'Award-winning video content with stunning visuals and storytelling',
      image: '/portfolio_video_1768044374265.png',
      color: 'from-violet-500/10 to-purple-500/10'
    },
    {
      id: 7,
      title: 'Mobile App Innovation',
      category: 'web-development',
      tags: ['Web Development', 'UI/UX Design'],
      description: 'Award-winning mobile experience with 4.9★ rating',
      image: '/portfolio_mobile_app_1768044388985.png',
      color: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      id: 8,
      title: 'Content Marketing Success',
      category: 'content-strategy',
      tags: ['Content Strategy', 'Digital Marketing'],
      description: 'Building thought leadership through strategic storytelling',
      image: '/portfolio_content_marketing_1768044429810.png',
      color: 'from-emerald-500/10 to-green-500/10'
    },
    {
      id: 9,
      title: 'Corporate Rebranding',
      category: 'brand-identity',
      tags: ['Brand Identity', 'Digital Marketing'],
      description: 'Complete visual identity overhaul for global enterprise',
      image: '/portfolio_corporate_rebrand_1768044460369.png',
      color: 'from-red-500/10 to-orange-500/10'
    },
    {
      id: 10,
      title: 'But First, Makeup',
      category: 'shopify-development',
      tags: ['Shopify Development', 'E-commerce', 'Luxury Beauty'],
      description: 'A premium Shopify online boutique for authentic international luxury beauty brands.',
      image: BFMakeupImg,
      color: 'from-pink-500/10 to-rose-500/10',
      link: 'https://bfmakeup.pk/'
    },
    {
      id: 13,
      title: 'Sembliss Cosmetics',
      category: 'shopify-development',
      tags: ['Shopify Development', 'Premium E-commerce', 'Authentic Beauty'],
      description: 'A trusted destination for authentic international luxury beauty and skincare in Pakistan.',
      image: SemblissImg,
      color: 'from-amber-600/10 to-orange-500/10',
      link: 'https://www.sembliss.com/'
    },
    {
      id: 14,
      title: 'Krayz',
      category: 'shopify-development',
      tags: ['Shopify Development', 'Fashion & Apparel', 'Lifestyle Brand'],
      description: 'A premium clothing brand offering stylish athletic and casual wear for the modern generation.',
      image: KrayzImg,
      color: 'from-blue-600/10 to-indigo-500/10',
      link: 'https://krayz.pk/'
    },
    {
      id: 15,
      title: 'Dairyland',
      category: 'shopify-development',
      tags: ['Shopify Development', 'Organic Food', 'E-commerce Management'],
      description: 'A premium organic and natural food brand providing authentic traditional Pakistani food products.',
      image: DairylandImg,
      color: 'from-green-600/10 to-emerald-500/10',
      link: 'https://dairyland.com.pk/'
    },
    {
      id: 16,
      title: 'Hum Sub Store',
      category: 'shopify-development',
      tags: ['Shopify Development', 'Celebration & Gifting', 'Party Accessories'],
      description: 'A premium one-stop shop for high-quality party accessories and gifting solutions in Pakistan.',
      image: HumSubImg,
      color: 'from-pink-500/10 to-rose-400/10',
      link: 'https://www.humsubstore.com/'
    },
    {
      id: 11,
      title: 'Brand Visual Identity',
      category: 'graphic-design',
      tags: ['Graphic Design', 'Brand Identity'],
      description: 'Complete design system from logo to marketing collateral',
      image: '/portfolio_graphic_design_1768044491226.png',
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 12,
      title: 'Creator Revenue Platform',
      category: 'content-monetization',
      tags: ['Content Monetization', 'Digital Marketing'],
      description: 'Monetization strategy generating $50K+ monthly revenue',
      image: '/portfolio_monetization_1768044507535.png',
      color: 'from-yellow-500/10 to-orange-500/10'
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
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('filter-scroll-container');
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand transition-all duration-300"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('filter-scroll-container');
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand transition-all duration-300"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div id="filter-scroll-container" className="overflow-x-auto scrollbar-hide scroll-smooth">
                <div className="flex justify-start gap-3 px-14 md:px-20 min-w-max">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-6 py-3 rounded-full font-outfit text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
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
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link || '#'}
                  target={project.link ? "_blank" : "_self"}
                  rel={project.link ? "noopener noreferrer" : ""}
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
                </a>
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
