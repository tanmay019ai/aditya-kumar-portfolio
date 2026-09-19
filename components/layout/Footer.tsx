'use client';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Freelance', href: '#freelance' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#02040a] pt-16 pb-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-space font-bold tracking-tight text-white uppercase">
              ADITYA KUMAR SRIVASTAVA
            </h2>
            <p className="text-gray-400 font-inter text-xs sm:text-sm max-w-lg mx-auto">
              Data Engineer • Full-Stack Developer • Freelancer
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs sm:text-sm font-inter text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-wider font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-inter">
          <p>© {currentYear} Aditya Kumar Srivastava. All rights reserved.</p>
          <p className="font-mono">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
