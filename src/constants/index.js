import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  cpp,
  vulkn,
  opengl,
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
  magnimus,
  shopify,
  carrent,
  jobit,
  campusConnect,
  tripguide,
  threejs,
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
    icon: web,
  },
  {
    title: "Graphics Programmer",
    icon: mobile,
  },
  {
    title: "Technical Artist",
    icon: creator,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Data  Scientist",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vulkan",
    icon: vulkn,
  },
  {
    name: "OpenGL",
    icon: opengl,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  // title: "React.js Developer",
  // company_name: "Starbucks",
  // icon: starbucks,
  // iconBg: "#383E56",
  // date: "March 2020 - April 2021",
  // points: [
  //   "Developing and maintaining web applications using React.js and other related technologies.",
  //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   "Implementing responsive design and ensuring cross-browser compatibility.",
  //   "Participating in code reviews and providing constructive feedback to other developers.",
  // ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Technical Artist Intern",
    company_name: "Magnimus",
    icon: magnimus,
    iconBg: "#E6DEDD",
    date: "May 2023 - April 2024",
    points: [
      "Developed VFXs in Unity in VR/AR using various technologies.",
      "Wrote shaders in CG/HLSL for simulation of visual elements at various stages of the graphics pipeline.",
      "Utilised Unity3D tools including ShaderGraph, VFXGraph, etc.",
      "Developed mini-games and effects using MetaSpark and JavaScript as the scripting language.",
    ],
  },
  // {
  //   title: "Unemployed",
  //   company_name: "Home",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "April 2024 - Present",
  //   points: [
  //     "There's a grain of truth in every joke, except this section is completely and objectively true.",
  //     "This was created to fill up the void left by the unfortuante lack of Experience by myself.",
  //     "It serves the purpose of showcasing the design of the website better.",
  //     // "I think four points are enough, right?",
  //   ],
  // },
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
    name: "OpenGL Renderer",
    description:
      "A 3D renderer written in C++ using the OpenGL API, this project integrates various advanced graphics programming concepts such as Physically Based Rendering (PBR), Cascaded Shadow Mapping, Image-Based Reflections, and Skeletal Animations.",
    tags: [
      {
        name: "CPP",
        color: "blue-text-gradient",
      },
      {
        name: "OpenGL",
        color: "green-text-gradient",
      },
      {
        name: "GLSL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Shaurya-Ps-Bisht/not-TitanFall3",
    yt_link: "https://youtu.be/W88HXR9QiLM",
  },
  {
    name: "Campus InOutMgmt",
    description:
      "A mobile application developed to ease and digitize the entry exit process for my College. Designed a user-friendly interface with QR code generation, smooth access management.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.dep.my_gate_app&hl=en_IN&pli=1",
  },
  {
    name: "Campus Connect",
    description:
      "Developed a social media platform tailored for college communities, inspired by Reddit. The backend is powered by Node.js and PostgreSQL, ensuring robust performance and scalability.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "purple-text-gradient",
      },
    ],
    image: campusConnect,
    source_code_link: "https://github.com/shilu143/SoftwareEngineeringProject",
  },
];

export { services, technologies, experiences, testimonials, projects };
