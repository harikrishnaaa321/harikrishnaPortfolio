import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

  python,
  java,
  c,
  flask,
  sql,
  powerbi,
} from "../assets";


export const navLinks = [
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
    icon: reactjs,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: python,
  },
  {
    title: "Data Science Intern",
    icon: powerbi,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Azure AI",
  //   icon: azure,
  // },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Git",
    icon: git,
  },
];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Achieved Microsoft Certified Azure AI 900 Fundamentals:",
    name: "Microsoft Certification",
    image: "/ai_azure.png", // Replace with an Azure-themed image if preferred
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=71D5B77DDDC5A55326D68267DCD32B8B236EEA2A64F8F0BF07C9F7B9A3FE2E07"
  },
  {
    testimonial:
      "Secured Oracle OCI Generative AI Professional certification.",
    name: "Oracle Certification",
    image: "/oracle.png", // Replace with an Oracle-themed image if preferred
    link: "https://www.credly.com/badges/ed53ef4a-b794-401c-924c-7162d52baf0f/public_url"
  },
  {
    testimonial:
      "Earned NPTEL Database Management Systems certificate with a score of 82%",
    name: "NPTEL DBMS",
    image: "/nptel.png", // Replace with an NPTEL-themed image if preferred
    link: "https://drive.google.com/file/d/15kf_ihuiH82P0d_cx1gs0dSJGG39AOp8/view?usp=sharing"
  },
  {
    testimonial:
      "Achieved 4th place in the prestigious Demux Hackathon at BVRIT College",
    name: "Demux Hackathon",
    image: "/bvrit1.jpg", // Replace with a relevant hackathon-themed image
    link: "https://drive.google.com/file/d/1Yhj1Ih7Cymmgh2HN1-CFCxZdxzJBbqFG/view?usp=sharing"
  },
];

const projects = [
  {
    name: "Handwritten Text Recognition",
    description:
      "Developed a system using Python and Neural Networks to recognize handwritten text with high accuracy, leveraging an RCNN model and LSTM layers for sequence prediction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "rcnn",
        color: "pink-text-gradient",
      },
    ],
    image: "/handwritten_text1.png",
    source_code_link: "https://github.com/harikrishnaaa321/handwritten_text_recognition",
  },
  {
    name: "Chatting System",
    description:
      "Built a real-time chatting application using the MERN stack, integrating Socket.io for instant messaging and achieving low-latency communication between users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: "/chat-app-3.png",
    source_code_link: "https://github.com/harikrishnaaa321/hey-chat",
  },
  {
    name: "Dream Estate",
    description:
      "Developed a property listing platform with 3+ search filters and real-time updates, supporting secure user authentication and seamless CRUD operations for owners to manage their listings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "/realestate.png",
    source_code_link: "https://github.com/harikrishnaaa321/RealEstateApp.git",
  },
];


export { services, technologies, experiences, testimonials, projects };