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
  { name: 'HOME', href: '/' },
  { 
    name: 'PORTFOLIO', 
    href: '/portfolio',
    dropdown: [
      { name: 'Web Design', href: '/portfolio/web-design' },
      { name: 'Branding', href: '/portfolio/branding' },
      { name: 'Graphics', href: '/portfolio/graphics' }
    ]
  },
  { name: 'SERVICES', href: '/services' },
  { name: 'ABOUT', href: '/about' },
  { 
    name: 'PAGES', 
    href: '#',
    dropdown: [
      { name: 'Team', href: '/team' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  { name: 'SHOP', href: '/shop' }
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
        element: <Home /> // Replace with Team component when created
      },
      {
        path: '/pricing',
        element: <Home /> // Replace with Pricing component when created
      },
      {
        path: '/contact',
        element: <Home /> // Replace with Contact component when created
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
