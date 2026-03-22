import { Icons } from "@/components/icons";

const work = [
  {
    company: "mobitouch",
    href: "https://mobitouch.net",
    badges: [],
    location: "Rzeszów, Poland 🇵🇱 • hybrid",
    title: "React Developer",
    logoUrl: "/logos/mobitouch.svg",
    start: "October 2022",
    description: `Architecting and developing scalable web applications within the React ecosystem.
- Mentored the frontend path of the company's mLab apprenticeship program during the summer of 2024 and 2025.

  On the 2024 edition, we spearheaded the development of LearnGo Quizzes, an AI-enhanced quiz sharing platform.

  And in 2025, we created two hybrid web/mobile apps: for reporting nature monuments and earning badges for eco-friendly activities.
- Co-developed Loymee, a loyalty PWA web application integrated with mobile wallets that empowers customers to collect points across various shops, restaurants etc., and redeem them for rewards.
- Initiated the development of LearnGo, a comprehensive and customizable learning management system tailored for companies and NGOs.`,
  },
  {
    company: "Seth Software",
    href: "https://seth.software",
    badges: [],
    location: "Głogów Małopolski, Poland 🇵🇱 • hybrid",
    title: "React Developer",
    logoUrl: "/logos/seth.jpeg",
    start: "July 2021",
    end: "October 2022",
    description: `- Developed an instance of Fahrel Monitoring (a fuel delivery camera monitoring system) for a big European fuel transport company (React, Redux, TypeScript)
- Scaled the Cropchart ecosystem web apps (Cropchart, Cropchart Manager, Brigadier) for new features and clients, enhancing a CRM-like platform for farmers (React, Redux, AG Grid)`,
  },
  {
    company: "Brand Active",
    href: "https://brandactive.pl/",
    badges: [],
    location: "Rzeszów, Poland 🇵🇱 • hybrid",
    title: "Junior Front-end Developer",
    logoUrl: "/logos/brand-active.jpeg",
    start: "January",
    end: "June 2021",
    description: `- Developed and customized Shopify-based e-commerce websites utilizing Shopify Liquid and React.
- Maintained Brand Active's WordPress-based company website - adding new case studies and job offers, creating a German language version`,
  },
  {
    company: "Forkflow",
    href: "https://forkflow.io",
    badges: [],
    location: "Remote",
    title: "Frontend Developer",
    logoUrl: "/logos/forkflow.png",
    start: "May 2020",
    end: "January 2021",
    description:
      "Helped The Vegan Kind Supermarket rebuild the entire web app that replaced their previous Shopify website. We redefined the UX and UI, giving the website an amazing new look.",
  },
  {
    company: "Poland-Print",
    href: "https://poland-print.com",
    badges: [],
    location: "Rzeszów, Poland 🇵🇱",
    title: "Web Developer",
    logoUrl: "/logos/poland-print.png",
    start: "December 2018",
    end: "February 2019",
    description:
      'When working for this company, I developed a landing page for Betonovo (a company specializing in innovative concrete constructions)\'s new product - Ławka Niepodległości (pol. "Bench of Independence")',
  },
];

