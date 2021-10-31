export const levels = {
  advanced: { title: "Advanced", color: "#6E4BE2" },
  intermediate: { title: "Intermediate", color: "#fcd80e" },
  beginner: { title: "Played Around!", color: "#45D282" },
};

export const skills = [
  {
    title: "HTML",
    icon: null,
    level: levels.advanced,
  },
  {
    title: "CSS",
    tools: [
      { title: "Bootstrap", icon: null, level: levels.intermediate },
      { title: "SASS/SCSS", icon: null, level: levels.intermediate },
      { title: "Tailwind", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "JavaScript",
    tools: [
      { title: "JQuery", icon: null, level: levels.intermediate },
      { title: "Three.js", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "React JS",
    tools: [
      { title: "Redux", icon: null, level: levels.intermediate },
      { title: "Styled Components", icon: null, level: levels.intermediate },
      { title: "MUI", icon: null, level: levels.intermediate },
      { title: "Gatsby", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "Node JS",
    tools: [
      { title: "Express", icon: null, level: levels.intermediate },
      { title: "Socket.io", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.intermediate,
  },
  {
    title: "Mongo DB",
    tools: [{ title: "Mongoose", icon: null, level: levels.intermediate }],
    icon: null,
    level: levels.intermediate,
  },
  {
    title: "SQL",
    tools: [
      { title: "MySQL", icon: null, level: levels.intermediate },
      { title: "PhpMyAdmin", icon: null, level: levels.intermediate },
      { title: "Heidi SQL", icon: null, level: levels.intermediate },
    ],
    icon: null,
    level: levels.intermediate,
  },
  { title: "Firebase", icon: null, level: levels.beginner },
  {
    title: "PHP",
    tools: [{ title: "Laravel", icon: null, level: levels.beginner }],
    icon: null,
    level: levels.beginner,
  },
];
