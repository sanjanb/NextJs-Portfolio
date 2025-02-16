export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I bring a hybrid skillset for a dynamic world —combining expertise in design, development, and problem-solving to deliver solutions",
    description: "Simple. Clean. Effective",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I'm very flexible with time zone communications, and collaberation.",
    description: "I will be available",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "build what you think.!!",
    description:
      "bridging the gap between Machine Learning, Web Development, and DevOps to",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "AI & ML Innovation – Exploring Deep Learning, NLP, and Computer Vision, building real-world AI models, Enhancing MERN & Next.js skills, integrating DevOps for seamless deployment.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aspirise - A Complete Wellness Advisor",
    des: "An AI-powered wellness advisor designed to detect and support mental health needs, providing personalized solutions and crisis intervention.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/sanjanb/Mental-depression-measures",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    des: "Built a scalable chat application using Node.js and Socket.io, enabling seamless real-time communication between users.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/sanjanb/my-secret-service",
  },
  {
    id: 3,
    title: "Open Source Contribution: GirlScript Winter of Contributing",
    des: "Contributed to various open-source projects, enhancing features and fixing bugs, as part of the GirlScript Winter of Contributing program.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/sanjanb/Web3-Wallet",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/sanjanb/APT-Raw",
  },
];

export const testimonials = [
  {
    quote:
      "Sanjan transformed our vision into a stunning, high-performing web platform. His expertise in React.js and Next.js made a huge impact on our project's success. Highly recommend his work!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Sanjan was a game-changer. His problem-solving skills and attention to detail helped streamline our development process and improve our product's performance.",
    name: "Sarah Patel",
    title: "Founder & CEO, Nexa Solutions",
  },
  {
    quote:
      "Sanjan’s AI & ML expertise gave our application the competitive edge we needed. His deep understanding of NLP and automation saved us countless hours. A truly valuable asset!",
    name: "Arjun Mehta",
    title: "CTO, VisionAI Labs",
  },
  {
    quote:
      "Sanjan’s leadership in frontend development and DevOps automation helped us scale our SaaS platform efficiently. His knowledge of CI/CD pipelines is top-notch!",
    name: "Emily Carter",
    title: "Lead Engineer, CloudSync Technologies",
  },
  {
    quote:
      "Sanjan delivers excellence with speed. His ability to optimize web applications for performance and responsiveness exceeded our expectations. We look forward to working with him again!",
    name: "Daniel Lee",
    title: "Product Manager, ByteCore Systems",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer | MERN & Next.js",
    desc: "Engineered high-performance web applications using React.js & Next.js, optimizing UI/UX and ensuring scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Open Source Contributor | GirlScript Winter of Contributing",
    desc: "Actively contributed to open-source projects, enhancing mobile apps with React Native and improving accessibility & performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI & ML Developer | Computer Vision & NLP",
    desc: "Developed AI-driven solutions leveraging Machine Learning, Computer Vision, and NLP to automate workflows and enhance user engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Tech Lead | Web & DevOps Automation",
    desc: "Led development teams to build scalable applications, integrating DevOps for CI/CD, cloud deployments, and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sanjanb",
    alt: "github",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/SanjanAcharya7",
    alt: "twitter",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanjan-bm/",
    alt: "linkedin",
  },
];
