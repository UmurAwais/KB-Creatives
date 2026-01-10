import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'
import MotionSection from '../components/about/MotionSection'

const BlogPost = () => {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock data for the demonstration - in a real app this would come from a CMS or API
  const post = {
    title: "Mastering Modern Design: 10 Agencies Trends for 2026",
    category: "Design",
    date: "Jan 08, 2026",
    author: "Alex Rivers",
    readTime: "8 min read",
    image: "/blog_design_trends_1768044637855.png",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed font-outfit">
        The digital landscape is shifting faster than ever. As we enter 2026, the intersection of specialized AI, hyper-personalization, and tactile design is redefining how users interact with brands. In this deep dive, we explore the top 10 trends that are dominating the high-end agency world.
      </p>

      <h2 class="text-4xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-6 mt-12">01. Generative UX Personalization</h2>
      <p class="text-lg text-gray-500 mb-6 leading-relaxed font-outfit">
        Static interfaces are becoming a thing of the past. Modern agencies are leveraging real-time generative AI to adapt layouts, color schemes, and even messaging based on a micro-analysis of user behavior and intent. This isn't just A/B testing; it's A-through-Z personalization at scale.
      </p>

      <blockquote class="border-l-4 border-brand pl-8 py-4 my-12 bg-gray-50 rounded-r-3xl">
        <p class="text-2xl font-teko italic text-gray-800 leading-tight">
          "The most successful digital experiences in 2026 won't feel like websites—they'll feel like private concierge services tailored to every individual's digital heartbeat."
        </p>
        <cite class="block mt-4 text-brand font-outfit font-bold uppercase tracking-widest text-sm">— KB Creative Director</cite>
      </blockquote>

      <h2 class="text-4xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-6 mt-12">02. Tactile Neumorphism 2.0</h2>
      <p class="text-lg text-gray-500 mb-6 leading-relaxed font-outfit">
        We're seeing a return to depth, but with a refined, glass-morphism twist. Soft shadows combined with vibrant, translucent surfaces create a sense of physical space within the screen. This trend focuses on giving digital elements a "touchable" quality that enhances user trust and engagement.
      </p>

      <div class="my-12 rounded-[3rem] overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80" alt="Modern Tech Office" class="w-full h-auto" />
      </div>

      <h2 class="text-4xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-6 mt-12">03. Sustainable Tech Stacks</h2>
      <p class="text-lg text-gray-500 mb-6 leading-relaxed font-outfit">
        Efficiency is the new luxury. Performance optimization is no longer just about speed—it's about the environmental impact of data centers. Clean, lightweight code and modular architectures are being prioritized to reduce carbon footprints while delivering lightning-fast load times.
      </p>
    `
  }

  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* Progress Bar (Optional UI Polish) */}
        <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
          <div className="h-full bg-brand w-1/3"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-gray-400 font-outfit text-sm mb-12">
              <Link to="/" className="hover:text-brand transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/blogs" className="hover:text-brand transition-colors">Blogs</Link>
              <ChevronRight size={14} />
              <span className="text-gray-900 line-clamp-1">{post.title}</span>
            </nav>

            <MotionSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full font-outfit text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400 font-outfit text-sm">{post.readTime}</span>
              </div>

              <h1 className="font-teko font-bold text-[45px] sm:text-[65px] md:text-[85px] leading-[0.9] uppercase tracking-tighter text-gray-900 mb-10">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-teko text-xl font-bold leading-none uppercase">{post.author}</div>
                    <div className="text-gray-400 font-outfit text-xs mt-1">Creative Director</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-outfit text-sm">
                  <Calendar size={16} className="text-brand" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-outfit text-sm">
                  <Clock size={16} className="text-brand" />
                  {post.readTime}
                </div>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-6 md:px-12 mb-20 lg:mb-32">
          <MotionSection>
            <div className="max-w-6xl mx-auto rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl relative h-[400px] md:h-[600px]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </MotionSection>
        </section>

        {/* Content Section */}
        <section className="pb-24 lg:pb-36 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
            
            {/* Sidebar (Left) - Desktop Only Share */}
            <aside className="hidden lg:block w-20 shrink-0">
              <div className="sticky top-40 flex flex-col items-center gap-6">
                <span className="text-gray-300 font-teko text-lg uppercase vertical-text tracking-widest mb-4">Share</span>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-all cursor-pointer">
                  <Facebook size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-all cursor-pointer">
                  <Twitter size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-all cursor-pointer">
                  <Linkedin size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-all cursor-pointer">
                  <Share2 size={18} />
                </button>
              </div>
            </aside>

            {/* Main Article Body */}
            <div className="flex-grow max-w-3xl">
              <article 
                className="blog-content prose prose-lg prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags & Bottom Interaction */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-8">
                <div className="flex flex-wrap gap-2">
                  {['Design', 'Trends', 'Agency', 'Future'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-full font-outfit text-xs hover:bg-brand/10 hover:text-brand cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex lg:hidden items-center gap-4">
                   <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center cursor-pointer">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Back to Blog Button */}
              <div className="mt-20">
                <Link to="/blogs" className="inline-flex items-center gap-3 text-gray-900 font-teko text-2xl font-bold uppercase tracking-tight group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand transition-colors">
                    <ArrowLeft size={20} />
                  </div>
                  Back to Insights
                </Link>
              </div>
            </div>

            {/* Right Sidebar - Info/Newsletter */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-40 space-y-12">
                {/* Newsletter Box */}
                <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h4 className="text-3xl font-teko font-bold uppercase leading-none mb-4 relative z-10">Keep Me<br /><span className="text-brand">Updated.</span></h4>
                  <p className="text-white/50 font-outfit text-sm leading-relaxed mb-8 relative z-10">Get our latest digital stories delivered to your inbox every week.</p>
                  <div className="space-y-3 relative z-10">
                    <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand transition-colors text-white font-outfit text-sm" />
                    <button className="w-full py-3 bg-brand text-gray-900 rounded-xl font-teko text-lg font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform">Subscribe</button>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="px-4">
                   <h4 className="text-xl font-teko font-bold uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-3">
                    Categories
                    <div className="flex-grow h-[1px] bg-gray-100"></div>
                  </h4>
                  <div className="space-y-3">
                    {['Design', 'Development', 'Branding', 'Strategic'].map(cat => (
                      <Link key={cat} to="/blogs" className="flex items-center justify-between text-gray-500 hover:text-brand font-outfit text-[15px] group">
                        {cat}
                        <span className="text-gray-300 group-hover:text-brand transition-colors">0{Math.floor(Math.random() * 9) + 1}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost
