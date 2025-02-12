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
        "Aryaman’s projects demonstrate creativity and technical expertise. Highly recommend working with him!",
      name: "ABC",
      designation: "ABC",
      company: "XYZ",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Aryaman’s projects demonstrate creativity and technical expertise. Highly recommend working with him!",
      name: "ABC",
      designation: "ABC",
      company: "XYZ",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Aryaman’s projects demonstrate creativity and technical expertise. Highly recommend working with him!",
      name: "ABC",
      designation: "ABC",
      company: "XYZ",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "A weather application with a modern landing page that displays real-time weather data using an external API. Users can view current temperature, weather conditions, and toggle between Celsius and Fahrenheit for convenience. The interface is clean and mobile-friendly.",
      tags: [
        {
          name: "Javascript",
          color: "orange-text-gradient",
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
        "A responsive landing page for Orange Infomedia, showcasing company services and information. It includes a navigation bar for seamless transitions between Home, About Us, Contact, and specialized service pages. The contact form allows users to leave messages for inquiries.",
      tags: [
        {
          name: "Javascript",
          color: "orange-text-gradient",
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
        "A simple and secure web-based tool that generates strong, random passwords to enhance online security. Users can customize the password length and choose character types (uppercase, lowercase, numbers, symbols) for personalized security needs. The landing page highlights the tool's functionality and user-friendliness.",
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