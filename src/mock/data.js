import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Ezequiel Buruchaga',
  subtitle: 'Full-Stack Web Developer',
  cta: 'Saber más',
};

// ABOUT DATA
export const aboutData = {
  img: 'fo.png',
  paragraphOne:
    'Desarrollador Web en  JavaScript con ReactJs/NodeJs, apasionado por la programación, detallista y dedicado.',
  paragraphTwo:
    'Trabajé en proyectos variados, donde mi participación se orientó principalmente al Front-End, manteniendo siempre el eje en la funcionalidad.',
  paragraphThree:
    'Con rápida capacidad de aprendizaje, me intereso por proyectos desafiantes y nuevos conocimientos constantemente',
  resume: 'https://drive.google.com/file/d/1gyfVSnyE9tkovvUCBpxJa4RL6CfoKSau/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cadeteria&&cadete.png',
    title: 'APP - SERVICIO DE ENVÍOS A DOMICILIO',
    info:
      'Aplicación para empresas que utilizan el envío de paquetes a domicilio a través del servicio de cadeterías. La empresa sube los pedidos por día y son repartidos a las cadeterías que estan habilitadas. A su vez cada cadetería registra/habilita a sus cadetes para tomar las órdenes que cuentan con ubicación de entrega (map) y otros datos específicos.',
    info2: '',
    url:
      'https://www.youtube.com/watch?v=KsBnpz0c3xY&list=PLieyypxOTlSybH-5sF-BJTemANE4UBnbl&ab_channel=EzeBurru',
    repo: 'https://github.com/Maxezbu/Cruce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'E-booksPic.png',
    title: 'E-Books',
    info:
      'E-Commerce para la compra y venta de libros on-line. La aplicación permite ver una descripción de cada libro, su categoría, seleccionarlo y comprar uno o varios. Cuenta con la posibilidad de tener administradores que pueden eliminar usuarios, crear/editar categorías, crear/editar libros',
    info2: '',
    url: 'https://youtu.be/ZQMYWNQ3dBA',
    repo: 'https://github.com/Maxezbu/E-Books', // if no repo, the button will not show up
  },
  /* {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }, */
];

// CONTACT DATA
export const contactData = {
  cta: 'Podés encontrarme en LinkedIn o GitHub',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /*   {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ezequiel-buruchaga',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Maxezbu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
