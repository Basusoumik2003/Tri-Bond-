import React, { useState } from 'react';
import {
  MdSync, MdSecurity, MdApi, MdAnalytics, MdGroup, MdHub,
  MdCheckCircle, MdExpandMore
} from 'react-icons/md';
import { FiCheck } from 'react-icons/fi';

/* ─── Data ─────────────────────────────────────────────────── */
const bentoFeatures = [
  {
    icon: <MdSync size={22} />,
    iconColor: 'text-[#4648d4]',
    iconBg: 'bg-[#4648d4]/10',
    title: 'Real-Time Sync',
    desc: 'Changes reflect across all devices in milliseconds. No manual refreshes, no conflict errors.',
  },
  {
    icon: <MdSecurity size={22} />,
    iconColor: 'text-[#6b38d4]',
    iconBg: 'bg-[#6b38d4]/10',
    title: 'Enterprise Security',
    desc: 'SOC2 Type II compliant with end-to-end encryption for all your internal project data.',
  },
  {
    icon: <MdApi size={22} />,
    iconColor: 'text-[#006577]',
    iconBg: 'bg-[#006577]/10',
    title: 'Advanced API',
    desc: 'Connect your existing stack with our robust GraphQL API and webhooks system.',
  },
  {
    icon: <MdAnalytics size={22} />,
    iconColor: 'text-[#ba1a1a]',
    iconBg: 'bg-[#ba1a1a]/10',
    title: 'Deep Analytics',
    desc: 'Understand team velocity and bottleneck patterns with AI-driven reporting insights.',
  },
  {
    icon: <MdGroup size={22} />,
    iconColor: 'text-[#4648d4]',
    iconBg: 'bg-[#4648d4]/10',
    title: 'Team Dynamics',
    desc: 'Built-in role management and granular permissions to keep your data visible only to those who need it.',
  },
  {
    icon: <MdHub size={22} />,
    iconColor: 'text-[#6b38d4]',
    iconBg: 'bg-[#6b38d4]/10',
    title: 'Central Hub',
    desc: 'The single source of truth for your entire organization. One login, every resource.',
  },
];

const pricingPlans = [
  {
    name: 'STARTER',
    price: '$0',
    unit: '/mo',
    color: 'text-[#464554]',
    features: ['Up to 5 users', '1GB storage', 'Community support'],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'BUSINESS',
    price: '$19',
    unit: '/mo',
    color: 'text-[#4648d4]',
    features: ['Unlimited users', '100GB storage', 'Priority email support', 'Custom integrations'],
    cta: 'Choose Business',
    featured: true,
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    unit: '',
    color: 'text-[#464554]',
    features: ['Dedicated manager', 'SLA uptime guarantee', 'Custom training', 'Single Sign-On (SSO)'],
    cta: 'Contact Sales',
    featured: false,
  },
];

const faqs = [
  {
    q: 'How does TriBond compare to other tools?',
    a: 'TriBond is built for high-performance teams that require deep integration between their design, engineering, and product workflows. Unlike generic tools, we focus on real-time latency and granular data visibility.',
  },
  {
    q: 'Is my data secure in TriBond?',
    a: 'Absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. Our infrastructure is hosted on ISO 27001 compliant servers with 24/7 monitoring.',
  },
  {
    q: 'Can we import data from our current system?',
    a: 'Yes, we offer one-click migration from Jira, Notion, and Asana. Our support team can also assist with custom CSV or API-based imports for proprietary systems.',
  },
];

