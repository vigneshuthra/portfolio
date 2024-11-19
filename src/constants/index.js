import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import projectgallery2_1 from "../assets/projects/project2-1.png";
import projectgallery2_2 from "../assets/projects/project2-2.png";
import projectgallery1_1 from "../assets/projects/project1_1.png";
import projectgallery1_2 from "../assets/projects/project1_2.mp4";
import projectgallery3_1 from "../assets/projects/project3_1.png";
import projectgallery3_2 from "../assets/projects/project3_2.png";
import projectgallery3_3 from "../assets/projects/project3_3.mp4";
import projectgallery4_1 from "../assets/projects/project4_1.png";



export const HERO_CONTENT = `I’m a passionate web designer and front-end developer with a keen eye for detail and a love for creating seamless, engaging user experiences. With proficiency in a wide range of design and development tools, I specialize in turning ideas into intuitive, visually appealing websites. I approach challenges with creativity and problem-solving skills, always striving for innovative solutions.<br/> I’m eager to collaborate on exciting projects and open to full-time opportunities where I can contribute my expertise, grow alongside talented teams, and bring visions to life. Let’s create something extraordinary together!
`;

export const ABOUT_TEXT = `<p>I’m a web designer and front-end developer with a deep passion for creating innovative and visually appealing digital solutions. With a Master’s in Electrical and Computer Engineering from ISEP and hands-on experience across research, development, and design, I specialize in transforming ideas into functional, high-performance web platforms.</p><br/>

<p>My career has spanned diverse roles, from improving annotation tools in academic research to developing cutting-edge gamified platforms and seamless user interfaces for casino and sports betting websites. Proficient in a wide range of tools and technologies, including ReactJS, AngularJS, NextJS, TailwindCSS, and Figma, I excel at optimizing performance, enhancing user experience, and delivering scalable, responsive designs.</p><br/>

<p>As a problem solver and creative thinker, I enjoy tackling challenges head-on, blending aesthetics with technical precision to deliver solutions that stand out. I’m also a natural communicator and collaborator, bringing strong leadership and project management skills to every team I work with.</p><br/>

<p>Driven by a curiosity for innovation and a love for design, I’m committed to building digital experiences that are not only functional but also delightful to use. Whether working independently or within a team, I strive to make a lasting impact through my work.</p>`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Hi-tech Solutions.",
    description: `My role was to construct a seamless, user-friendly interface for a bustling casino and sports betting platform using React.js, Next.js and Typescript. Implemented RESTful APIs and actively enhanced user experience by employing latest libraries and frameworks. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "ReactJs",
      "Nextjs",
      "Typescript",
      "Tailwind Css",
      "Atlassian",
      "Git",
      "Redux",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Capgemini",
    description: `Designed and developed user interfaces for web applications using Angular.js. Worked as a part of the Front End Team (Angular JS) to construct a gamified platform with the best user-friendly interface. The main objective was to create a platform that is stable and optimized to achieve the best overall performance similar to Habitica. Implemented responsive designs and optimized frontend performance.`,
    technologies: [
      "HTML",
      "CSS",
      "Angular.js",
      "Java",
      "Postman",
      "Swagger",
      "Atlassian",
      "Git",
    ],
  },
  {
    year: "2021 - 2022",
    role: " Associate developer",
    company: "Innowave",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "REACT", "C#", "StoryBook", "Git"],
  },
  {
    year: "2020 - 2021",
    role: " Junior Research Scholar",
    company: "EU Project (AI-Annotation Tool)",
    description: `Contributed to the development of web application to test the accuracy of the annotation tool using JavaScript, HTML, and PHP. Developed a gamified application using gamification techniques to encourage users to engage more with the tool. Worked closely with teams in Portugal and France to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS", "PHP", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "iGaming Website",
    image: project1,
    description:
      "A fully functional and Graphical iGaming website with features like responsiveness, BookaDemo and contact Form ",
    technologies: ["HTML", "Tailwind Css", "React", "Next.js", "Email.js"],
    gallery: [projectgallery1_1, projectgallery1_2],
  },
  {
    title: "Casino and SportsBetting Platform",
    image: project2,
    description:
      "An online platform for casino and sportsbetting, with features such as withdrawals, deposits, bets, and  iGames.",
    technologies: ["HTML", "React", "Next.js", "TailwindCss", "Redux"],
    gallery: [projectgallery2_1, projectgallery2_2],
  },
  {
    title: "BreadShop Website",
    image: project3,
    description:
      "A beautifully designed website for a bread shop, highlighting handcrafted daily breads, showcasing the variety of artisanal loaves, and providing an inviting platform for customers to explore products, learn about the baking process, and get in touch.",
    technologies: ["HTML", "TailwindCSS", "React", "Next.js", "Email.js"],
    gallery: [projectgallery3_1, projectgallery3_2,projectgallery3_3],
  },
  {
    title: "E-commerce Website",
    image: project4,
    description:
      "Built a fast, responsive eCommerce site using Next.js for SEO and performance, Tailwind CSS for custom, mobile-first designs, and Wix Headless CMS for seamless content management. Integrated dynamic product listings and a user-friendly experience, making it easy to scale and manage products.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "TailwindCss",
      "Wix",
      "CMS",
    ],
    gallery: [projectgallery4_1],
  },
];

export const CONTACT = {
  phoneNo: "+351 937 108 283 ",
  email: "vigneshuthra@gmail.com",
};
