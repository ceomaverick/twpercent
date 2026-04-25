/**
 * @component SharedFooter
 * @page Shared
 * @description Site footer with logo, address, navigation links, and social media icons.
 * @shared true
 * @props none
 */
import Link from "next/link";
import Image from "next/image";

const SharedFooter = () => {
  return (
    <>
      <footer className="bg-[#f9f9f9] py-[70px] pb-[40px] border-t border-[#eee]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px]">
            {/* Logo and Copyright */}
            <div className="w-full md:w-3/12 px-[15px] text-center md:text-left mb-10 md:mb-0">
              <Image
                src="/img/svg/twenty-nav-logo.svg"
                alt="TwentyPercent Logo"
                width={170}
                height={68}
                className="mx-auto md:mx-0 opacity-80"
                style={{ width: '170px', height: 'auto' }}
                loading="lazy"
                decoding="async"
                sizes="170px"
              />
              <div className="md:w-[170px] text-center">
                <p className="mt-[25px] text-[15px] font-[300] leading-[1.6] text-[#444]">
                  Copyright © 2017. <br />
                  All rights reserved.
                </p>
              </div>
            </div>

            {/* Address & Contact Sections */}
            <div className="w-full md:w-3/12 px-[15px] mb-10 md:mb-0">
              <div className="mb-8">
                <h5 className="font-[500] text-[#111] pb-[10px] uppercase text-[14px] tracking-[1px]">ADDRESS</h5>
                <p className="text-[15px] font-[300] leading-[1.6] text-[#444]">
                  TWENTYPERCENT, <br />
                  Jui-Kamothe, Sector 7, <br />
                  Kamothe, NM 410209
                </p>
              </div>
              <div>
                <h5 className="font-[500] text-[#111] pb-[10px] uppercase text-[14px] tracking-[1px]">CONTACT</h5>
                <p className="text-[15px] font-[300] leading-[1.6] text-[#444]">
                  (+091) 88790 94014 <br />
                  (+091) 98333 43388 <br />
                  <span className="mt-1 block">info@twentypercent.in</span>
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="w-1/2 md:w-3/12 px-[15px] mb-10 md:mb-0">
              <h5 className="font-[500] text-[#111] pb-[15px] uppercase text-[14px] tracking-[1px]">NAVIGATION</h5>
              <ul className="list-none pt-[5px]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Work", href: "/work" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href} className="py-[6px]">
                    <Link href={link.href} className="text-[#444] font-[400] text-[15px] hover:text-black transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="w-1/2 md:w-3/12 px-[15px]">
              <h5 className="font-[500] text-[#111] pb-[15px] uppercase text-[14px] tracking-[1px]">SOCIAL</h5>
              <ul className="list-none pt-[5px]">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/20percentdesigns/", icon: "ion-social-facebook" },
                  { label: "Instagram", href: "#", icon: "ion-social-instagram" },
                  { label: "LinkedIn", href: "#", icon: "ion-social-linkedin" },
                  { label: "Whatsapp", href: "#", icon: "ion-social-whatsapp" },
                  { label: "Youtube", href: "#", icon: "ion-social-youtube" },
                ].map((social) => (
                  <li key={social.label} className="py-[6px]">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444] font-[400] text-[15px] hover:text-black transition-colors flex items-center"
                    >
                      <i className={`${social.icon} mr-[12px] text-[18px] opacity-70`} aria-hidden="true"></i>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#eee] border-t border-[#e5e5e5]">
        <div className="legacy-container">
          <div className="flex flex-wrap text-center md:text-left">
            <div className="w-full md:w-1/2">
              <p className="text-[#666] text-[13px] py-[20px]">Disclaimer | Privacy Policy | Terms of use | Sitemap</p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <p className="text-[#666] text-[13px] py-[20px]">
                Made with <i className="ion-heart text-red-500/70" aria-hidden="true"></i> by{" "}
                <a
                  href="http://www.avinashdeshmukh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Avinash Deshmukh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedFooter;


