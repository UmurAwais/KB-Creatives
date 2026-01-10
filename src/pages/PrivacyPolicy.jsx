import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(true)
  }, [])

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you contact us or use our services, we may collect personal information such as your name, email address, phone number, company name, and project details. This information is provided voluntarily by you through our contact forms, email communications, or during consultations."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, time spent on pages, and referring website addresses. This data helps us improve our website performance and user experience."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your personal information to provide, maintain, and improve our digital services, respond to your inquiries, process project requests, and deliver the solutions you've commissioned from us."
        },
        {
          subtitle: "Communication",
          text: "Your contact information enables us to send project updates, respond to support requests, share relevant industry insights, and notify you about our services. You can opt out of marketing communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how visitors interact with our website, identify areas for improvement, optimize our content, and enhance overall user experience."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests, and to protect our rights and the rights of our users."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These parties are contractually obligated to keep your information confidential and use it only for the purposes we specify."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice on our website of any such change in ownership."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, court order, or other legal process, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share your information with third parties when you have given us explicit consent to do so for a specific purpose."
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, firewalls, and regular security audits."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements."
        },
        {
          subtitle: "Limitations",
          text: "While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to maintain the highest standards of data protection."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information at any time. Contact us at info@kbcreatives.pk to request access to or modification of your data."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to certain legal exceptions. We will respond to your request within a reasonable timeframe and in accordance with applicable laws."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving marketing communications from us by clicking the unsubscribe link in our emails or by contacting us directly. Please note that you may still receive transactional or service-related communications."
        },
        {
          subtitle: "Cookie Management",
          text: "You can control and manage cookies through your browser settings. Disabling cookies may affect certain features and functionality of our website."
        }
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Transfers",
          text: "As a remote-first agency operating globally, your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards."
        }
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date."
        },
        {
          subtitle: "Your Continued Use",
          text: "Your continued use of our website and services after any changes to this privacy policy constitutes your acceptance of the updated terms."
        }
      ]
    },
    {
      title: "Contact Us",
      content: [
        {
          subtitle: "Questions and Concerns",
          text: "If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us at:"
        },
        {
          subtitle: "Contact Information",
          text: "Email: info@kbcreatives.pk\nPhone: (+92) 300 0069835\nAddress: 51/G1 College Road, Chishtian Mandi"
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
                Privacy
                <br />
                <span className="text-brand relative inline-block">
                  Policy.
                  <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-gray-500 font-outfit text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
                At KB Creatives, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </div>

            {/* Policy Sections */}
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
                  Acknowledgment
                </h3>
                <p className="text-gray-600 font-outfit leading-relaxed">
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our website and services immediately.
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

export default PrivacyPolicy
