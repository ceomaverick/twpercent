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
      <nav className="legacy-container flex items-center justify-between h-full">
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

        {/* Mobile Toggle & LinkedIn */}
        <div className="md:hidden flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/deshmukhavinash/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0077b5]"
            aria-label="LinkedIn Profile"
          >
            <i className="ion-social-linkedin text-2xl" aria-hidden="true"></i>
          </a>
          <button
            className="flex flex-col space-y-1.5 focus:outline-none"
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


