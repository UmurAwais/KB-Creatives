import React, { useState } from 'react'
import MotionSection from '../about/MotionSection'
import Button from '../Button'
import { Mail, Phone, MapPin, Send, MessageSquare, User, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    // Add logic for form submission
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="pb-24 md:pb-36">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <MotionSection direction="right">
              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-6">Contact Information</h3>
                  <p className="text-gray-500 font-outfit text-lg leading-relaxed">
                    Prefer direct communication? Reach out to us via any of the channels below. Our team is always ready to assist.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 font-outfit text-xs font-bold uppercase tracking-widest mb-1">Email Us</div>
                      <div className="text-xl font-teko font-bold text-gray-900 tracking-tight">info@kbcreatives.pk</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 font-outfit text-xs font-bold uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-xl font-teko font-bold text-gray-900 tracking-tight">(+92) 300 0069835</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 font-outfit text-xs font-bold uppercase tracking-widest mb-1">Visit Us</div>
                      <div className="text-xl font-teko font-bold text-gray-900 tracking-tight">51/G1 College Road, Chishtian Mandi</div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-gray-100">
                  <h4 className="text-xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-6">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    {[
                      { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com' },
                      { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://facebook.com' },
                      { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
                      { 
                        name: 'X', 
                        icon: (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                          </svg>
                        ), 
                        href: 'https://x.com' 
                      }
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:bg-brand/5 hover:border-brand/20 transition-all duration-300 cursor-pointer"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <MotionSection direction="left" delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden group">
                {/* Decorative Background Glow */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand/10 transition-colors duration-1000"></div>
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-gray-900 font-teko text-xl font-bold uppercase tracking-tight ml-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          className="w-full bg-gray-50 border-0 rounded-2xl py-5 pl-14 pr-6 font-outfit text-gray-900 outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-900 font-teko text-xl font-bold uppercase tracking-tight ml-1">Your Email</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          className="w-full bg-gray-50 border-0 rounded-2xl py-5 pl-14 pr-6 font-outfit text-gray-900 outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-gray-900 font-teko text-xl font-bold uppercase tracking-tight ml-1">Subject</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry" 
                        className="w-full bg-gray-50 border-0 rounded-2xl py-5 pl-14 pr-6 font-outfit text-gray-900 outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-gray-900 font-teko text-xl font-bold uppercase tracking-tight ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..." 
                      rows="6"
                      className="w-full bg-gray-50 border-0 rounded-3xl p-6 font-outfit text-gray-900 outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    variant="primary"
                    className="!w-full !h-20 !rounded-3xl text-2xl tracking-widest"
                    customIcon={<Send size={24} />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </MotionSection>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm
