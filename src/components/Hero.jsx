import React from 'react';
import { MdVerified, MdCheckCircle } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCyu8Z71p1E76U8-W8-_AUvaCQ2lXpE5e_KV8D03mdcpoUjcksGWvWxUPlE23BsKnElfkbVEk1yLvVvYR7KWevlqefcFr4V8SWGLfjlE2fT2SREpgYl1TLoyppFJoU8CoSstOPeojfKu9KIcQtQBMxf5YIq72AmGxrSl09Jvv8d7B2GofuqKoIoQnDnUL95gsv-W02VOWeqKZzDm4_5hLQBJg5Ig7LwpkRpzeOseFPTEPOuf4S83nXGC7naNT2SRjNiy-3f4ZdRLZI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBCTc6n9AWt4UfipzG1kmO-so8I1cFUcrVcZ6UvNYYHJZBaEnSW-V6drZzTJyp4kbSStY0e32M929nED9l7S7QFIf-ipnXGvbCIQl40CtIjEygDDQlzXDMDJB2zGbQi0KfTRSx2dj8P4HmJlafI0ba-IcQt5BCVashQTYAPnrq6XaHBhXLhmEDIpJTaIDYP7T5B7mgnJMxSF8CRbyndGBMFXgtgiKBe-UKvI0Xnsmj-AYVvCPRrpuesA5Z9Br71nleaGvdl029TVsE',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuClgW4NuI51U93R1JuJi1wmFZVO8yJ6WtOjqZ_mB9B7seTdkgXpxyRlfPT524K6xH66nEuT7vBbMEcSsuf4k74vO4dmZQeGhutvKOAHaO4ErvHIx700wNyuyaz4LrhnzhAkMfc85lznS5y2rnmWj4nyvvyH6Py1hFhvjqtYhCXAE92NG5zQwvSqYNv_-Z47H88s7hpQOap7ecSCE3y7CzdzOmB09DBlD5Uzlod7MPiumHjY1PBm8cswOnPwZXDDNUbOKICrdCMsIAM',
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-6 md:px-10 xl:px-16 pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left Column ── */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e1e0ff] text-[#2f2ebe] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase w-fit">
            <MdVerified size={15} className="text-[#4648d4] shrink-0" />
            NEW: BOND CONNECT 2.0 IS HERE
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#131b2e] leading-[1.15] tracking-tight">
            Collaborate in Real-Time{' '}
            <span className="text-[#4648d4]">Without the Friction.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-[#464554] leading-relaxed max-w-lg">
            TriBond centralizes your team's workflow, communication, and project management into a single, high-fidelity environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/login', { state: { mode: 'signup' } })}
              className="bg-[#4648d4] text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-[#6b38d4] active:scale-95 cursor-pointer transition-all shadow-md"
            >
              Start for Free
            </button>
            <button
              onClick={() => navigate('/login')}
              className="border border-[#c7c4d7] text-[#131b2e] hover:bg-[#f2f3ff] px-8 py-3.5 rounded-xl font-semibold text-base active:scale-95 cursor-pointer transition-all"
            >
              Book a Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-3 border-t border-[#c7c4d7]/30">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#e2e7ff]">
                  <img src={src} alt={`user ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-[#464554]">
              <span className="font-bold text-[#131b2e]">12,000+</span> teams joined this month
            </p>
          </div>
        </div>

        {/* ── Right Column: Dashboard Mockup ── */}
        <div className="relative group w-full">
          {/* Glow */}
          <div className="absolute -inset-4 bg-[#4648d4]/5 rounded-[2rem] blur-2xl group-hover:bg-[#4648d4]/10 transition-all duration-700 pointer-events-none" />

          <div className="relative bg-white border border-[#c7c4d7]/30 rounded-2xl shadow-xl overflow-hidden p-5 flex flex-col min-h-[340px]">
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#c7c4d7]/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                <div className="w-3 h-3 rounded-full bg-[#c0c1ff]" />
                <div className="w-3 h-3 rounded-full bg-[#d0bcff]" />
              </div>
              <div className="bg-[#f2f3ff] border border-[#c7c4d7]/20 px-4 py-1 rounded-full text-xs font-semibold text-[#464554]">
                Project: Q4 Strategy
              </div>
              <div className="w-8 h-8 rounded-full bg-[#6063ee] flex items-center justify-center text-white text-xs font-bold">
                JD
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              {/* Main panel */}
              <div className="col-span-2 flex flex-col gap-4">
                <div className="h-36 rounded-xl bg-[#f2f3ff] border border-[#c7c4d7]/10 p-4 flex flex-col justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4648d4] animate-pulse" />
                    <div className="w-20 h-2.5 bg-[#c7c4d7]/40 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-2 bg-[#c7c4d7]/30 rounded" />
                    <div className="w-1/2 h-2 bg-[#c7c4d7]/30 rounded" />
                  </div>
                </div>
                <div className="flex gap-4 flex-1">
                  {[1, 2].map((n) => (
                    <div key={n} className="flex-1 rounded-xl border border-[#c7c4d7]/20 p-3 flex flex-col gap-2">
                      <div className="w-1/2 h-2.5 bg-[#c7c4d7]/30 rounded" />
                      <div className="w-full h-2 bg-[#c7c4d7]/15 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-span-1 border-l border-[#c7c4d7]/20 pl-4 flex flex-col gap-4">
                <div className="w-full h-5 bg-[#4648d4]/10 rounded-lg" />
                <div className="space-y-2.5">
                  <div className="w-full h-2 bg-[#c7c4d7]/25 rounded" />
                  <div className="w-4/5 h-2 bg-[#c7c4d7]/25 rounded" />
                  <div className="w-2/3 h-2 bg-[#c7c4d7]/25 rounded" />
                </div>
                <div className="mt-auto">
                  <div className="w-full h-20 rounded-xl border-2 border-dashed border-[#c7c4d7]/35 hover:border-[#4648d4]/50 transition-colors flex items-center justify-center cursor-pointer">
                    <FiPlus className="text-[#c7c4d7] hover:text-[#4648d4]" size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trusted By ── */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#c7c4d7]/25">
        <p className="text-center text-xs font-bold text-[#464554] uppercase tracking-[0.18em] mb-8">
          Trusted by Global Innovators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale">
          {['TECHFLOW', 'Lumina.ai', 'Vertex', 'CloudScale', 'Nexus'].map((brand) => (
            <span key={brand} className="text-lg md:text-xl font-black text-[#131b2e] tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
