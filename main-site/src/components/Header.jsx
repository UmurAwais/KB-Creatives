import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = ({ navigation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchClosing, setSearchClosing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle ESC key to close search
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && searchOpen) {
        closeSearch()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [searchOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      // Add your search logic here
      // For example: navigate to search results page
      // router.push(`/search?q=${searchQuery}`)
    }
  }

  const closeSearch = () => {
    setSearchClosing(true)
    setTimeout(() => {
      setSearchOpen(false)
      setSearchClosing(false)
      setSearchQuery('')
    }, 300) // Match animation duration
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-3 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_8px_40px_rgb(0,0,0,0.08)]' 
        : 'bg-white border-b border-gray-50'
    }`}>
      <div className="max-w-350 mx-auto px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline text-black">
          <img 
            src={logo} 
            alt="KB Creatives" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className="menu-link no-underline text-black text-[24px] font-normal tracking-tight flex items-center gap-1 uppercase font-teko hover:text-brand "
              >
                {item.name}
                {item.dropdown && (
                  <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-4 bg-white border border-gray-100 shadow-lg min-w-50 animate-fadeIn">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-6 py-3 no-underline text-black text-sm font-semibold transition-all duration-300 border-b border-gray-50 last:border-b-0 hover:bg-gray-50 hover:pl-8"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search Icon */}
        <button 
          className="bg-transparent border-0 cursor-pointer p-2 text-black transition-colors duration-300 hover:text-brand" 
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <circle cx="9" cy="9" r="7" strokeWidth="2"/>
            <path d="M14 14L18 18" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-transparent border-0 cursor-pointer p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1.25 w-6.25">
            <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.75' : ''}`}></span>
            <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.75' : ''}`}></span>
          </span>
        </button>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className={`search-overlay ${searchClosing ? 'closing' : ''} fixed inset-0 bg-white z-100 flex items-center justify-center`}>
          <div className="w-full max-w-4xl px-8">
            {/* Close Button */}
            <button
              onClick={closeSearch}
              className={`search-close-btn ${searchClosing ? 'closing' : ''} absolute top-8 right-8 bg-transparent border-0 cursor-pointer p-2 text-black hover:text-brand hover:rotate-90 transition-all duration-300`}
              aria-label="Close search"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Search Form */}
            <form onSubmit={handleSearch} className={`search-form ${searchClosing ? 'closing' : ''} w-full`}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full text-4xl md:text-6xl font-teko font-normal border-0 border-b-2 border-gray-200 focus:border-brand outline-none py-4 bg-transparent transition-all duration-300 placeholder:text-gray-300"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer p-2 text-black hover:text-brand hover:scale-110 transition-all duration-300"
                  aria-label="Submit search"
                >
                  <svg width="32" height="32" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <circle cx="9" cy="9" r="7" strokeWidth="2"/>
                    <path d="M14 14L18 18" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <p className={`search-helper-text ${searchClosing ? 'closing' : ''} text-gray-500 mt-4 text-sm md:text-base`}>
                Press ESC to close or Enter to search
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-125' : 'max-h-0'}`}>
        {navigation.map((item) => (
          <div key={item.name} className="border-b border-gray-100">
            <Link 
              to={item.href}
              className="block px-8 py-4 no-underline text-black text-lg font-medium uppercase"
              onClick={() => !item.dropdown && setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
            {item.dropdown && (
              <div className="bg-gray-50">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className="block px-8 pl-12 py-3 no-underline text-gray-600 text-sm border-t border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header