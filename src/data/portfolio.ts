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
                "A generic brand does little to shine a light on a new idea. Yet with persistence and some amount of luck, you can crack the most stubborn nut. Pacific Habitats offered a similar challenge. We created this identity practically out of nothing. It has a whole story behind it, but in the nutshell the logo is a monogram of letters PHI.",
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
                "It helps when your client is a young fellow having an open mind and passion for his work. I was fortunate to work for vibrant holidays to create their identity. The logo is a reflection of the state of the person on a holiday. The swoosh also creates a shape V – which makes it unique and beautiful.",
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
                "Doing a corporate identity for technology client is always fulfilling. We wanted to drive home “the-connection-with-future” idea. Apart from the circuit board and the modern font, the shape resembles a portable device form – it is both the backbone of future electronics and also the core business of our client.",
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
                "This is the most exciting project we had the opportunity to work on. It began with a powerful name “IQ” for smart homes project. Followed by an identity that was talk of the town. We designed office stationery, office uniforms, office interiors, and print, digital and outdoor campaigns around the identity",
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
                "Most of the clients don’t have the budget or the inclination to create or rework their corporate identity campaigns. Which means we have to make good of the bits and pieces that come our way. Our goal is to create a unique and meaningful logo design– not something you can copy from the Internet.",
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
                "GIZ is a German multinational involved in rural development in India. They wanted us to design a report that matched the international design standards, especially European ones. The task was to create a fresh and clean layout that spoke to both national and international audiences. We created a beautiful layout while strictly adhering to the guidelines.",
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
                "AgriPro Industries is not a typical food EXIM organisation. It is a community-led food chain expert. The client wanted that the difference shows in every piece of communication. Since food catalogue is the most consumed marketing literature in the business, we decided to create a visually-inspiring food catalogue that would give a coffee table book a run for money, yet be incredibly informative.",
            },
          },
        ],
        gallery: [
          { src: "/graphix/portfolio/brochures/a01.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/a02.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/a03.jpg", className: "col-md-12" },
          { src: "/graphix/portfolio/brochures/a04.jpg", className: "col-md-12" },
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
                "Godrej Properties is a demanding client. One has to be creative on the clock. We managed to push some of our better work for three Godrej Properties across the country. Here we have featured one of the brochures we designed for Godrej Property in Bangaluru. We will be linking the Godrej Horizon Brochure soon.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/g1.jpg", className: "col-sm-12" },
          { src: "/img/folio/brochure/g3.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/g4.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/g5.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/g6.jpg", className: "col-sm-6" },
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
                "This was a small but unique project at Kemps Corner, Mumbai. The brief was to design a brochure that looked important and sophisticated. We took “glass facade” as our inspiration and captured playful glass reflections in our layout. The brochure turned out to be better than expected.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/brochure/k1.jpg", className: "col-sm-6" },
          { src: "/img/folio/brochure/k2.jpg", className: "col-sm-6" },
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
                "GIZ is a German multinational involved in rural development in India. They wanted us to design a report that matched the international design standards, especially European ones. The task was to create a fresh and clean layout that spoke to both national and international audiences. We created a beautiful layout while strictly adhering to the guidelines.",
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
                "This was a small but unique project at Kemps Corner, Mumbai. The brief was to design a brochure that looked important and sophisticated. We took “glass facade” as our inspiration and captured playful glass reflections in our layout. The brochure turned out to be better than expected.",
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
              client: "Fahrenheit Clinic, Annandale.",
              project: "Web Design, SEO and SMM.",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details:
                "We designed the entire corporate identity for the client. We focused on creating a clean, professional web presence that accurately represents the clinic's brand and services while ensuring high visibility through SEO and social media marketing.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/web/f11.jpg", className: "col-md-12" },
          { src: "/img/folio/web/f5.jpg", className: "col-md-6" },
          { src: "/img/folio/web/f2.jpg", className: "col-md-6" },
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/p11.jpg", className: "col-md-12" }],
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/iq-web.jpg", className: "col-md-12" }],
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/raghu_web.jpg", className: "col-md-12" }],
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/agri-web.jpg", className: "col-md-12" }],
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/radix-web.jpg", className: "col-md-12" }],
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
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [{ src: "/img/folio/web/nav-web.jpg", className: "col-md-12" }],
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
              client: "Monarch",
              project: "Newspaper Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
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
              project: "Newspaper Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
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
              project: "Print Magazine Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/n2.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/n1.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/n3.jpg", className: "col-sm-4" },
        ],
      },
      {
        isOdd: true,
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Nirmal Bang",
              project: "Print Magazine Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/print/g1.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/g2.jpg", className: "col-sm-4" },
          { src: "/img/folio/print/g3.jpg", className: "col-sm-4" },
        ],
      },
      {
        introColumns: [
          {
            type: "text",
            className: "col-sm-6",
            content: {
              client: "Doon IT City",
              project: "Newspaper Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
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
              project: "Web Design",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client. We designed the entire corporate identity for the client. We designed the entire corporate identity for the client. We designed the entire corporate identity for the client. We designed the entire corporate identity for the client. We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/col/iq-golf.jpg", className: "col-sm-12 s-t30" },
          { src: "/img/folio/col/iq-inv.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-gilf-inv.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-christ.jpg", className: "col-sm-12" },
          { src: "/img/folio/col/iq-dus.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/iq-diwali.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/nm-leaf-1.jpg", className: "col-sm-12" },
          { src: "/img/folio/col/nm-leaf-2.jpg", className: "col-sm-12" },
          { src: "/img/folio/col/post1.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/post2.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/post3.jpg", className: "col-sm-6" },
          { src: "/img/folio/col/post4.jpg", className: "col-sm-6" },
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
              project: "Social Media Campaign",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/social/post-one.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-two.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-three.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-four.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-five.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-six.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-seven.jpg", className: "col-sm-6" },
          { src: "/img/folio/social/post-eight.jpg", className: "col-sm-6" },
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
              project: "Magazine Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
            },
          },
        ],
        gallery: [
          { src: "/img/folio/exploits/lexus-1.jpg", className: "col-sm-4" },
          { src: "/img/folio/exploits/lexus-2.jpg", className: "col-sm-4" },
          { src: "/img/folio/exploits/lexus-3.jpg", className: "col-sm-4" },
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
              project: "Magazine Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
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
              project: "Print Magazine Ads",
            },
          },
          {
            type: "text",
            className: "col-sm-6",
            content: {
              details: "We designed the entire corporate identity for the client.",
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
