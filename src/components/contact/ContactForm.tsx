/**
 * @component ContactForm
 * @page Contact (/app/contact/page.tsx)
 * @description Contact section featuring a form and agency contact details.
 * @shared false
 * @props none
 */
"use client";

import SharedReveal from "@/components/shared/SharedReveal";

const ContactForm = () => {
  return (
    <section className="py-20 md:py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Info Column */}
          <div className="w-full md:w-5/12 px-[15px] mb-[60px] md:mb-0 text-left">
            <SharedReveal direction="up" delay={0.2}>
              <h3 className="text-black text-[24px] font-[500] uppercase tracking-[2px] mb-[30px]">Discuss Your Leverage</h3>
              <p className="mb-[30px]">
                Stop the clutter. Whether you’re scaling a legacy anchor or 
                launching a disruptive startup, we are the tactical partner 
                for your next market-entry. Your roadmap to effectiveness 
                starts with a single, high-intent conversation. We are the 
                people to have on your speed dial.
              </p>
              <div className="space-y-[10px]">
                <p className="font-[500] text-[#222]">
                  Direct: <span className="font-[300]">+91 88790 94014 // +91 98339 43688</span>
                </p>
                <p className="font-[500] text-[#222]">
                  Email: <span className="font-[300]">ceomaverick@gmail.com</span>
                </p>
              </div>
            </SharedReveal>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-5/12 md:ml-[16.666%] flex items-center justify-center">
            <SharedReveal direction="down" delay={0.4} className="w-full">
              <div className="relative w-full mx-auto">
                <img 
                  src="/img/contact/phone.webp" 
                  alt="Contact Us" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


