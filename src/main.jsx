import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Shop from './pages/Shop.jsx'

// Navigation configuration
export const navigationConfig = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Portfolio', 
    href: '/portfolio',
    dropdown: [
      { name: 'Web Design', href: '/portfolio/web-design' },
      { name: 'Branding', href: '/portfolio/branding' },
      { name: 'Graphics', href: '/portfolio/graphics' }
    ]
  },
  { name: 'Our Team', href: '/team' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' }
]

// Router configuration
const router = createBrowserRouter([
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
        path: '/portfolio/web-design',
        element: <Portfolio />
      },
      {
        path: '/portfolio/branding',
        element: <Portfolio />
      },
      {
        path: '/portfolio/graphics',
        element: <Portfolio />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/team',
        element: <Home /> // Placeholder
      },
      {
        path: '/blogs',
        element: <Home /> // Placeholder
      },
      {
        path: '/contact',
        element: <Home /> // Placeholder
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
