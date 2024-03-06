import html_svg from "./img/skills-svg/html5-original.svg";
import css_svg from "./img/skills-svg/css3-original.svg";
import javascript_svg from "./img/skills-svg/javascript-original.svg";
import react_svg from "./img/skills-svg/react-original.svg";
import sass_svg from "./img/skills-svg/sass-original.svg";
import tailwind_svg from "./img/skills-svg/tailwindcss-plain.svg";
import git_svg from "./img/skills-svg/git-original.svg";

import weekly_budget from "./img/project-images/Weekly-Budget.png";
import DocumentationJS from "./img/project-images/DocumentationJS.png";
import tesla_landinpage from "./img/project-images/Tesla Landingpage.png";
import Creditcard from "./img/project-images/Creditcard.png";

export const skills = [
    html_svg,
    css_svg,
    javascript_svg,
    react_svg,
    sass_svg,
    git_svg,
    tailwind_svg,
];

export const projects = [{
        name: "Documentation JS",
        image: DocumentationJS,
        url: "https://docsjs.netlify.app",
        description: `This is a Javascript documentation page 
      where you can find some of the most important 
      concepts about this beautiful programm language`,
    },
    {
        name: "Weekly budget",
        image: weekly_budget,
        url: "https://my-weekly-budget.netlify.app",
        description: `This app was designed to make a plan for a better managment of your money`
    },
    {
        name: "Tesla Landinpage",
        image: tesla_landinpage,
        url: "https://fake-tesla-landingpage.netlify.app",
        description: `This is a copy of the Tesla page`
    },
    {
        name: "Credicard",
        image: Creditcard,
        url: "https://creditcardinput.netlify.app",
        description: `This is a beatiful and interactive creditcard form`
    },
];