// tldrData.js
const tldrItems = [
  /* 
  {
  date: "yyyy-month-day"
  }
  */
  {
    title: "The Cube",
    link: "https://nividhsingh.github.io/Cube/",
    type: "project",
    image: "img/cube.png",
    description:
      "Built a cube that uses a PID controller and flywheel to balance on its edge",
    date: "2024-12-12",
    favorite: 100,
    ascii_image: "ascii_art/cube.txt",
    ascii_image_length: 500,
    asciiLargeOrSmall: "small",
  },
  {
    title: "NASA SLI Rocket",
    link: "https://nividh.myportfolio.com/nasa-sli-rocket",
    type: "project",
    image: "img/NASA-SLI-Rocket.png",
    description:
      "I led a team to design, simulate, build, test, and successfully launch a rocket for the NASA SLI 2022-23 Challenge. Won the Payload Design Award. The rocket was about seven feet and went about 3,500 feet into the air.",
    date: "2023-05-04",
    favorite: 80,
  },
  {
    title: "Active Aerobrake System",
    link: "https://nividh.myportfolio.com/aerobrake-system",
    type: "project",
    image: "img/active-aerobrake.png",
    description:
      "I built an active aerobrake system that controlled the rocket’s ascent. The system actively predicts the rocket's apogee. If this is higher than the goal apogee, the system deploys three fins to increase the surface area of the rocket. This increases the drag, decreasing the projected apogee.",
    date: "2023-05-01",
    favorite: 85,
  },
  {
    title: "Hobby Hub",
    link: "https://torin-perkins.github.io/Hobby-Hub/",
    type: "project",
    image: "img/hobby-hub.png",
    description:
      "Built a mobile app using Xamarin and Google's Firebase Server to connect people based on their hobbies",
    date: "2022-04-01",
    favorite: 50,
    ascii_image: "ascii_art/hobby_hub.txt",
    ascii_image_length: 500,
    asciiLargeOrSmall: "small",
  },
  {
    title: "Eagle Project",
    link: "https://www.beautyofcars.com/nividh-singhs-eagle-project",
    type: "project",
    image: "img/eagle_project.JPG",
    description:
      "One of the biggest parts of my journey toward becoming an Eagle Scout is an Eagle Project. This involves leading a project to benefit a non-profit organization. For my Eagle Project, I built four benches for the Portland Chapter of the Audubon Society. ",
    date: "2022-08-18",
    favorite: 60,
    ascii_image: "ascii_art/eagle.txt",
    ascii_image_length: 766,
    asciiLargeOrSmall: "large",
  },
  {
    title: "Spring Launch at Palantir",
    link: "https://www.palantir.com/careers/students/launch/",
    type: "internship",
    image: "img/palantir.png",
    description: "Spring Launch Intern",
    date: "2025-03-16",
    favorite: 75,
    ascii_image: "ascii_art/palantir.txt",
    ascii_image_length: 428,
    asciiLargeOrSmall: "small",
  },
  {
    title: "Software Engineer at Pacer",
    link: "https://nividh.myportfolio.com/pacer",
    type: "internship",
    image: "img/pacer.png",
    description: "Part-Time Software Engineer",
    date: "2025-06-01",
    favorite: 87,
    ascii_image: "ascii_art/pacer.txt",
    ascii_image_length: 500,
    asciiLargeOrSmall: "large",
  },
  {
    title: "Software Intern at Mach Industries",
    link: "https://nividh.myportfolio.com/mach-industries",
    type: "internship",
    image: "img/mach.png",
    description: "Summer 2024 Computer Science Internship",
    date: "2024-08-01",
    favorite: 90,
    ascii_image: "ascii_art/mach.txt",
    ascii_image_length: 500,
    asciiLargeOrSmall: "large",
  },
  {
    title: "C Compiler From Scratch",
    link: "https://github.com/olincollege/rv32i_compiler",
    type: "project",
    image: "img/compiler.png",
    description:
      "Developed a C-to-x86 compiler from scratch that tokenizes, parses, and translates C code into corresponding assembly instructions using a custom lexer, parser, and code generator.",
    date: "2025-05-02",
    favorite: 99,
  },
  {
    title: "SQL Engine From Scratch Including Differential Privacy",
    link: "https://github.com/NividhSingh/privacy-preserving-db",
    type: "project",
    image: "img/database.png",
    description:
      "Built a SQL engine from scratch in Go, integrating differential privacy techniques to protect user data while supporting standard operations like CREATE, INSERT, and SELECT with function support and expression evaluation.",
    date: "2025-05-01",
    favorite: 90,
  },
];
