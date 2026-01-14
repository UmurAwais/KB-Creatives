import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'

// Navigation configuration
export const navigationConfig = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Portfolio', 
    href: '/portfolio',
    dropdown: [
      { name: 'Digital Marketing', href: '/portfolio/digital-marketing' },
      { name: 'Brand Identity', href: '/portfolio/brand-identity' },
      { name: 'UI/UX Design', href: '/portfolio/ui-ux-design' },
      { name: 'Web Development', href: '/portfolio/web-development' },
      { name: 'Content Strategy', href: '/portfolio/content-strategy' },
      { name: 'Video Editing', href: '/portfolio/video-editing' },
      { name: 'Shopify Development', href: '/portfolio/shopify-development' },
      { name: 'Graphic Design', href: '/portfolio/graphic-design' },
      { name: 'Content Monetization', href: '/portfolio/content-monetization' }
    ]
  },
  { name: 'Our Team', href: '/team' },
  { name: 'Blogs', href: '/blogs' }
]

// Router configuration
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/portfolio/ui-ux-design',
        element: <Portfolio />
      },
      {
        path: '/portfolio/web-development',
        element: <Portfolio />
      },
      {
        path: '/portfolio/brand-identity',
        element: <Portfolio />
      },
      {
        path: '/portfolio/digital-marketing',
        element: <Portfolio />
      },
      {
        path: '/portfolio/video-editing',
        element: <Portfolio />
      },
      {
        path: '/portfolio/content-strategy',
        element: <Portfolio />
      },
      {
        path: '/portfolio/shopify-development',
        element: <Portfolio />
      },
      {
        path: '/portfolio/graphic-design',
        element: <Portfolio />
      },
      {
        path: '/portfolio/content-monetization',
        element: <Portfolio />
      },


      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/blogs/:slug',
        element: <BlogPost />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: '/terms',
        element: <TermsOfService />
      },
      {
        path: '/cookies',
        element: <CookiePolicy />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
