import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Seun Ogundipe | Frontend Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Seun Ogundipe',
  subtitle: 'I am a Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne:
    ' As a former financial analyst, i have always been good with numbers but i never felt passionate about having a long-term career in it. These past years have led to me really rethinking about my life goals and what it means to have a career doing something you love. I found out about coding from a mentor of mine who thought that it would be a good fit for me. The first day i decided to take his advise seriously was the moment i realised the beauty in creating something from scratch that you can call your own.',
  paragraphTwo:
    'Over the past year, i’ve studied books, courses and practiced everything i learn into becoming a better web developer. I find it very intriguing that with just  a little effort in learning technical things, you can achieve so much. For example, i created this portfolio by just learning Gatsby and how it works. I have also been able to create websites from scratch while adopting a mobile-first workflow, which undeniably made things a lot easier for me. This can be seen in my loop-studios and sunny-side landing pages.',
  paragraphThree:
    'I am very comfortable with the usual front-end technologies like SASS, Bootstrap and javascript. Currently, i am learning react in order to build a web application that i can be proud of showing to my peers and colleagues. As time goes on, i plan on delving into other ares of software development such as backend development, as i am intrigued by the use of node on the server side. This is my portfolio and i hope it leaves a good impression on you. Thank you and have a lovely day.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Freelance portfolio page',
    info: 'This is a freelance portfolio website that I built to learn bootstrap version 5',
    info2: 'Technologies used: Bootstrap, Javascript, Sass.',
    url: 'https://seun-works.github.io/Freelance-portfolio-landing-page/',
    repo: 'https://github.com/Seun-works/Freelance-portfolio-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Loopstudios Landing page',
    info: 'A landing page for a Virtual Reality company that specializes in making digital products. The site is built to be responsive to all devices.',
    info2: 'Technologies used: Sass, Javascript, Mobile-first workflow, CSS-grid, flexbox.',
    url: 'https://seun-works.github.io/Loopstudios-landing-page/',
    repo: 'https://github.com/Seun-works/Loopstudios-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Sunnyside Agency Landing page',
    info: 'A landing page for an agency that specializes in photography and graphic designing. The site is built to be responsive at all screen sizes.',
    info2: 'Technologies used: Sass, Javascript, Mobile-first workflow, CSS-grid, flexbox.',
    url: 'https://seun-works.github.io/Sunnyside-landing-page/',
    repo: 'https://github.com/Seun-works/Sunnyside-landing-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'An Order component',
    info: 'This is a basic order component i made in order to test my css design skills',
    info2: 'Technologies used: CSS, Flexbox, CSS grid.',
    url: 'https://seun-works.github.io/Order-summary-component/',
    repo: 'https://github.com/Seun-works/Order-summary-component', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' Call me: ',
  btn: 'Email me.',
  email: 'Sogundipe@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/seun-ogundipe/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Seun-works',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
