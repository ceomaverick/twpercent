"use client";

import { Reveal } from "@/components/Reveal";

const ContactForm = () => {
  return (
    <section className="py-20 md:py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Info Column */}
          <div className="w-full md:w-5/12 px-[15px] mb-[60px] md:mb-0 text-left">
            <Reveal direction="up" delay={0.2}>
              <h3 className="text-black text-[24px] font-[500] uppercase tracking-[2px] mb-[30px]">Contact Us</h3>
              <p className="mb-[30px]">
                Want to reinvigorate your brand, develop a world-class retina-ready
                website or design a visually stunning brochure, we are the people to
                have on your speed dial. Give us a call or email us to discuss the
                project you have on your mind or fill up the form given below. We'll
                get in touch with you.
              </p>
              <div className="space-y-[10px]">
                <p className="font-[500] text-[#222]">
                  Call: <span className="font-[300]">+91 8879094014 // +91 9833943688</span>
                </p>
                <p className="font-[500] text-[#222]">
                  Email: <span className="font-[300]">ceomaverick@gmail.com</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-5/12 md:ml-[16.666%] flex items-center justify-center">
            <Reveal direction="down" delay={0.4} className="w-full">
              <div className="relative w-full mx-auto">
                <img 
                  src="/img/contact/phone.webp" 
                  alt="Contact Us" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
