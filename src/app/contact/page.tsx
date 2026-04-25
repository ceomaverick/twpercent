import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import LocationInfo from "@/components/contact/LocationInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Advertising Agency in Mumbai & Navi Mumbai",
  description: "Get in touch with TwentyPercent Designs. Contact our Mumbai office for web design, branding, and advertising inquiries. Call +91 8879094014 today.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <LocationInfo />
    </main>
  );
}