/* ─── Component ─────────────────────────────────────────────── */
const Features = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full">

      {/* 1 ── Feature Bento Grid */}
      <section id="features" className="w-full px-6 md:px-10 xl:px-16 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#131b2e] mb-4">
              Everything you need to ship faster
            </h2>
            <p className="text-base md:text-lg text-[#464554] max-w-2xl mx-auto">
              Precision-engineered tools for modern teams who refuse to settle for fragmented workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bentoFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-[#c7c4d7]/40 hover:border-[#4648d4] hover:shadow-lg transition-all duration-300 rounded-2xl p-6 group cursor-pointer"
              >
                <div className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center ${f.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-[#131b2e] mb-2 group-hover:text-[#4648d4] transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-[#464554] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 ── Product Showcase */}
      <section className="w-full bg-[#f2f3ff] border-y border-[#c7c4d7]/25 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            {/* Text */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#131b2e] leading-tight">
                Designed for the modern craftsman.
              </h2>
              <p className="text-base md:text-lg text-[#464554] leading-relaxed">
                TriBond isn't just another project management tool. It's a sophisticated engine designed to handle the complexity of large-scale engineering and design operations.
              </p>
              <ul className="space-y-5">
                {[
                  { title: 'Smart Notifications', desc: 'Only get alerted when it truly matters. Intelligent filtering prevents burnout.' },
                  { title: 'Visual Timelines', desc: 'Gantt charts and board views that adapt to how your specific team works.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4 items-start">
                    <MdCheckCircle className="text-[#4648d4] mt-0.5 shrink-0" size={22} />
                    <div>
                      <span className="font-bold text-[#131b2e] block">{item.title}</span>
                      <span className="text-sm text-[#464554]">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline Mockup */}
            <div className="lg:w-1/2 w-full max-w-xl mx-auto lg:max-w-none relative">
              <div className="bg-white p-3 rounded-2xl shadow-2xl border border-[#c7c4d7]/30">
                <div className="bg-[#f2f3ff] rounded-xl p-5 border border-[#c7c4d7]/10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4648d4]" />
                      <span className="text-xs font-bold text-[#131b2e]">Milestones Timeline</span>
                    </div>
                    <div className="flex -space-x-2">
                      {['S', 'M'].map((l) => (
                        <div key={l} className="w-6 h-6 rounded-full bg-[#e1e0ff] flex items-center justify-center text-[10px] font-bold border border-white text-[#4648d4]">{l}</div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'User Research', color: 'bg-[#4648d4]', text: 'Completed', left: 'left-4', w: 'w-1/2' },
                      { label: 'Design System', color: 'bg-[#6b38d4]', text: 'In Progress', left: 'left-14', w: 'w-3/5' },
                      { label: 'Code Scaffold', color: 'bg-[#006577]', text: 'Planning', left: 'left-20', w: 'w-1/3' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-4">
                        <span className="text-xs text-[#464554] w-24 shrink-0 truncate">{row.label}</span>
                        <div className="flex-1 bg-[#eaedff] rounded-full h-6 relative overflow-hidden">
                          <div className={`absolute ${row.left} ${row.w} h-full ${row.color} rounded-full flex items-center px-3`}>
                            <span className="text-[10px] text-white font-bold truncate">{row.text}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Stat badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#4648d4] text-white p-5 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-extrabold">40%</div>
                <div className="text-xs font-semibold uppercase tracking-wider opacity-90">Faster Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Live Code Demo */}
      <section className="w-full px-6 md:px-10 xl:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="border border-[#c7c4d7]/25 rounded-[2rem] p-8 md:p-12 bg-white shadow-sm space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#131b2e]">
              Experience Live Collaboration
            </h2>

            {/* Code editor */}
            <div className="bg-[#131b2e] rounded-2xl p-6 text-left font-mono text-sm text-[#c7c4d7] overflow-hidden relative shadow-inner">
              <div className="flex gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                <div className="w-3 h-3 rounded-full bg-[#d0bcff]" />
                <div className="w-3 h-3 rounded-full bg-[#4cd7f6]" />
              </div>
              <div className="space-y-1.5 opacity-90 leading-relaxed overflow-x-auto">
                <p><span className="text-[#c0c1ff] font-bold">const</span> <span className="text-white">sync</span> = <span className="text-[#d0bcff] font-bold">new</span> <span className="text-[#4cd7f6] font-bold">TriBondClient</span>({'{'}</p>
                <p className="ml-6">apiKey: <span className="text-[#c0c1ff]">'••••••••'</span>,</p>
                <p className="ml-6">realtime: <span className="text-[#c0c1ff]">true</span></p>
                <p>{'}'});</p>
                <p>&nbsp;</p>
                <p><span className="text-[#d0bcff] font-bold">await</span> sync.connect(<span className="text-[#c0c1ff]">'q4-roadmap'</span>);</p>
                <p className="text-[#767586] italic">/* User Sarah joined the session */</p>
                <p className="text-[#767586] italic">/* Task "Homepage redesign" updated by Sarah */</p>
              </div>
              <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white">
                <div className="w-2 h-2 rounded-full bg-[#6063ee] animate-pulse" />
                <span className="font-semibold">Live Stream Connected</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#464554]">
              Simple to integrate. Impossible to break. Join thousands of developers building on TriBond.
            </p>
          </div>
        </div>
      </section>

      {/* 4 ── Pricing */}
      <section id="pricing" className="w-full bg-[#faf8ff] border-y border-[#c7c4d7]/25 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#131b2e] mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-[#464554]">
              Scale your team without scaling your complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 flex flex-col gap-6 transition-all ${
                  plan.featured
                    ? 'border-2 border-[#4648d4] shadow-xl scale-105'
                    : 'border border-[#c7c4d7]/40 hover:shadow-lg'
                } relative`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4648d4] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${plan.color}`}>
                    {plan.name}
                  </span>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#131b2e]">{plan.price}</span>
                    {plan.unit && <span className="text-[#464554]">{plan.unit}</span>}
                  </div>
                </div>
                <hr className="border-[#c7c4d7]/20" />
                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#131b2e]">
                      <FiCheck className="text-[#4648d4] shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.featured
                      ? 'bg-[#4648d4] text-white hover:bg-[#6b38d4] shadow-md'
                      : 'border border-[#c7c4d7] text-[#131b2e] hover:bg-[#f2f3ff]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── FAQ */}
      <section className="w-full px-6 md:px-10 xl:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#131b2e] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-[#c7c4d7]/40 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : idx)}
                    className="w-full flex justify-between items-center gap-4 p-6 text-left font-bold text-[#131b2e] hover:text-[#4648d4] transition-colors focus:outline-none"
                  >
                    <span className="text-sm md:text-base leading-snug">{faq.q}</span>
                    <MdExpandMore
                      size={22}
                      className={`shrink-0 transition-transform duration-300 text-[#464554] ${open ? 'rotate-180 text-[#4648d4]' : ''}`}
                    />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-48 border-t border-[#c7c4d7]/20' : 'max-h-0'}`}>
                    <div className="px-6 py-5 text-sm md:text-base text-[#464554] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 ── CTA Banner */}
      <section className="w-full px-6 md:px-10 xl:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2rem] p-12 md:p-20 text-center overflow-hidden bg-[#6063ee] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4648d4] to-[#6b38d4] opacity-90" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to bond your team?
              </h2>
              <p className="text-base md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Join over 50,000 teams building the future of collaboration on TriBond.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <button className="bg-white text-[#4648d4] px-8 py-4 rounded-xl font-bold text-base hover:scale-105 active:scale-95 transition-all shadow-lg">
                  Get Started for Free
                </button>
                <button className="bg-white/15 backdrop-blur text-white border border-white/25 px-8 py-4 rounded-xl font-bold text-base hover:bg-white/25 active:scale-95 transition-all">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features;
