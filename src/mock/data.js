import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nigel Finley Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
  image:
    'https://res.cloudinary.com/thefinleycode/image/upload/v1614479434/vinyl_background_y0zudr.png',
};

// HERO DATA
export const heroData = {
  title: 'Nigel Finley',
  name: 'Software Engineer. Musician. Podcast Host.',
  // subtitle: 'Software Engineer and Musician',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a passionate and driven software developer with a proven track record of technical leadership,  product delivery, and strategic expertise with a focus on delighting users through beautiful and accessible web applications.',
  paragraphTwo:
    'Currently, I work for a non profit Committee For Children as a principal engineer. I lead technical strategy across three engineering teams to deliver high quality features and user experience for our social emotional learning curriculum.',
  paragraphThree:
    'To stay busy, I run a dev consulting firm called Unfiltered Build working with creators and dreamers to build their next big thing.',
  paragraphFour:
    ' Additionally, I am the co-founder of Get SPACE, a developer feedback platform that makes collecting qualitative metrics a breeze. I am also host of the podcast Building With People For People that focuses on the human aspect of software.',
  resume:
    'https://res.cloudinary.com/thefinleycode/image/upload/v1695741628/Nigel_Finley_Resume_2023_ipydnd.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    btnTxt: 'Listen Now',
    id: nanoid(),
    img: 'podcast_banner.png',
    title: 'Building With People For People: The Unfiltered Build Podcast',
    info: 'As the host of "Building With People For People" podcast, every month I am joined by guests from all reaches of the software world to discuss their unique journeys, why we build software, discussions on a specific software related topic, and we examine problems they are solving through the products they are building',
    info2: 'Built with Hugo and AWS Amplify',
    url: 'https://podcast.unfilteredbuild.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'secondstep.jpg',
    title: 'Committee For Children',
    info: 'At Committee For Children our vision is "Safe children thriving in a peaceful world" and our north star goal is to "Positively transform the social-emotional well-being off 100 million chidren annually by 2028", currently, we reach over 10 million children',
    info2: 'Built with React, Next.js, Node, MSSQL and Azure cloud services',
    url: 'https://www.secondstep.org',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: 'Explore Now',
    id: nanoid(),
    img: 'get_space.png',
    title: 'Get SPACE',
    info: 'At Get SPACE we want your engineering team to be happy, productive and get the most out of their jobs. Our feedback platform makes it easy to capture qualitative metrics in real-time and trend this data overtime to help you achieve just that',
    info2: 'Built with Tailwind, HTMX, Python and AWS',
    url: 'https://www.getspace.dev',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'cardgiants.jpg',
    title: 'Card Giants',
    info: 'Card Giants is an e-commerce site speciallizing in sales of sports cards and memorabilia',
    info2: 'Built using PHP, Wordpress and WooCommerce',
    url: 'https://cardgiants.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: 'Experiment with Beta',
    id: nanoid(),
    img: 'tonebirds.jpg',
    title: 'Tone Birds',
    info: 'ToneBirds is a platform connecting musicians to verified music fans for 90% less cost than traditional marketing channels',
    info2: 'This project is no longer being developed, but feel free to visit our site',
    info3: 'Built using React Native, GraphQL, Typescript, AWS Amplify, and Expo',
    url: 'https://beta.tonebirds.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'resonate.jpg',
    title: 'Resonate',
    info: 'Resonate is a collaboration between myself and a designer to build an application that changes the way people find new music in a simple, elegant and efficient way',
    info2:
      'This project is not currently being developed, but one day we hope to bring it to life. Visit our landing page for more info',
    info3: 'Built using React, Graphql and AWS Amplify',
    url: 'https://resonatetogether.io',
    repo: '', // if no repo, the button will not show up
  },

  // {
  //   btnTxt: '',
  //   id: nanoid(),
  //   img: 'finleycode.jpg',
  //   title: 'The Finley Code',
  //   info:
  //     'To document my thoughts on the intersection of code and music and everything in between, I maintain a blog called The Finley Code.',
  //   info2: 'Built using the Ghost blog platform and self-hosted on Digital Ocean',
  //   url: 'http://thefinleycode.com',
  //   repo: '', // if no repo, the button will not show up
  // },
  {
    btnTxt: 'Listen on Spotify',
    id: nanoid(),
    img: 'albums.jpg',
    title: 'Published Music',
    info: 'Flyjack is a funk band I played organ and keys with in Austin, TX in the vein of New Mastersounds/Robert Walter/Skull Snaps',
    info2:
      'Roman Holiday is a rock band I played synth/piano/organ with based out of Tacoma, WA in the vein of Kings of Leon/Killers',
    info3:
      'Lucy Sings is a collaboration between myself and Lucy horton and sounds like Regina Spektor',
    url: 'https://open.spotify.com/playlist/2Wqqb9YP2HfqjTe5eVHZJt?si=7nb9rPPzTZuft4SlpkozqA',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to talk code, music or hire me?',
  btn: 'Email Me',
  email: 'nigel@unfilteredbuild.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nfinleymusic',
    },
    // {
    //   id: nanoid(),
    //   name: 'unfilteredbuild',
    //   url: 'https://unfileredbuild.com',
    //   img: 'src/images/unfilteredbuild.png'
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nigelfinley/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Nfinley/',
    },
  ],
};
