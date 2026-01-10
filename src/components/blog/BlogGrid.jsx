import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MotionSection from '../about/MotionSection'

const ALL_POSTS = [
  {
    title: "Mastering Modern Design: 10 Agencies Trends for 2026",
    slug: "design-trends-2026",
    excerpt: "Explore the latest shifts in digital aesthetics and how they are reshaping the way we think about user experiences.",
    date: "Jan 08, 2026",
    category: "Design",
    image: "/blog_design_trends_1768044637855.png"
  },
  {
    title: "The Future of Web Development with AI Integration",
    slug: "ai-in-web-dev",
    excerpt: "How artificial intelligence is revolutionizing the workflow of developers and creating more intelligent web applications.",
    date: "Jan 05, 2026",
    category: "Development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Why Brand Identity Matters More Than Ever in 2026",
    slug: "brand-identity-matters",
    excerpt: "Discover why a solid brand foundation is the key to standing out in a crowded and competitive digital marketplace.",
    date: "Jan 02, 2026",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
  },
  {
    title: "Optimizing Performance in React: Part 2",
    slug: "react-performance-part-2",
    excerpt: "Advanced techniques for building lightning-fast user interfaces with React's latest concurrent features.",
    date: "Dec 28, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
  },
  {
    title: "The Psychology of Color in Luxury Branding",
    slug: "color-psychology-luxury",
    excerpt: "How high-end brands use color theory to evoke specific emotions and build long-lasting prestige.",
    date: "Dec 20, 2025",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&q=80"
  },
  {
    title: "UI/UX Case Study: The Redesign of Global Finance",
    slug: "global-finance-redesign",
    excerpt: "A deep dive into how we transformed a legacy banking interface into a modern, user-centric powerhouse.",
    date: "Dec 15, 2025",
    category: "Design",
    image: "/portfolio_fintech_1768044284286.png"
  }
]

const CATEGORIES = ["All", "Design", "Development", "Branding"]

const BlogCard = ({ post, index }) => {
  return (
    <MotionSection delay={index * 100}>
      <Link to={`/blogs/${post.slug}`} className="group block no-underline">
        <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] mb-8 shadow-xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
          <div className="absolute top-6 left-6 bg-brand text-gray-900 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
            {post.category}
          </div>
        </div>

        <div className="px-2">
          <div className="text-gray-400 font-outfit text-sm uppercase tracking-widest mb-3">
            {post.date}
          </div>
          <h3 className="text-2xl md:text-3xl font-teko font-bold text-gray-900 leading-[1.1] mb-4 uppercase tracking-tight group-hover:text-brand transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-500 font-outfit text-base leading-relaxed mb-6 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-gray-900 font-teko text-xl font-bold uppercase tracking-tight group-hover:gap-4 transition-all duration-300">
            Read Article
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </Link>
    </MotionSection>
  )
}

const BlogGrid = () => {
  const [activeTab, setActiveTab] = useState("All")

  const filteredPosts = activeTab === "All" 
    ? ALL_POSTS 
    : ALL_POSTS.filter(post => post.category === activeTab)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-teko text-xl font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                activeTab === cat 
                  ? 'bg-brand border-brand text-gray-900 shadow-xl shadow-brand/20' 
                  : 'bg-transparent border-gray-100 text-gray-400 hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPosts.map((post, idx) => (
            <BlogCard key={post.title} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogGrid
