import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    octave,
    anveshan,
    orange,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    weather,
    landing,
    password,
    threejs,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Structure and Algorithms ",
      icon: creator,
    },
    {
      title: "Backend (Learning) ",
      icon: backend,
    },
    {
      title: "Public Relations and Marketing",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Public Relations Head",
      company_name: "Octave Society",
      icon: octave,
      iconBg: "#FFFFFF",
      date: "September 2023 - February 2024",
      points: [
        "Directed sponsorship outreach through cold calling and cold emailing, securing sponsorship deals for events.",
    "Planned and executed multiple events, including the solo singing competition, managing logistics and operations.",
    "Promoted events through targeted communication strategies and social media campaigns.",
    "Collaborated with technical teams to ensure seamless event execution.",
    "Developed promotional materials and led marketing efforts to increase participation.",

      ],
    },
    {
      title: "Public Relations Head",
      company_name: "Anveshan Society",
      icon: anveshan,
      iconBg: "#000000",
      date: "June 2024 - Present",
      points: [
        "Led the public relations team, ensuring effective communication and outreach strategies.",
        "Managed event announcements and social media promotions to boost engagement.",
        "Collaborated with marketing teams to create campaigns that increased event participation.",
        "Built relationships with external organizations for strategic partnerships.",
        "Monitored and analyzed campaign performance for continuous improvement.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Orange Infomedia",
      icon: orange,
      iconBg: "#000000",
      date: "June 2024 - August 2024",
      points: [
        "Designed and developed a multi-page landing website using HTML, CSS, and JavaScript.",
        "Implemented a responsive navigation bar available across all pages.",
        "Integrated a 'Leave a Message' form with validation for user input.",
        "Optimized the website for a better user experience and mobile responsiveness.",
        "Collaborated with the design team to ensure consistent branding across the site.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
       
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://aryamanbro.github.io/Projects/weather%20app/",
    },
    {
      name: "Landing Page",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        
      ],
      image: landing,
      source_code_link: "https://landing-bice-five.vercel.app/",
    },
    {
      name: "Password Generator",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: password,
      source_code_link: "https://projects-kappa-three.vercel.app/",
    },
  ];
  
  export { navLinks,services, technologies, experiences, testimonials, projects };