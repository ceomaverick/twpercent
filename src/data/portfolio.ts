export interface PortfolioImage {
  src: string;
  className?: string; // e.g., "col-sm-12", "col-sm-6", "col-md-12", "col-md-6"
}

export interface PortfolioIcon {
  src: string;
  label: string;
}

export interface IntroColumn {
  type: "text" | "image";
  content?: {
    client?: string;
    project?: string;
    details?: string;
  };
  image?: string;
  className?: string; // defaults to col-md-6 or col-sm-6
}

export interface PortfolioSection {
  introColumns: IntroColumn[];
  gallery: PortfolioImage[];
  isOdd?: boolean;
  icons?: PortfolioIcon[]; // for Mixed Bag
}

export interface PortfolioCategory {
  title: string;
  heroClass: string;
  sections: PortfolioSection[];
}

export const portfolioData: Record<string, PortfolioCategory> = {
  logo: {
    title: "IDENTITY",
    heroClass: "logo-bg",
    sections: [
      {
        introColumns: [
          { type: "image", image: "/img/folio/logo/philogo.jpg" },
          {
            type: "text",
            content: {
              client: "Pacific Habitats India Pvt Ltd",
              project: "Corporate Identity Design",
              details:
                "We engineered a monogrammatic anchor for a brand emerging from zero. The PHI identity is a masterclass in market-entry precision—turning a new idea into an immediate industry legacy.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/logo/phista.jpg", className: "col-sm-12" },
          { src: "/img/folio/logo/philfolder.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/philopen.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/phicard.jpg", className: "col-sm-12" },
          { src: "/img/folio/logo/phishirt.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/phicost.jpg", className: "col-sm-6" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            content: {
              client: "Vibrant Holiday Destinations",
              project: "Corporate Identity Design",
              details:
                "We captured the high-velocity energy of motion. The identity uses a strategic 'Swoosh-V' geometry to communicate freedom and reliability—the essential levers for building immediate trust in the travel sector.",
            },
          },
          { type: "image", image: "/img/folio/logo/vibrant-master.jpg" },
        ],
        gallery: [
          { src: "/img/folio/logo/vibrant-stationery.jpg", className: "col-sm-12" },
          { src: "/img/folio/logo/vibrant-bag.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/vibrant-door.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/vibrant-mockup.jpg", className: "col-sm-12" },
        ],
      },
      {
        introColumns: [
          { type: "image", image: "/img/folio/logo/fn-one.jpg" },
          {
            type: "text",
            content: {
              client: "Future Networks",
              project: "Project Identity Design",
              details:
                "Identity as an Interface. For Future Networks, we synthesized circuit-board precision with a modern device silhouette. This isn't just a logo; it's a visual manifestation of the client's core technological backbone.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/logo/fn-two.jpg", className: "col-sm-12" }],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            content: {
              client: "IQ Residences",
              project: "Corporate Identity Design",
              details:
                "Architecting Market Dominance. We transformed 'IQ' from a name into a regional powerhouse, engineering a comprehensive visual system that dominated physical, digital, and outdoor landscapes.",
            },
          },
          { type: "image", image: "/img/folio/logo/iq-wall.jpg" },
        ],
        gallery: [
          { src: "/img/folio/logo/iq-web.jpg", className: "col-sm-12" },
          { src: "/img/folio/logo/iq-phone.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/iq-usb.jpg", className: "col-sm-6" },
        ],
      },
      {
        introColumns: [
          { type: "image", image: "/img/folio/logo/bloom.jpg" },
          {
            type: "text",
            content: {
              client: "Mixed Bag",
              project: "Logo, App Logo and Icons.",
              details:
                "Efficiency in Craft. Even with modular requirements, we refuse to settle for the generic. Our goal is the surgical creation of unique, meaningful marks that exert maximum brand influence from the first point of engagement.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/logo/bloom-large.jpg", className: "col-sm-12" },
          { src: "/img/folio/logo/kaus.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/rashid.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/gold.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/suttra.jpg", className: "col-sm-6" },
          { src: "/img/folio/logo/scale.jpg", className: "col-sm-12" },
        ],

        icons: [
          { src: "/img/folio/logo/icons/tp-balloon-new.svg", label: "Risk Management" },
          { src: "/img/folio/logo/icons/tp-fuel-new.svg", label: "Capital Finance" },
          { src: "/img/folio/logo/icons/tp-gear-new.svg", label: "Business Transformation" },
          { src: "/img/folio/logo/icons/tp-global-new.svg", label: "Global Alliance" },
          { src: "/img/folio/logo/icons/tp-human-new.svg", label: "Human Resource" },
          { src: "/img/folio/logo/icons/tp-real-new.svg", label: "Real Estate" },
        ],
      },
    ],
  },
  brochure: {
    title: "BROCHURES",
    heroClass: "brochure-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
              project: "Report Design and Development",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "GIZ demanded international excellence for rural development in India. We engineered a high-velocity layout that synchronized German precision with local resonance. The result was a fresh, clean, and authoritative report that strictly adhered to global brand guidelines while capturing national interest.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/gz1.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/gz2.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/gz3.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/gz4.jpg", className: "col-sm-6" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "AgriPro Asia, Mumbai and Muscat.",
              project: "Food Catalogue and Leaflets",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "AgriPro is a community-led food chain disruptor. We moved beyond typical EXIM catalogs to engineer a visually-inspiring coffee table book. This high-octane literature delivers deep technical information through a premium aesthetic, proving that industrial food chain experts can dominate through world-class design.",
            },
          },
        ],
        gallery: [
          { src: "/graphix/portfolio/brochures/agripro-brochure-01.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/agripro-brochure-02.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/agripro-brochure-03.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/agripro-brochure-04.jpg", className: "col-md-12" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Godrej Properties, Mumbai.",
              project: "Project Brochures for Godrej E-City, Godrej Horizon",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Godrej Properties requires high-velocity creativity on a massive scale. We engineered three distinct project brochures across India, including this Bengaluru feature. Each layout captures the elite status of the property, delivering sophisticated market positioning under tight deadlines to match Godrej's demanding corporate standards.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/godrej-brochure-01.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/godrej-brochure-03.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/godrej-brochure-04.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/godrej-brochure-05.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/godrej-brochure-06.jpg", className: "col-sm-6" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "KEMPS SHOPPE, Mumbai.",
              project: "Brochure design and content development.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "This boutique project at Kemps Corner required immediate sophistication. We isolated the 'glass facade' as a strategic design lever, capturing playful reflections to engineer a high-end visual experience. The brochure exceeded expectations, transforming a simple brief into a potent tool for high-net-worth engagement.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/kemps-shoppe-01.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/kemps-shoppe-02.jpg", className: "col-sm-6" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
              project: "Report Design and Development",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "GIZ demanded international excellence for rural development in India. We engineered a high-velocity layout that synchronized German precision with local resonance. The result was a fresh, clean, and authoritative report that strictly adhered to global brand guidelines while capturing national interest.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/m1.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/m2.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/m3.jpg", className: "col-sm-6" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "BlueWater Ventures, Lucknow.",
              project: "Brochure design and content development.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "For BlueWater Ventures, we engineered an authoritative brochure built for the Lucknow market. By isolating key architectural reflections, we created a sophisticated layout that dominates the physical marketing landscape. The result is a high-velocity collateral piece that delivers clarity and builds immediate developer trust.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/olm-3.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/olm-4.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/olm-5.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/olm-6.jpg", className: "col-sm-12" },
        ],
      },
    ],
  },
  websites: {
    title: "WEBDESIGN",
    heroClass: "web-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Isthetique (Medical Concierge, Turkey)",
              project: "Digital Strategy & Web Design",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "To disrupt the cluttered Turkish cosmetic surgery market, we moved away from clinical clichés. We engineered a high-velocity digital experience centered around a bespoke 'Medical Turquoise' palette—a strategic crossover between sterile precision and the calming Aegean Sea. This modern, high-speed interface was specifically designed to build immediate trust with a discerning global audience.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/isthetique.webp", className: "col-md-12" }],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Fahrenheit Clinic, Annandale.",
              project: "Web Design, SEO and SMM.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Where medical authority meets human intuition. We distilled the Fahrenheit brand into a refined digital experience that feels as personal as a consultation. Every interaction is calibrated to build patient trust through a signature, airy aesthetic that breathes life into the clinical space.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/web/fahrenheit-clinic-01.jpg", className: "col-sm-12" },
          { src: "/img/folio/web/fahrenheit-clinic-02.jpg", className: "col-sm-6" },
          { src: "/img/folio/web/fahrenheit-clinic-03.jpg", className: "col-sm-6" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Pacific Habitats, Mumbai.",
              project: "Web Design, SEO and Maintenance",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "Evolving an industry anchor. We translated the physical weight of real estate development into a high-density digital presence. The interface uses generous whitespace and monumental imagery to communicate the definitive legacy of Pacific Habitats to a modern investment audience.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/pacific-habitats-01.jpg", className: "col-sm-12" }],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "IQ Smarthomes, Mumbai.",
              project: "Web Design, SEO and Maintainence.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "Digital Architecture for Intelligent Living. For IQ, we crafted a site that feels as responsive as the homes they build. The UX is an atmospheric extension of their technology—using a dark-mode palette and crisp transitions to immerse visitors in the future of domestic luxury.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/iq-web.jpg", className: "col-sm-12" }],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Raghu Thomas.",
              project: "Web Design and Development.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Capturing the 'European Fresh' aesthetic. For Raghu Thomas, we stepped away from standard photography portfolios to architect a minimalist, high-clarity digital gallery. The interface acts as a silent frame—using generous whitespace and a rhythmic grid to ensure his unique visual perspective remains the singular focus.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/raghu_web.jpg", className: "col-sm-12" }],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "AgriPro Food Industries.",
              project: "Web Design and Development.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "Visualizing the global farm-to-table journey. We replaced dry data with a rich, narrative-driven hub for AgriPro. The site acts as a definitive gateway for their community-led supply chain, using an editorial layout to elevate industrial transparency into a premium brand asset.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/agri-web.jpg", className: "col-sm-12" }],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Radix Infra Pvt Ltd",
              project: "Web Design and SEO.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Engineering immediate market authority. For Radix Infra, we bridged the gap from zero digital presence to a dominant industry showcase. We bypassed typical corporate templates to deliver a high-impact interface that redefined their stature—proving that even a new entrant can project a veteran's legacy through strategic design.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/radix-web.jpg", className: "col-sm-12" }],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Navinya Arts",
              project: "Web Design",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "Transforming regional presence into a cohesive digital ecosystem built for long-term scalability and market engagement.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/nav-web.jpg", className: "col-sm-12" }],
      },
    ],
  },
  print: {
    title: "PRINTMEDIA",
    heroClass: "print-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Monarch Group",
              project: "Renaissance Luxury Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Signaling Royalty. We engineered the 'Renaissance' campaign for Monarch, using A-lister Kareena Kapoor as a high-velocity lever to dominate the luxury real estate segment. The print execution bypassed standard lifestyle templates to deliver an aura of immediate heritage and elite status in a competitive market.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/print/monarch.jpg", className: "col-sm-12" }],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "IQ Residences",
              project: "Smart-Home Revolution Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Challenging the Luxury Status Quo. For IQ, we introduced the revolutionary concept of Smart Homes to a traditional market. The newspaper campaign utilized strategic whitespace to create a sense of 'Visual Calm' amidst media clutter, reflecting the effortless intelligence of the residences themselves.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/iq-p1.jpg", className: "col-sm-6" },
          { src: "/img/folio/print/iq-p2.jpg", className: "col-sm-6" },
          { src: "/img/folio/print/iq-p3.jpg", className: "col-sm-6" },
          { src: "/img/folio/print/iq-p4.jpg", className: "col-sm-6" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Nirmal Bang",
              project: "Positive Wealth Connection Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Establishing Deeper Financial Connections. We bypassed typical data-heavy financial ads to connect investment decisions with life's positive moments. By running this narrative-driven campaign in key financial journals, we reached investors at a deeper emotional level, building trust through human resonance.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/nirmal-bang-print-02.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/nirmal-bang-print-01.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/nirmal-bang-print-03.jpg", className: "col-sm-4" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Godrej Properties",
              project: "Emotional Heritage Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Heart-of-Mumbai Resonance. For Godrej, the lever was Emotional Heritage. We engineered a print campaign that focused on making a premium brand feel intimate and personal. The creative bypassed standard corporate polish to forge a lasting emotional connection with a discerning Mumbai audience.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/godrej-print-ad-01.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/godrej-print-ad-02.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/godrej-print-ad-03.jpg", className: "col-sm-4" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Doon IT City",
              project: "Silicon Valley Aesthetic Regional Launch",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "The Future of the North. We brought the 'Silicon Valley' aesthetic to a regional regional market, engineering a digital-first visual system for a physical landscape. The campaign signaled a definitive shift in the region's stature, positioning Doon IT City as the epicenter of a new technological era.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/doon2.jpg", className: "col-sm-6" },
          { src: "/img/folio/print/doon1.jpg", className: "col-sm-6" },
        ],
      },
    ],
  },
  collateral: {
    title: "COLLATERALS",
    heroClass: "collateral-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "IQ Residences",
              project: "Bespoke Marketing Collateral",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "High-Impact Physical Ecosystems. For IQ, collateral wasn't just stationery—it was a tangible extension of their brand's intelligence. We engineered a cohesive visual system across every touchpoint, from golf invites to seasonal gifting, ensuring that each piece exerted a premium influence on the recipient's brand perception.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/col/iq-golf.jpg", className: "col-sm-12" },
          { src: "/img/folio/col/iq-inv.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-gilf-inv.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-christ.jpg", className: "col-sm-12" },
          { src: "/img/folio/col/iq-dus.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-diwali.jpg", className: "col-sm-6" },
        ],
      },
    ],
  },
  social: {
    title: "SOCIAL MEDIA",
    heroClass: "social-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "TameKnot Data Consultancy",
              project: "Digital Intent Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Clarity over Noise. For TameKnot, we engineered a high-velocity social media system that transformed complex data consulting into sharp, intent-driven visual narratives. By focusing on the 20% of messaging that drives 80% of professional engagement, we built a digital presence that signals immediate authority in the data landscape.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/social/tameknot-social-01.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-02.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-03.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-04.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-05.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-06.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-07.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/tameknot-social-08.jpg", className: "col-sm-6" },
        ],
      },
    ],
  },
  exploits: {
    title: "PROACTIVITY",
    heroClass: "exploit-bg",
    sections: [
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Lexus Cars",
              project: "Aggressive Masculine Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Provocative Displacement. We engineered an aggressive, masculine campaign for Lexus that rejected standard automotive luxury. By using jarring, philosophical headlines—'It is dangerous to be a man,' 'A woman is a big lie'—we built a high-velocity brand aura that signals raw power and unfiltered dominance in the city landscape.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/exploits/lexus-proactive-ad-01.jpg", className: "col-sm-4" },
          { src: "/img/folio/exploits/lexus-proactive-ad-02.jpg", className: "col-sm-4" },
          { src: "/img/folio/exploits/lexus-proactive-ad-03.jpg", className: "col-sm-4" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Tata Aria",
              project: "Safety Narrative Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "Neil French Style Narrative. For Tata Aria, we tackled the 'Safety vs. Fate' paradox. With the headline 'Engineers design the car, God gets all the credit,' we engineered a provocative tribute to structural integrity—reminding drivers that survival is a triumph of engineering precision, delivered with a sophisticated, world-class copy edge.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/exploits/aria.jpg", className: "col-sm-12" },
          { src: "/img/folio/exploits/aria-1.jpg", className: "col-sm-6" },
          { src: "/img/folio/exploits/aria-2.jpg", className: "col-sm-6" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Parker Pens",
              project: "Precision Wordplay Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "The Strategic Ink. For Parker, we bypassed standard utility to focus on the 'Reason to Write.' Through high-velocity wordplay, we engineered a campaign that targets the precision of the mind as much as the hand—positioning Parker as the definitive lever for high-impact communication for writers of every discipline.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/exploits/parker-black.jpg", className: "col-sm-6" },
          { src: "/img/folio/exploits/parker-black-two.jpg", className: "col-sm-6" },
        ],
      },
    ],
  },
};
