import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'

const blogPosts = [
  {
    title: "Mastering Modern Design: 10 Agencies Trends for 2026",
    excerpt: "Explore the latest shifts in digital aesthetics and how they are reshaping the way we think about user experiences.",
    date: "Jan 08, 2026",
    category: "Design",
    image: "/blog_design_trends_1768044637855.png"
  },
  {
    title: "The Future of Web Development with AI Integration",
    excerpt: "How artificial intelligence is revolutionizing the workflow of developers and creating more intelligent web applications.",
    date: "Jan 05, 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Why Brand Identity Matters More Than Ever in 2026",
    excerpt: "Discover why a solid brand foundation is the key to standing out in a crowded and competitive digital marketplace.",
    date: "Jan 02, 2026",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
  }
]

const BlogCard = ({ post, index, isVisible }) => {
  return (
    <div 
      className={`group cursor-pointer h-full flex flex-col transition-all duration-[1000ms] cubic-bezier(0.2, 0, 0, 1) ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${200 + (index * 150)}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] mb-8 shadow-lg shrink-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
        
        {/* Category Tag */}
        <div className="absolute top-6 left-6 bg-brand text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 flex flex-col flex-grow">
        <div className="text-gray-400 font-outfit text-sm uppercase tracking-widest mb-3">
          {post.date}
        </div>
        <h3 className="text-2xl md:text-3xl font-teko font-bold text-gray-900 leading-[1.1] mb-4 uppercase tracking-tight transition-colors duration-300 group-hover:text-brand line-clamp-2 min-h-[1.1em] md:min-h-[2.2em]">
          {post.title}
        </h3>
        <p className="text-gray-500 font-outfit text-base leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>
        
        {/* Arrow Link Interaction */}
        <div className="mt-auto flex items-center gap-2 text-gray-900 font-teko text-xl font-bold uppercase tracking-tight group-hover:gap-4 transition-all duration-300">
          Read Story 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
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

  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden" ref={sectionRef}>
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Header - Matching Design Pattern */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
          <div className={`max-w-3xl transition-all duration-[1000ms] cubic-bezier(0.2, 0, 0, 1) ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand"></div>
              <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                Latest Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter">
              Discover Our New <br />
              <span className="text-brand inline-block relative">
                Creative Stories.
                <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-brand/20 rounded-full"></div>
              </span>
            </h2>
          </div>
          
          <div className={`transition-all duration-[1000ms] delay-300 cubic-bezier(0.2, 0, 0, 1) ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button variant="primary" to="/blogs">
              View All Articles
            </Button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
