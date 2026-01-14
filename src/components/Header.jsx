import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Button from './Button'
import { searchData } from '../data/searchData'

const Header = ({ navigation }) => {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchClosing, setSearchClosing] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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

  // Real-time filtering logic
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      // If there are results, navigate to the first one on Enter
      navigate(searchResults[0].link)
      closeSearch()
    }
  }

  const handleTagClick = (tag) => {
    setSearchQuery(tag)
  }

  const closeSearch = () => {
    setSearchClosing(true)
    setTimeout(() => {
      setSearchOpen(false)
      setSearchClosing(false)
      setSearchQuery('')
    }, 300)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b py-3 ${
          isScrolled 
            ? 'glass-header shadow-lg border-gray-100' 
            : 'bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border-gray-50'
        }`}
      >
      <div className="max-w-site mx-auto px-6 md:px-12 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-transform duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img 
            src={logo} 
            alt="KB Creatives" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navigation.map((item) => (
            <div 
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={`group px-4 py-2 flex items-center gap-1.5 no-underline text-gray-900 text-[18px] font-medium tracking-tight font-outfit transition-all ${
                  activeDropdown === item.name ? 'text-brand' : ''
                }`}
              >
                <span className="menu-link">
                  {item.name}
                </span>
                {item.dropdown && (
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className={`absolute top-full left-0 w-max min-w-[240px] z-[60] transition-all duration-300 ${
                  activeDropdown === item.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  {/* Invisible bridge to prevent dropdown from closing */}
                  <div className="h-2 w-full"></div>
                  
                  <div className="bg-white backdrop-blur-xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden p-2">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.href}
                        className="flex items-center px-5 py-3.5 no-underline text-gray-700 text-[15px] font-medium font-outfit tracking-normal rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-brand/5 hover:to-brand/10 hover:text-brand group/item"
                      >
                        <span className="flex-1">{subItem.name}</span>
                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            className="w-10 h-10 flex items-center justify-center bg-transparent border-0 cursor-pointer text-gray-700 transition-all duration-300 hover:bg-gray-100 rounded-full group" 
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:scale-110 transition-transform">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Contact Button */}
          <Button 
            to="/contact" 
            className="hidden sm:flex !h-10 !px-6"
            icon={false}
          >
            Start Innovating
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-50 border-0 cursor-pointer rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 overflow-hidden">
              <span className={`absolute left-0 block w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-1.5 block w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-1'}`}></span>
              <span className={`absolute left-0 block w-full h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    {/* Search Overlay */}
    {searchOpen && (
      <div className={`fixed inset-0 z-[100] search-overlay ${searchClosing ? 'closing' : ''}`}>
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={closeSearch}></div>
        <div className="relative w-full max-w-4xl mx-auto px-6 h-full flex flex-col justify-center">
          <button
            onClick={closeSearch}
            className={`absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-gray-100 border-0 cursor-pointer rounded-full text-gray-600 hover:rotate-90 transition-all duration-500 search-close-btn ${searchClosing ? 'closing' : ''}`}
            aria-label="Close search"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <form onSubmit={handleSearch} className={`w-full search-form ${searchClosing ? 'closing' : ''}`}>
            <div className="relative flex items-center border-b-[3px] border-brand/20 focus-within:border-brand transition-all duration-300">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search KB Creatives..."
                className="w-full text-4xl md:text-6xl font-teko font-normal border-0 outline-none py-6 bg-transparent placeholder:text-gray-300"
                autoFocus
              />
              <button type="submit" className="p-4 text-brand hover:scale-110 transition-transform">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className={`flex flex-wrap gap-3 mt-8 search-helper-text ${searchClosing ? 'closing' : ''}`}>
              <span className="text-gray-400 font-teko text-xl mr-2">Trending:</span>
              {['Design', 'Web', 'Branding', 'SEO'].map(tag => (
                <button 
                  key={tag} 
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="px-5 py-1.5 rounded-full bg-gray-100 text-gray-600 font-teko text-lg hover:bg-brand hover:text-white transition-all pointer-events-auto cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Results Display */}
            {searchQuery.trim().length > 1 && (
              <div className={`mt-12 max-h-[50vh] overflow-y-auto custom-scrollbar pr-4 ${searchClosing ? 'closing' : ''}`}>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.link}
                        onClick={closeSearch}
                        className="group flex flex-col p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-brand/10 transition-all duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-brand font-teko text-sm font-bold uppercase tracking-[0.2em]">
                            {result.category}
                          </span>
                          <svg className="w-5 h-5 text-gray-300 group-hover:text-brand transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-teko font-bold text-gray-900 group-hover:text-brand transition-colors uppercase">
                          {result.title}
                        </h4>
                        <p className="text-gray-500 font-outfit text-sm line-clamp-2 mt-2">
                          {result.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-400 font-teko text-3xl uppercase">No matches found for "{searchQuery}"</p>
                    <p className="text-gray-500 font-outfit mt-2">Try different keywords or browse our services.</p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    )}

    {/* Mobile Menu - Full Screen Overlay */}
    <div className={`fixed inset-0 z-40 bg-white md:hidden transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="h-full flex flex-col pt-24 px-8 pb-12 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {navigation.map((item) => (
            <div key={item.name} className="flex flex-col">
              <Link 
                to={item.href}
                className="text-3xl font-outfit font-semibold text-gray-900 no-underline flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {item.dropdown && <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>}
              </Link>
              {item.dropdown && (
                <div className="flex flex-col gap-4 mt-4 ml-4 border-l-2 border-gray-100 pl-6">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="text-xl font-outfit text-gray-500 no-underline hover:text-brand"
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
        
        <div className="mt-auto pt-10 flex flex-col gap-4">
           <Button 
            to="/contact" 
            className="!h-16 !text-xl !rounded-2xl shadow-xl shadow-brand/20"
            onClick={() => setMobileMenuOpen(false)}
            icon={false}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  </>
)
}

export default Header