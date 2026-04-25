/**
 * @component SharedFloatingNav
 * @page Shared
 * @description Floating navigation bar that appears on scroll for quick access to main pages.
 * @shared true
 * @props none
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SharedFloatingNav = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show only on /work pages once verified
  if (!mounted || !pathname.startsWith("/work")) return null;

  const categories = [
    { name: "Identity", href: "/work/logo" },
    { name: "Brochures", href: "/work/brochure" },
    { name: "Web", href: "/work/websites" },
    { name: "Print", href: "/work/print" },
    { name: "Collateral", href: "/work/collateral" },
    { name: "Social", href: "/work/social" },
    { name: "Exploits", href: "/work/exploits" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999999999] pointer-events-none flex justify-center w-full md:w-auto px-4">
      <nav className="pointer-events-auto flex items-center bg-white/60 backdrop-blur-xl backdrop-saturate-150 border border-white/40 px-2 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
        <div className="flex items-center gap-1 md:gap-2">
          {categories.map((cat) => {
            const isActive = pathname === cat.href;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className={`
                  relative px-3 md:px-5 py-1.5 rounded-full text-[9px] md:text-[10px] uppercase transition-all duration-500 ease-out
                  ${isActive 
                    ? "bg-black text-white shadow-md shadow-black/10 scale-105" 
                    : "text-neutral-600 hover:bg-black/5 hover:text-black hover:scale-105 active:scale-95"
                  }
                `}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default SharedFloatingNav;