const apprenticeships = [
  {
    company: "Flow Productions",
    href: "https://www.flowproductions.pt",
    badges: [],
    location: "Faro, Portugal 🇵🇹",
    title: "Erasmus+ Apprenticeship 🇪🇺",
    logoUrl: "/logos/flow.webp",
    start: "April",
    end: "May 2022",
    description:
      "Development work with PHP. Alongside this, I made a next.js souvenir website with my friend: [https://faro.zse.rzeszow.pl](https://faro.zse.rzeszow.pl)",
  },
  {
    company: "myPolitics",
    href: "https://mypolitics.pl",
    badges: [],
    location: "Remote",
    title: "Frontend Developer",
    logoUrl: "/logos/mypolitics.jpeg",
    start: "September",
    end: "December 2021",
    description: `- Developed UI components for the myPolitics 3.1 redesign
(Technologies: React, Next.js, TypeScript, styled-components)
- Created some graphics for social media posts in Figma`,
  },
  {
    company: "App Dev League",
    href: "https://appdevleague.org",
    badges: [],
    location: "Remote",
    title: "Director Of Web Development",
    logoUrl: "/logos/adl.jpeg",
    start: "August",
    end: "September 2021",
    description:
      "Creating and maintaining App Dev League's website (React, Next.js)",
  },
  {
    company: "EconHacks Hackathon",
    href: "https://econhacks-website.vercel.app",
    badges: [],
    location: "Remote",
    title: "Web Developer & Founding Member",
    logoUrl: "/logos/econhacks.svg",
    start: "January",
    end: "June 2021",
    description: `Collaborated with Benjamin Chen from Taipei American School and a team of 11 other people from around the world as a web developer in creating EconHacks – a 24-hour international hackathon focused on economics that later evolved to a hackathon network. (It's now defunct)`,
  },
  {
    company: "FOSSASIA",
    href: "https://fossasia.org",
    badges: [],
    location: "Remote",
    title: "Open Source Developer - Google Code-in 2019",
    logoUrl: "/logos/fossasia.svg",
    start: "January",
    end: "February 2020",
    description:
      "As a Google Code-in participant, I worked with FOSSASIA on improving their contest website (gci19.fossasia.org). My work included squishing some CSS layout bugs and doing maintenance tasks with its Jekyll static site generator such as adding new mentor or student profiles.",
  },
];

