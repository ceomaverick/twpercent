/**
 * @component HomeSubscribeSection
 * @page Home (/app/page.tsx)
 * @description Subscription/Contact CTA section with a background image.
 * @shared false
 * @props none
 */
"use client";

const HomeSubscribeSection = () => {
  return (
    <section className="relative bg-[#111] bg-[url('/img/bg/contact-bg-optimised.jpg')] bg-cover bg-center text-white py-[60px] pb-[40px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="legacy-container relative z-10">
        <div className="flex flex-wrap items-center -mx-[15px]">
          <div className="w-full md:w-5/12 px-[15px] mb-8 md:mb-0 text-center md:text-left">
            <p className="tracking-[1px]">
              Sign up for our newsletter to get the latest news, announcements and
              event information.
            </p>
          </div>
          
          <div className="w-full md:w-6/12 md:ml-[8.333%] px-[15px]">
            <div className="flex items-center w-full max-w-lg mx-auto md:ml-auto md:mr-0 py-[25px]">
              <input 
                type="email" 
                className="flex-1 rounded-l-[25px] border border-[#eee] bg-white text-black px-[2rem] py-[1rem] text-[14px] font-[300] focus:outline-none placeholder:text-gray-400" 
                placeholder="EMAIL" 
              />
              <button 
                className="rounded-r-[25px] border-l-0 border border-[#eee] bg-[#f6f6f6] text-black px-[2rem] py-[1rem] text-[15px] font-[500] tracking-[1px] hover:bg-white transition-all duration-300 uppercase"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSubscribeSection;


