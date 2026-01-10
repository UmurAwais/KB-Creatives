import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const TermsOfService = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(true)
  }, [])

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using the KB Creatives website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and KB Creatives."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements."
        }
      ]
    },
    {
      title: "Services Description",
      content: [
        {
          subtitle: "Scope of Services",
          text: "KB Creatives provides digital design, development, branding, marketing, video editing, and content strategy services. The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate project agreement or statement of work."
        },
        {
          subtitle: "Service Availability",
          text: "While we strive to maintain continuous availability of our website and services, we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
        },
        {
          subtitle: "Third-Party Services",
          text: "Our services may integrate with or rely on third-party platforms, tools, or services. We are not responsible for the availability, functionality, or terms of these third-party services."
        }
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our services or communicating with us. You are responsible for maintaining the accuracy of your information and promptly updating any changes."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You agree not to: (a) use our services for any illegal or unauthorized purpose; (b) violate any laws, regulations, or third-party rights; (c) transmit any harmful code, viruses, or malicious software; (d) attempt to gain unauthorized access to our systems; (e) interfere with or disrupt our services; or (f) engage in any activity that could damage our reputation or business."
        },
        {
          subtitle: "Content Submission",
          text: "When you provide content, materials, or information to us for project purposes, you represent that you have all necessary rights, licenses, and permissions to do so, and that such content does not infringe upon any third-party rights."
        }
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "All content, designs, code, graphics, logos, and materials on our website and in our services are the exclusive property of KB Creatives or our licensors. They are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute our intellectual property without our express written permission."
        },
        {
          subtitle: "Client Intellectual Property",
          text: "Upon full payment for services rendered, you will own the final deliverables created specifically for your project, as outlined in the project agreement. However, we retain the right to use project work in our portfolio, case studies, and marketing materials unless otherwise agreed in writing."
        },
        {
          subtitle: "License Grant",
          text: "We grant you a limited, non-exclusive, non-transferable license to use the deliverables we create for you solely for your intended business purposes. This license does not include the right to resell, redistribute, or sublicense the deliverables."
        },
        {
          subtitle: "Pre-existing Materials",
          text: "Any pre-existing materials, templates, code libraries, or proprietary tools used in creating your deliverables remain our property. You receive a license to use these materials only as incorporated into the final deliverables."
        }
      ]
    },
    {
      title: "Payment Terms",
      content: [
        {
          subtitle: "Pricing and Invoicing",
          text: "Project pricing will be outlined in a separate proposal or statement of work. Unless otherwise specified, we require a 50% deposit before commencing work, with the remaining balance due upon project completion or as specified in the payment schedule."
        },
        {
          subtitle: "Payment Methods",
          text: "We accept payment via bank transfer, credit card, or other methods as agreed upon. All payments must be made in the currency specified in the invoice."
        },
        {
          subtitle: "Late Payments",
          text: "Invoices are due within the timeframe specified (typically 14-30 days). Late payments may incur interest charges of 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts with overdue balances."
        },
        {
          subtitle: "Refund Policy",
          text: "Deposits are generally non-refundable once work has commenced. Refund eligibility for other payments will be determined on a case-by-case basis and outlined in the project agreement."
        }
      ]
    },
    {
      title: "Project Timeline and Revisions",
      content: [
        {
          subtitle: "Timeline Estimates",
          text: "Project timelines are estimates based on the information available at the time of proposal. Actual delivery dates may vary due to factors including client feedback delays, scope changes, or unforeseen technical challenges."
        },
        {
          subtitle: "Revision Policy",
          text: "Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions beyond the agreed scope may incur additional fees."
        },
        {
          subtitle: "Client Responsibilities",
          text: "Timely project completion depends on your prompt provision of required materials, feedback, and approvals. Delays in client responses may extend the project timeline accordingly."
        }
      ]
    },
    {
      title: "Confidentiality",
      content: [
        {
          subtitle: "Confidential Information",
          text: "Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This obligation continues even after the termination of services."
        },
        {
          subtitle: "Exceptions",
          text: "Confidentiality obligations do not apply to information that: (a) is publicly available; (b) was known prior to disclosure; (c) is independently developed; or (d) must be disclosed by law or court order."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Service Limitations",
          text: "Our services are provided 'as is' without warranties of any kind, either express or implied. We do not guarantee that our services will meet your specific requirements or that they will be error-free, secure, or uninterrupted."
        },
        {
          subtitle: "Liability Cap",
          text: "To the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the total amount paid by you for the specific services giving rise to the claim."
        },
        {
          subtitle: "Exclusion of Damages",
          text: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages."
        },
        {
          subtitle: "Third-Party Claims",
          text: "We are not responsible for any claims, damages, or losses resulting from third-party services, platforms, or content integrated with or used in connection with our services."
        }
      ]
    },
    {
      title: "Indemnification",
      content: [
        {
          subtitle: "Your Indemnification",
          text: "You agree to indemnify, defend, and hold harmless KB Creatives, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from: (a) your use of our services; (b) your violation of these terms; (c) your violation of any third-party rights; or (d) any content or materials you provide to us."
        }
      ]
    },
    {
      title: "Termination",
      content: [
        {
          subtitle: "Termination by Either Party",
          text: "Either party may terminate a project or service agreement with written notice. Termination terms, including payment obligations for work completed, will be as specified in the project agreement."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, you must pay for all services rendered up to the termination date. We will deliver all completed work and may retain any deposits or payments made for work performed."
        },
        {
          subtitle: "Survival",
          text: "Provisions regarding intellectual property, confidentiality, payment obligations, limitation of liability, and indemnification shall survive termination of these terms."
        }
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which KB Creatives is registered, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Arbitration",
          text: "Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court, except that you may assert claims in small claims court if they qualify."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree that any arbitration or proceeding shall be limited to the dispute between you and KB Creatives individually. You waive any right to participate in a class action lawsuit or class-wide arbitration."
        }
      ]
    },
    {
      title: "General Provisions",
      content: [
        {
          subtitle: "Entire Agreement",
          text: "These Terms of Service, together with any project agreements or statements of work, constitute the entire agreement between you and KB Creatives regarding our services and supersede all prior agreements and understandings."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect."
        },
        {
          subtitle: "Waiver",
          text: "Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative."
        },
        {
          subtitle: "Assignment",
          text: "You may not assign or transfer these terms or your rights and obligations without our prior written consent. We may assign these terms to any affiliate or successor without restriction."
        },
        {
          subtitle: "Force Majeure",
          text: "We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions."
        }
      ]
    },
    {
      title: "Contact Information",
      content: [
        {
          subtitle: "Questions and Support",
          text: "If you have any questions about these Terms of Service or need support, please contact us at:"
        },
        {
          subtitle: "Contact Details",
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
                Terms of
                <br />
                <span className="text-brand relative inline-block">
                  Service.
                  <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-brand/20 rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-gray-500 font-outfit text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services. By using KB Creatives' services, you agree to be bound by these terms.
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
                Welcome to KB Creatives. These Terms of Service ("Terms") govern your access to and use of our website, services, and products. By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
              </p>
            </div>

            {/* Terms Sections */}
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
                  Acknowledgment and Acceptance
                </h3>
                <p className="text-gray-600 font-outfit leading-relaxed mb-4">
                  By using KB Creatives' services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and KB Creatives.
                </p>
                <p className="text-gray-600 font-outfit leading-relaxed">
                  If you have any questions or concerns about these Terms, please contact us before using our services. We are committed to transparency and are happy to clarify any aspects of these terms.
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

export default TermsOfService
