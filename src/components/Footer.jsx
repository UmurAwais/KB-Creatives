import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Linkedin, 
  Instagram, 
  Facebook,
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react'
import Button from './Button'
import logo from '../assets/logo-white.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Web Development', href: '/services/web' },
      { name: 'Digital Marketing', href: '/services/marketing' },
      { name: 'SEO Optimization', href: '/services/seo' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Blog', href: '/blogs' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin size={18} /> },
    { name: 'Instagram', href: 'https://instagram.com', icon: <Instagram size={18} /> },
    { name: 'Facebook', href: 'https://facebook.com', icon: <Facebook size={18} /> },
    { 
      name: 'X', 
      href: 'https://x.com', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
        </svg>
      ) 
    }
  ]

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        
        {/* Top CTA Section */}
        <div className="relative mb-24 rounded-[3rem] bg-brand/10 p-10 md:p-20 overflow-hidden group border border-brand/20">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/20 rounded-full blur-[100px] animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-5xl md:text-6xl font-teko font-bold uppercase leading-[0.9] tracking-tighter mb-6">
                Ready to level up <br />
                <span className="text-brand">your digital impact?</span>
              </h2>
              <p className="text-white/60 font-outfit text-lg max-w-xl font-light">
                Let's join forces and build something extraordinary. Our team is ready to turn your vision into a reality that dominates the market.
              </p>
            </div>
            
            <div className="shrink-0 scale-110 md:scale-125">
              <Button variant="primary" to="/contact" className="shadow-[0_20px_40px_-10px_rgba(245,180,25,0.4)]">
                Kickstart Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          
          {/* Brand/Bio */}
          <div className="lg:pr-12">
            <Link to="/" className="inline-block mb-8 group">
              <img src={logo} alt="KB Creatives" className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            </Link>
            <p className="text-white/50 font-outfit text-base leading-relaxed mb-10 font-light">
              Leading the fusion of creativity and technology to build digital experiences that drive growth and inspire innovation.
            </p>
            
            {/* Social Links with Lucide Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-brand hover:bg-brand/10 transition-all duration-300 border border-white/5 hover:border-brand/20"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-teko text-2xl font-bold uppercase tracking-tight mb-8">Our Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300 font-outfit text-[15px]">
                    <span className="w-1 h-1 rounded-full bg-brand/0 group-hover:bg-brand transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-teko text-2xl font-bold uppercase tracking-tight mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-300 font-outfit text-[15px]">
                    <span className="w-1 h-1 rounded-full bg-brand/0 group-hover:bg-brand transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with Lucide Icons */}
          <div>
            <h4 className="text-white font-teko text-2xl font-bold uppercase tracking-tight mb-10">Get In Touch</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand transition-all duration-300 group-hover:bg-brand/10 group-hover:border-brand/20">
                  <MapPin size={20} />
                </div>
                <div className="pt-0.5">
                  <div className="text-white/30 font-outfit text-xs font-bold uppercase tracking-[0.2em] mb-1.5">Visit Us</div>
                  <div className="text-white/80 font-outfit text-[15px] leading-relaxed">
                    51/G1 College Road,<br />Chishtian Mandi
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand transition-all duration-300 group-hover:bg-brand/10 group-hover:border-brand/20">
                  <Mail size={20} />
                </div>
                <div className="pt-0.5">
                  <div className="text-white/30 font-outfit text-xs font-bold uppercase tracking-[0.2em] mb-1.5">Say Hello</div>
                  <a href="mailto:info@kbcreatives.pk" className="text-white/80 hover:text-white font-outfit text-[15px] transition-colors block">
                    info@kbcreatives.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand transition-all duration-300 group-hover:bg-brand/10 group-hover:border-brand/20">
                  <Phone size={20} />
                </div>
                <div className="pt-0.5">
                  <div className="text-white/30 font-outfit text-xs font-bold uppercase tracking-[0.2em] mb-1.5">Call Us</div>
                  <a href="tel:+923000069835" className="text-white/80 hover:text-white font-outfit text-[15px] transition-colors block">
                    (+92) 300 0069835
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/30 font-outfit text-sm">
            © {currentYear} KB Creatives. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-white/30 hover:text-white transition-all font-outfit text-xs uppercase tracking-widest hover:underline underline-offset-4"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
      
      {/* Background Decorative Quote */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.02] pointer-events-none select-none">
        <div className="font-teko text-[25vw] font-bold text-white uppercase leading-none">
          CREATIVE
        </div>
      </div>
    </footer>
  )
}

export default Footer
