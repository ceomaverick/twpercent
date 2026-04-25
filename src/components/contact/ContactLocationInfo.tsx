/**
 * @component LocationInfo
 * @page Contact (/app/contact/page.tsx)
 * @description Section displaying the agency's physical location with a monochromatic background.
 * @shared false
 * @props none
 */
"use client";

import SharedReveal from "@/components/shared/SharedReveal";

const LocationInfo = () => {
  return (
    <section className="relative w-full min-h-[400px] flex items-center overflow-hidden">
      {/* Background Image with Monochromatic Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125"
        style={{ backgroundImage: "url('/img/contact/kamothe-cityscape.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="legacy-container relative z-10 py-20 w-full">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Mumbai Location */}
          <div className="w-full md:w-6/12 px-[15px] mb-12 md:mb-0">
            <SharedReveal direction="left" delay={0.2}>
              <div className="text-white border-l-4 border-white/30 pl-8">
                <h4 className="text-[20px] font-[500] uppercase tracking-[3px] mb-6">Navi Mumbai Office</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Registered Address</h5>
                    <p className="text-[18px] font-[300] leading-relaxed">
                      TWENTYPERCENT DESIGNS <br />
                      Jui-Kamothe, Sector 7, <br />
                      Kamothe, Navi Mumbai 410209
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    <div>
                      <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Work Hours</h5>
                      <p className="text-[16px] font-[300]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Primary Contact</h5>
                      <p className="text-[16px] font-[300]">+91 88790 94014</p>
                    </div>
                  </div>
                </div>
              </div>
            </SharedReveal>
          </div>

          {/* Pune Location */}
          <div className="w-full md:w-6/12 px-[15px]">
            <SharedReveal direction="right" delay={0.4}>
              <div className="text-white border-l-4 border-white/30 pl-8">
                <h4 className="text-[20px] font-[500] uppercase tracking-[3px] mb-6">Pune Design Studio</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Creative Hub</h5>
                    <p className="text-[18px] font-[300] leading-relaxed">
                      TWENTYPERCENT STUDIO <br />
                      Blue Ridge, Phase 1, <br />
                      Hinjewadi, Pune 411057
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    <div>
                      <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Support</h5>
                      <p className="text-[16px] font-[300]">Available 24/7 Online</p>
                    </div>
                    <div>
                      <h5 className="text-[12px] font-bold uppercase tracking-[2px] text-white/60 mb-2">Email</h5>
                      <p className="text-[16px] font-[300]">pune@twentypercent.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;


