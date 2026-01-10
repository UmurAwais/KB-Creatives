import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const CookiePolicy = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(true)
  }, [])

  const sections = [
    {
      title: "What Are Cookies",
      content: [
        {
          subtitle: "Cookie Definition",
          text: "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
        },
        {
          subtitle: "How Cookies Work",
          text: "When you visit our website, cookies are stored in your browser. These files contain information that can be read by the website on subsequent visits, allowing us to recognize you and remember your preferences."
        },
        {
          subtitle: "Cookie Lifespan",
          text: "Cookies can be either 'session cookies' (which are deleted when you close your browser) or 'persistent cookies' (which remain on your device for a set period or until you delete them)."
        }
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as they are essential for the website to work. Examples include authentication cookies and security cookies."
        },
        {
          subtitle: "Performance Cookies",
          text: "Performance cookies collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages. These cookies help us improve our website's performance and user experience. All information collected is aggregated and anonymous."
        },
        {
          subtitle: "Functionality Cookies",
          text: "Functionality cookies allow our website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features. These cookies can also remember changes you've made to text size, fonts, and other customizable elements."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use analytics cookies to understand how visitors interact with our website. This includes information about pages visited, time spent on the site, and navigation paths. We use this data to analyze trends, track user engagement, and improve our content and services."
        },
        {
          subtitle: "Marketing Cookies",
          text: "Marketing cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns. These cookies may be set by us or by third-party advertising partners."
        }
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        {
          subtitle: "External Services",
          text: "Our website may use services from third-party providers such as Google Analytics, social media platforms, and advertising networks. These third parties may set their own cookies on your device to collect information about your browsing activities."
        },
        {
          subtitle: "Social Media Cookies",
          text: "We use social media plugins and widgets that may set cookies to enable sharing functionality and track social media interactions. These cookies are controlled by the respective social media platforms (Facebook, Twitter, LinkedIn, Instagram)."
        },
        {
          subtitle: "Third-Party Control",
          text: "Please note that we do not control third-party cookies. For information about these cookies and how to manage them, please refer to the privacy policies of the respective third-party services."
        }
      ]
    },
    {
      title: "Specific Cookies We Use",
      content: [
        {
          subtitle: "Google Analytics",
          text: "Cookie Names: _ga, _gid, _gat\nPurpose: Track and analyze website traffic and user behavior\nDuration: _ga (2 years), _gid (24 hours), _gat (1 minute)\nType: Analytics"
        },
        {
          subtitle: "Session Management",
          text: "Cookie Names: session_id, user_preferences\nPurpose: Maintain user session and remember preferences\nDuration: Session or 30 days\nType: Essential/Functionality"
        },
        {
          subtitle: "Security Cookies",
          text: "Cookie Names: csrf_token, security_check\nPurpose: Protect against cross-site request forgery and enhance security\nDuration: Session\nType: Essential"
        }
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        {
          subtitle: "Website Functionality",
          text: "We use cookies to ensure our website functions correctly, maintain your session, remember your login status, and provide a seamless browsing experience across different pages."
        },
        {
          subtitle: "User Experience Enhancement",
          text: "Cookies help us remember your preferences, language settings, and customization choices, allowing us to provide a personalized experience tailored to your needs."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze cookie data to understand how visitors use our website, identify popular content, detect technical issues, and make data-driven improvements to our services."
        },
        {
          subtitle: "Marketing and Advertising",
          text: "We use cookies to deliver relevant advertisements, measure campaign effectiveness, and understand which marketing channels drive the most engagement."
        }
      ]
    },
    {
      title: "Managing Your Cookie Preferences",
      content: [
        {
          subtitle: "Browser Settings",
          text: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or notify you when a cookie is being set. Please note that blocking all cookies may impact your ability to use certain features of our website."
        },
        {
          subtitle: "Browser-Specific Instructions",
          text: "Google Chrome: Settings > Privacy and Security > Cookies and other site data\nMozilla Firefox: Options > Privacy & Security > Cookies and Site Data\nSafari: Preferences > Privacy > Cookies and website data\nMicrosoft Edge: Settings > Privacy, search, and services > Cookies and site data"
        },
        {
          subtitle: "Opt-Out Tools",
          text: "You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on. For other third-party cookies, visit the respective service provider's website for opt-out instructions."
        },
        {
          subtitle: "Mobile Devices",
          text: "For mobile devices, you can manage cookies through your device settings or browser app settings. The exact process varies depending on your device and operating system."
        }
      ]
    },
    {
      title: "Impact of Disabling Cookies",
      content: [
        {
          subtitle: "Functionality Limitations",
          text: "If you disable cookies, certain features of our website may not function properly. You may experience issues with navigation, form submissions, personalized content, and saved preferences."
        },
        {
          subtitle: "Essential Cookies",
          text: "Disabling essential cookies will significantly impact your ability to use our website. We recommend keeping essential cookies enabled to ensure proper functionality and security."
        },
        {
          subtitle: "Analytics Impact",
          text: "Disabling analytics cookies will prevent us from collecting data about your website usage. While this doesn't affect your browsing experience, it limits our ability to improve our services based on user behavior."
        }
      ]
    },
    {
      title: "Cookie Consent",
      content: [
        {
          subtitle: "Consent Mechanism",
          text: "When you first visit our website, we may display a cookie consent banner asking for your permission to use certain types of cookies. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences."
        },
        {
          subtitle: "Updating Consent",
          text: "You can change your cookie preferences at any time by accessing the cookie settings through our website footer or by clearing your browser cookies and revisiting our site."
        },
        {
          subtitle: "Implied Consent",
          text: "By continuing to use our website after being informed about our cookie usage, you consent to our use of cookies as described in this policy."
        }
      ]
    },
    {
      title: "Data Protection and Privacy",
      content: [
        {
          subtitle: "Personal Data",
          text: "Some cookies may collect personal data such as IP addresses or browsing behavior. We handle all cookie data in accordance with our Privacy Policy and applicable data protection laws."
        },
        {
          subtitle: "Data Security",
          text: "We implement appropriate security measures to protect cookie data from unauthorized access, alteration, or disclosure. Cookie data is stored securely and accessed only by authorized personnel."
        },
        {
          subtitle: "Data Retention",
          text: "Cookie data is retained only for as long as necessary to fulfill the purposes outlined in this policy. Session cookies are deleted when you close your browser, while persistent cookies remain until their expiration date or until you delete them."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our website and services are not directed to children under the age of 18. We do not knowingly collect information from children through cookies. If we become aware that we have collected cookie data from a child, we will take steps to delete that information."
        }
      ]
    },
    {
      title: "Updates to This Cookie Policy",
      content: [
        {
          subtitle: "Policy Changes",
          text: "We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date."
        },
        {
          subtitle: "Review Regularly",
          text: "We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and how you can manage your preferences."
        }
      ]
    },
    {
      title: "Contact Us",
      content: [
        {
          subtitle: "Questions and Support",
          text: "If you have any questions about our use of cookies or this Cookie Policy, please contact us at:"
        },
        {
          subtitle: "Contact Information",
          text: "Email: hello@kbcreatives.com\nPhone: +1 (555) 123-4567\nAddress: 123 Creative Blvd, Digital City, DC 20001"
        }
      ]
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-site mx-auto px-6 md:px-12">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-brand"></div>
                <span className="text-brand font-outfit text-sm font-bold uppercase tracking-[0.4em]">
                  Legal
                </span>
                <div className="w-12 h-[2px] bg-brand"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-teko font-bold text-gray-900 leading-[0.85] uppercase tracking-tighter mb-6">
                Cookie
                <br />
                <span className="text-brand relative inline-block">
                  Policy.
                  <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-gray-500 font-outfit text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Learn about how we use cookies to enhance your browsing experience and how you can manage your cookie preferences.
              </p>

              <div className="mt-8 text-gray-400 font-outfit text-sm">
                Last Updated: January 10, 2026
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {/* Introduction */}
            <div className="mb-16 pb-16 border-b border-gray-100">
              <p className="text-gray-600 font-outfit text-lg leading-relaxed">
                This Cookie Policy explains how KB Creatives uses cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy. We are committed to transparency about our data practices and your privacy choices.
              </p>
            </div>

            {/* Cookie Sections */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h2 className="text-3xl md:text-4xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-8 flex items-center gap-4">
                    <span className="text-brand text-2xl">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="pl-12">
                        <h3 className="text-xl font-outfit font-bold text-gray-900 mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-600 font-outfit leading-relaxed whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-20 pt-12 border-t border-gray-100">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-teko font-bold text-gray-900 uppercase tracking-tight mb-4">
                  Your Control Over Cookies
                </h3>
                <p className="text-gray-600 font-outfit leading-relaxed mb-4">
                  You have full control over the cookies used on our website. You can manage your cookie preferences through your browser settings or by using the cookie management tools we provide.
                </p>
                <p className="text-gray-600 font-outfit leading-relaxed">
                  If you have any questions about our cookie practices or need assistance managing your preferences, please don't hesitate to contact us. We're here to help ensure your privacy and provide you with the best possible experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CookiePolicy