export const DATA = {
  name: "Kamil Pawlak",
  initials: "KP",
  url: "https://kamilpawlak.com",
  location: "Rzeszów region, Poland",
  description: `I’m a frontend developer and computer science student based near Rzeszów, Poland 🇵🇱. Currently working as a ${work[0].title} at [${work[0].company}](${work[0].href}).`,
  summary: `I specialize in building React-based web app solutions, having experience with various UI/CSS frameworks, API & headless CMS solutions.

I’m also the main author of [“Plan lekcji express”](#projects) – a mobile-first school timetable web app, actively used at my former school (1,000+ students).

You can find me at Rzeszów’s dev meets 🍺 ([Rzeszów.js](https://rzeszowjs.dev), [rg-dev](https://www.meetup.com/rg-dev/?eventOrigin=event_home_page)), and I'm into Apple, traveling & transportation, skiing/skating, good cinema, and have an amateur radio license 📻 ([callsign SO8KP](https://www.qrz.com/db/so8kp)) - which [introduced me to the world of web development](#sp8pop)!
`,
  avatarUrl: "/me.png",
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "Vite", "JavaScript & TypeScript", "Tailwind CSS", "Sass"] },
    { category: "CMS", items: ["Contentful", "Hygraph", "WordPress"] },
    { category: "API", items: ["REST", "GraphQL", "TanStack Query"] },
    { category: "Infrastructure", items: ["Vercel", "Netlify", "Cloudflare"] },
    { category: "AI Tools", items: ["Claude Code", "GitHub Copilot", "Antigravity"] },
  ],
  // navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@kamilpawlak.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rico-et22",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kamil-pawlak-com",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rico_et22",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@kamilpawlak.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work,
  apprenticeships,
  education: [
    {
      school:
        "University of Information Technology and Management in Rzeszów, Poland",
      href: "https://wsiz.edu.pl",
      degree: "Bachelor's Degree, Computer Science",
      logoUrl: "/logos/wsiiz.jpeg",
      start: "2023",
      end: "Present",
      description: `Also serving as a student representative of my year.`,
    },
    {
      school: "Zespół Szkół Elektronicznych w Rzeszowie",
      href: "https://elektronik.rzeszow.pl",
      degree: "Information Technology Technician + High School Diploma",
      logoUrl: "/logos/elektronik.svg",
      start: "2019",
      end: "2023",
      description: `Achievements:
- Finalist of 44th edition of IT, electric & electronic knowledge tournament held yearly at AGH University of Science and Technology in Kraków, Poland.
11th place in IT group.
- Erasmus+ apprentice (Faro, Portugal, 2022).
`,
    },
  ],
  projects: [
    {
      id: "elektronik",
      title: 'elektronik-timetable / "Plan lekcji express"',
      href: "https://plan-lekcji.zse.rzeszow.pl",
      dates: "2022-",
      active: true,
      description: `- School timetable viewer that displays data based on static table-style web pages generated by VULCAN Optivum
- Crafted for Zespół Szkół Elektronicznych w Rzeszowie technical high school from Rzeszow, Poland
- Mobile-first design made to match the school's website one
- Can run for many other Optivum-based school timetables too!
- Data scraping & parsing via @wulkanowy/timetable-parser-js
- Teacher replacements view based on Zespół Szkół Elektronicznych w Rzeszowie's own API
- Technologies: React, Next.js, TypeScript, Tailwind CSS
- An open-source project with other contributors`,
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "See it live",
          href: "https://plan-lekcji.zse.rzeszow.pl",
          icon: <Icons.globe className="size-5" />,
        },
        {
          type: "GitHub repo",
          href: "https://github.com/rico-et22/elektronik-timetable",
          icon: <Icons.github className="size-5" />,
        },
      ],
      image: "/projects/plex.png",
      flagship: true,
    },
    {
      id: "loymee",
      title: "Loymee (mobitouch)",
      href: "https://loymee.com",
      dates: "2025",
      active: true,
      description: `Co-developed frontend of the customer & company apps of the Loymee suite — a loyalty PWA integrated with mobile wallets, enabling customers to collect points across shops, restaurants and more, and redeem them for rewards. (React, Vite, MUI)`,
      technologies: ["React", "Vite", "MUI", "PWA"],
      links: [
        {
          type: "Website",
          href: "https://loymee.com",
          icon: <Icons.globe className="size-5" />,
        },
      ],
      image: "/projects/loymee.png",
      flagship: false,
    },
    {
      id: "learngo",
      title: "LearnGO (mobitouch)",
      href: "https://learngo.app",
      dates: "2023",
      active: true,
      description: `Co-developed frontend of LearnGO — a comprehensive and customizable learning management system tailored for companies and NGOs. (React, Next.js)`,
      technologies: ["React", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://learngo.app",
          icon: <Icons.globe className="size-5" />,
        },
      ],
      image: "/projects/learngo.png",
      flagship: false,
    },
    {
      id: "econhacks",
      title: "EconHacks website",
      href: "https://econhacks-website.vercel.app",
      dates: "2020-2023",
      active: true,
      description: `EconHacks was a completely free 24 hours virtual hackathon that fosters hackers to solve problems in the field of economics. People from all over the world gathered around in the teams of 1-4 people and used code to solve some of the economic problems we are facing, especially during the COVID pandemic. The website originally for this event, but now a network of like-minded hackathons, uses React and Next.js on the frontend and GraphCMS on the backend. It's static, data is fetched with the help of Apollo client.`,
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "See it live",
          href: "https://econhacks-website.vercel.app",
          icon: <Icons.globe className="size-5" />,
        },
        {
          type: "GitHub repo",
          href: "https://github.com/rico-et22/econhacks-website",
          icon: <Icons.github className="size-5" />,
        },
      ],
      image: "/projects/econhacks.png",
      flagship: false,
    },
    {
      id: "sp8pop",
      title: "SP8POP amateur radio club",
      href: "http://sp8pop.zaczernie.pl/",
      dates: "2017-2018",
      active: true,
      description: `This is my first production work ever that inspired me to learn web development to build good, responsive ham radio websites where many of them are still from the past era. It's a site built for a local ham radio club located in Rzeszów/Zaczernie, Poland. It uses a Realistic WordPress theme with my tweaks and some custom components.`,
      technologies: [
        "WordPress",
        "Material Components",
        "Realistic WP Theme",
        "Custom CSS",
      ],
      links: [
        {
          type: "See it live",
          href: "http://sp8pop.zaczernie.pl/",
          icon: <Icons.globe className="size-5" />,
        },
      ],
      image: "/projects/sp8pop.png",
      flagship: false,
    },
  ],
} as const;
