import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid'

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogFAQs = [
    {
      question: "How often do you publish new articles?",
      answer: "We aim to release deep-dive insights and industry updates at least twice a month, focusing on design trends, technical tutorials, and brand strategy."
    },
    {
      question: "Can I contribute to the KB Creatives blog?",
      answer: "We are always looking for fresh perspectives! If you're an expert in design or technology, feel free to reach out via our contact page with your proposal."
    },
    {
      question: "Do you have a newsletter for blog updates?",
      answer: "Yes, you can subscribe to our weekly digest via the footer to receive our latest stories and curated digital inspiration directly in your inbox."
    },
    {
      question: "Are your case studies available as PDFs?",
      answer: "Most of our featured case studies can be downloaded as comprehensive PDF whitepapers for offline reading and internal sharing."
    },
    {
      question: "Can I use your blog content for my own research?",
      answer: "Absolutely. We encourage sharing and learning! We only ask that you provide proper attribution and a link back to the original article on our site."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <main>
        <BlogHero />
        <BlogGrid />
        <FAQ items={blogFAQs} title="Blog & Insights" subtitle="F.A.Q." />
      </main>
      <Footer />
    </div>
  )
}

export default Blogs
