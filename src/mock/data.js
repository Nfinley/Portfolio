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
  name: 'Software Engineer and Musician',
  // subtitle: 'Software Engineer and Musician',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a passionate and driven software developer currently working in React, Javascript, Node.js, and cloud based architecture creating beautiful, accessible, and functional web applications.',
  paragraphTwo:
    'Currently, I work for a non profit Committee For Children managing an engineering team building and maintaining the infrastructure and user experience for our social emotional learning curriculum.',
  paragraphThree:
    'With a passion and background in music and copyright law, I keep music close as I am currently developing an application aimed at helping artists interact directly with their fans and gain new ones.',
  paragraphFour:
    'To stay busy, I run a dev consulting firm called Unfiltered Build working with creators and dreamers to build their next big thing.',
  resume:
    'https://res.cloudinary.com/thefinleycode/image/upload/v1630189574/Nigel_Finley_Resume_2021_xsmugj.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    btnTxt: '',
    id: nanoid(),
    img: 'secondstep.jpg',
    title: 'Committee For Children',
    info:
      'At Committee For Children our vision is "Safe children thriving in a peaceful world" and our north star goal is to "Positively transform the social-emotional well-being off 100 million chidren annually by 2028", currently, we reach over 10 million children',
    info2: 'Built with React, Next.js, Node, MSSQL and Azure cloud services',
    url: 'https://www.secondstep.org',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: 'Sign Up for Beta',
    id: nanoid(),
    img: 'tonebirds.jpg',
    title: 'Tone Birds',
    info:
      'ToneBirds is a platform connecting musicians to verified music fans for 90% less cost than traditional marketing channels',
    info2: 'Beta is out! Contact me at nigel@tonebirds.com if you would like to participate',
    info3: 'Built using React Native, GraphQL, AWS Amplify, and Expo',
    url: 'https://tonebirds.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'resonate.jpg',
    title: 'Resonate',
    info:
      'Resonate is a collaboration between myself and a designer to build an application that changes the way people find new music in a simple, elegant and efficient way',
    info2: 'Built using React, Graphql and AWS Amplify',
    url: 'https://resonatetogether.io',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'cardgiants.jpg',
    title: 'Card Giants',
    info:
      'Card Giants is an e-commerce site speciallizing in sales of sports cards and memorabilia',
    info2: 'Built using PHP, Wordpress and WooCommerce',
    url: 'https://cardgiants.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: '',
    id: nanoid(),
    img: 'finleycode.jpg',
    title: 'The Finley Code',
    info:
      'To document my thoughts on the intersection of code and music and everything in between, I maintain a blog called The Finley Code.',
    info2: 'Built using the Ghost blog platform and self-hosted on Digital Ocean',
    url: 'http://thefinleycode.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    btnTxt: 'Listen on Spotify',
    id: nanoid(),
    img: 'albums.jpg',
    title: 'Published Music',
    info:
      'Flyjack is a funk band I played organ and keys with in Austin, TX in the vein of New Mastersounds/Robert Walter/Skull Snaps',
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
