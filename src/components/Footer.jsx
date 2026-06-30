import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#f2f3ff] border-t border-[#c7c4d7]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2 space-y-4">
            <div className="text-2xl font-bold text-[#131b2e] tracking-tight">TriBond</div>
            <p className="text-sm text-[#464554] max-w-xs leading-relaxed">
              Elevating global collaboration through intelligent real-time infrastructure.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-[11px] font-bold text-[#464554] uppercase tracking-[0.12em]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#464554] hover:text-[#4648d4] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#c7c4d7]/35 px-6 py-5 text-center">
        <p className="text-xs text-[#464554]">
          © 2024 TriBond Collaboration. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
