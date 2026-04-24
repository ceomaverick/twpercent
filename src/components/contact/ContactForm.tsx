"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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

          {/* Form Column */}
          <div className="w-full md:w-5/12 md:ml-[16.666%] px-4">
            <Reveal direction="down" delay={0.4}>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center rounded-sm shadow-sm">
                  <i className="ion-checkmark-circled text-4xl mb-4 block"></i>
                  <p className="text-xl font-light">Your message was sent successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="space-y-8">
                    {/* Name Field */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[2px] mb-2 text-[#333]">
                        <i className="ion-android-contact mr-2 text-lg"></i>Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border-b border-[#e5e5e5] h-[40px] outline-none bg-transparent focus:border-black transition-colors duration-300 text-lg font-light"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[2px] mb-2 text-[#333]">
                        <i className="ion-email mr-2 text-lg"></i>E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border-b border-[#e5e5e5] h-[40px] outline-none bg-transparent focus:border-black transition-colors duration-300 text-lg font-light"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[2px] mb-2 text-[#333]">
                        <i className="ion-ios-chatbubble mr-2 text-lg"></i>Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full border-b border-[#e5e5e5] outline-none bg-transparent focus:border-black transition-colors duration-300 text-lg font-light resize-none py-2"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="px-10 py-4 bg-[#222] text-white border-2 border-[#222] rounded-full text-[1.3rem] font-semibold tracking-widest uppercase hover:bg-transparent hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
