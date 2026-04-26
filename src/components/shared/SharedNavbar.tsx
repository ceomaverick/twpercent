/**
 * @component SharedNavbar
 * @page Shared
 * @description Main site header with logo and primary navigation links (desktop and mobile versions).
 * @shared true
 * @props none
 */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SharedNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-[0_0_1px_1px_#eee] h-[56px] md:h-[77px] z-[1000] flex items-center">
      <nav className="legacy-container w-full flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <Image 
              src="/img/svg/twenty-nav-logo.svg" 
              alt="TwentyPercent Designs" 
              width={150}
              height={60}
              priority
              decoding="async"
              className="w-[120px] md:w-[150px] h-auto"
              style={{ height: 'auto' }}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center h-full">
          <ul className="flex items-center space-x-0 h-full">
            {[
              { label: "HOME", href: "/" },
              { label: "SERVICES", href: "/services" },
              { label: "WORK", href: "/work" },
              { label: "TEAM", href: "/about" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <li 
                key={item.href}
                className={`h-full border-t-[3px] transition-all duration-300 hover:border-[#aaa] flex items-center ${
                  isActive(item.href) ? "border-black" : "border-transparent"
                }`}
              >
                <Link 
                  href={item.href} 
                  className={`flex items-center px-[15px] text-[13px] tracking-[1px] font-normal transition-all duration-300 ${
                    isActive(item.href) ? "text-black" : "text-[#3e3e3e] hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* LinkedIn Icon */}
          <div className="ml-4 border-l pl-6 h-6 flex items-center border-gray-200">
            <a 
              href="https://www.linkedin.com/in/deshmukhavinash/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn Profile"
            >
              <i className="ion-social-linkedin text-2xl" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Socials */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="https://wa.me/918879004014" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#25D366] hover:scale-110 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/deshmukhavinash/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0077b5] hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn Profile"
          >
            <i className="ion-social-linkedin text-2xl" aria-hidden="true"></i>
          </a>
          <button
            className="flex flex-col space-y-1.5 focus:outline-none ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden absolute top-[56px] left-0 w-full bg-white border-b shadow-xl overflow-hidden"
          >
            <ul className="py-6 text-center">
              {[
                { label: "HOME", href: "/" },
                { label: "SERVICES", href: "/services" },
                { label: "WORK", href: "/work" },
                { label: "TEAM", href: "/about" },
                { label: "CONTACT", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-4 text-sm tracking-widest">{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SharedNavbar;


