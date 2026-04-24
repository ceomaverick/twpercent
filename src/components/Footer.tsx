import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#eee] py-[70px] pb-[10px]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px]">
            {/* Logo and Copyright */}
            <div className="w-full md:w-3/12 md:ml-[8.333%] px-[15px] text-center md:text-left mb-8 md:mb-0">
              <Image
                src="/img/svg/twenty-nav-logo.svg"
                alt="TwentyPercent Logo"
                width={170}
                height={68}
                className="mx-auto md:mx-0"
                style={{ width: '170px', height: 'auto' }}
              />
              <p className="mt-[20px] text-[13.5px] font-[300] leading-relaxed pb-[10px]">
                Copyright © 2017. <br />
                All rights reserved.
              </p>
            </div>

            {/* Address Sections */}
            <div className="w-full md:w-3/12 px-[15px] mb-8 md:mb-0">
              <div className="mb-6">
                <h5 className="font-bold text-[#111] pb-[10px] uppercase text-[14px]">ADDRESS</h5>
                <p className="text-[13.5px] font-[300] leading-relaxed">
                  TWENTYPERCENT, <br />
                  Jui-Kamothe, Sector 7, <br />
                  Kamothe, NM 410209
                </p>
              </div>
              <div className="mb-6">
                <h5 className="font-bold text-[#111] pb-[10px] uppercase text-[14px]">PHONE</h5>
                <p className="text-[13.5px] font-[300] leading-relaxed">
                  (+091) 88790 94014 <br />
                  (+091) 98333 43388
                </p>
              </div>
              <div>
                <h5 className="font-bold text-[#111] pb-[10px] uppercase text-[14px]">EMAIL</h5>
                <p className="text-[13.5px] font-[300] leading-relaxed">info@twentypercent.in</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="w-1/2 md:w-2/12 px-[15px] mb-8 md:mb-0">
              <h5 className="font-bold text-[#111] pb-[10px] uppercase text-[14px]">NAVIGATION</h5>
              <ul className="list-none py-[10px]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Work", href: "/work" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href} className="py-[5px]">
                    <Link href={link.href} className="text-[#111] font-[300] text-[13.5px] hover:text-black transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="w-1/2 md:w-2/12 px-[15px] mb-8 md:mb-0">
              <h5 className="font-bold text-[#111] pb-[10px] uppercase text-[14px]">SOCIAL</h5>
              <ul className="list-none py-[10px]">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/20percentdesigns/", icon: "ion-social-facebook" },
                  { label: "Instagram", href: "#", icon: "ion-social-instagram" },
                  { label: "LinkedIn", href: "#", icon: "ion-social-linkedin" },
                  { label: "Whatsapp", href: "#", icon: "ion-social-whatsapp" },
                  { label: "Youtube", href: "#", icon: "ion-social-youtube" },
                ].map((social) => (
                  <li key={social.label} className="py-[5px]">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111] font-[300] text-[13.5px] hover:text-black transition-colors flex items-center"
                    >
                      <i className={`${social.icon} mr-[10px] text-[16px]`} aria-hidden="true"></i>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#222]">
        <div className="legacy-container">
          <div className="flex flex-wrap text-center md:text-left">
            <div className="w-full md:w-1/2">
              <p className="text-[#777] text-[12.5px] py-[25px] pb-[20px]">Disclaimer | Privacy Policy | Terms of use | Sitemap</p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <p className="text-[#777] text-[12.5px] py-[25px] pb-[20px]">
                Made with <i className="ion-heart text-red-500" aria-hidden="true"></i> by{" "}
                <a
                  href="http://www.avinashdeshmukh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
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

export default Footer;
