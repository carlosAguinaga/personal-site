const projects = [
  {
    name: 'Soccer Manager',
    description: 'Soccer Manager es un administrador de equipos de fútbol desarrollado con React y Redux.',
    img: './images/soccer.png',
    urlGit:'https://github.com/carlosAguinaga/soccer-manager',
    urlProject:'https://carlosaguinaga.github.io/soccer-manager',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js', 'react', 'redux', 'css', 'sass'
    ]
  },
  {
    name: 'Digital Apps',
    description: 'Digital Apps es una página institucional demo muy ligera y minimalista.',
    img: './images/digital.png',
    urlGit:'https://github.com/carlosAguinaga/Layout-with-sass',
    urlProject:'https://carlosaguinaga.github.io/Layout-with-sass',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'sass', 'js'
    ]
  },
  {
    name: 'Petsgram',
    description: 'Petsgram es un clon de Instagram para nuestras mascotas',
    img: './images/pets.png',
    urlGit:'https://github.com/carlosAguinaga/pets-two',
    urlProject:'https://pets-two.vercel.app',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'react', 'css'
    ]
  },
  {
    name: 'Tasks To-Do',
    description: 'Tasks To-Do es una full-stack app que nos sirve para organizar mejor nuestros pendientes, este proyecto fue desarrollado con tecnologías de Javascript como NodeJS y React',
    img: './images/tasks.png',
    urlGit:'https://github.com/carlosAguinaga/react-to-do',
    urlProject:'https://react-to-do-bice.vercel.app',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'react', 'nodeJS', 'mongoDB', 'bootstrap'
    ]
  },
  {
    name: 'Cientifico SPA',
    description: 'Científico app es un SPA desarrollado con Javascript puro, sin la intervención de ninguna librería fronted.',
    img: './images/cientifico.png',
    urlGit:'https://github.com/carlosAguinaga/cientifico-SPA',
    urlProject:'https://carlosaguinaga.github.io/cientifico-SPA',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js', 'webpack'
    ]
  },
  {
    name: 'Personal site',
    description: 'Sitio web personal enfocado al portafolio profesional.',
    img: './images/personal.png',
    urlGit:'https://github.com/carlosAguinaga/personal-site',
    urlProject:'https://carlosaguinaga.github.io/personal-site',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js', 'react', 'material ui'
    ]
  },
  {
    name: 'Heroes',
    description: 'Este proyecto es una sencilla SPA que nos muestra las características de algunos superhéroes de Marvel y DC comics.',
    img: './images/heroes.png',
    urlGit:'https://github.com/carlosAguinaga/heroes-spa-angular',
    urlProject:'https://carlosaguinaga.github.io/heroes-spa-angular/heroes',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js', 'angular', 'bootstrap'
    ]
  },
  {
    name: 'Gif Expert App',
    description: 'Gift Expert es un buscador de gifs que hace uso del api de GIPHY para obtener los gifs de la categoría seleccionada.',
    img: './images/gifexpert.png',
    urlGit:'https://github.com/carlosAguinaga/react-gifexpertapp',
    urlProject:'https://carlosaguinaga.github.io/react-gifexpertapp',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js', 'react'
    ]
  },
  {
    name: 'Batatacoin',
    description: 'Batatacoin es el landing page de una casa de cambios de monedas virtuales, construida bajo el principio mobile first y diseño responsivo.',
    img: './images/batata.png',
    urlGit:'https://github.com/carlosAguinaga/batata-bit-layout',
    urlProject:'https://carlosaguinaga.github.io/batata-bit-layout',
    categoryName: 'web',
    categoryId: 0,
    technologies: [
      'html', 'css', 'js'
    ]
  },
  {
    name: 'Ejercicios Gym',
    description: 'App de ejercicios para la plataforma android con mas de 300 000 descargas.',
    img: './images/gym.png',
    urlGit: null,
    urlProject:'https://play.google.com/store/apps/details?id=com.exercises.projectgym',
    categoryName: 'mobile',
    categoryId: 1,
    technologies: [
      'android', 'java', 'illustrator'
    ]
  },
  {
    name: 'React Native App',
    description: 'Esta app desarrollada en React Native implementa un sistema de login utilizando firebase, en donde podrás administrar tus contactos.',
    img: './images/native.png',
    urlGit:'https://github.com/carlosAguinaga/react-native-firebase',
    urlProject:'https://drive.google.com/file/d/1dzXTVfqnYLC_mkW-0ORooh1cjPoGPRWq/view?usp=sharing',
    categoryName: 'mobile',
    categoryId: 1,
    technologies: [
      'js', 'react native', 'firebase', 'expo'
    ]
  },
  {
    name: 'Digital Apps',
    description: 'Cuenta personal de android developer, con cientos de miles de descargas y calificación satisfactoria.',
    img: './images/digitalapps.png',
    urlGit: null,
    urlProject:'https://play.google.com/store/apps/developer?id=Digitalapp',
    categoryName: 'mobile',
    categoryId: 1,
    technologies: [
      'android', 'java', 'illustrator'
    ]
  },
  {
    name: 'Travel Budge',
    description: 'Diseño de app de viajes a partir de un presupuesto asignado.',
    img: './images/travel.png',
    urlGit:'https://www.figma.com/file/4qaApwUVSfXi1SfDaqjryq/travel-budge?node-id=0%3A1',
    urlProject:'https://www.figma.com/proto/4qaApwUVSfXi1SfDaqjryq/travel-budge?node-id=1%3A18&viewport=415%2C190%2C0.13862058520317078&scaling=scale-down',
    categoryName: 'ui',
    categoryId: 2,
    technologies: [
      'figma'
    ]
  },
  {
    name: 'Personal site',
    description: 'Diseño de la UI de esta web.',
    img: './images/personal-figma.png',
    urlGit: null,
    urlProject:'https://www.figma.com/file/KDkD2GRtAwlqPeAV4eHD2H/Personal-Site?node-id=0%3A1',
    categoryName: 'ui',
    categoryId: 2,
    technologies: [
      'figma'
    ]
  },
]

export default projects;