export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Google Docs",
    description:
      "Developed a feature-rich web application with real-time collaboration capabilities using WebSocket technology to allow multiple users to edit documents simultaneously.",
    technologies: ["Next.js", "Typescript", "Socket.IO"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  {
    id: 1,
    name: "LeetCode",
    description:
      "Crafted a seamless web platform with Worker magic, delivering coding challenges effortlessly, backed by lightning-fast compilation and scalability.",
    technologies: ["GO", "RabbitMQ", "NextJS", "MySQL"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/codex.png"),
    available: true,
  },
  {
    id: 2,
    name: "ShopCruise",
    description:
      "Shopcruise lets you seamlessly explore ecommerce, add products, and search across all pages. It offers user authentication along with a payment integration.",
    technologies: ["NextJS", "Typescript","TailwindCSS"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/shopcruise.png"),
    available: true,
  },
  {
    id: 3,
    name: "Zoom",
    description:
      "Developed a video conferencing platform with real-time video and audio communication using WebRTC, ensuring high-quality, low-latency video conferencing.",
    technologies: ["WebRTC", "Socket.IO", "React.JS"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/google-meet.jpg"),
    available: true,
  },
  // {
  //   id: 3,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/jayendra-pawar/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/jayendra-pawar/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
