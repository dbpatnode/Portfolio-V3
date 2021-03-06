let resumeData = {
  name: 'Daniel Patnode',
  role: 'Frontend Engineer',
  location: 'Seattle, WA',
  linkedinId: 'daniel-patnode',
  roleDescription:
    'A seattle based creative with a passion for solving complex problems who thrives in ambiguous environments. I love working in all parts of development, learning new technologies, diving into documentation and generally expanding my knowledge.',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-patnode/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/dbpatnode',
      className: 'fa fa-github',
    },

    {
      name: 'medium',
      url: 'https://danielpatnode.medium.com/',
      className: 'fa fa-medium',
    },
  ],
  aboutme:
    'Software engineer with a prior background in scientific glass blowing and agriculture and a graduate of Washington State University. A continuous learner who loves to dive into new problems head on. Contributer to a multitude of projects, both as a lead and team member. Tinkerer with a history of working with a wide variety of clientele ranging from  restaurant groups to utilities companies. In my spare time you can find me coding, camping, outdoors-ing, practicing Brazilian jiu-jitsu, exercising, petting dogs and hunting for the perfect cheeseburger.',
  address: 'Seattle, WA',
  website: 'https://github.com/dbpatnode',
  education: [
    {
      UniversityName: 'Washington State University',
      UniversityUrl: 'https://wsu.edu/',
      specialization: 'Bachelor of Science in Agricultural and Food Sciences',
      MonthOfPassing: 'June',
      YearOfPassing: '2014',
      Achievements: 'Founding member of the Organic Agriculture club.',
    },
    {
      UniversityName: 'Flatiron School',
      UniversityUrl: 'https://flatironschool.com/',
      specialization: 'Full Stack Web Development',
      MonthOfPassing: 'November',
      YearOfPassing: '2020',
      Achievements: 'Ruby on Rails, and JavaScript Based Programming',
    },
  ],
  work: [
    {
      CompanyName: 'Transom Design',
      CompanyUrl: 'https://transom.design/',
      specialization: 'Junior Software Engineer',
      MonthOfLeaving: 'November',
      YearOfLeaving: '2021',
      Achievements: [
        {
          achievment:
            'Built 4 full-featured, performant, pixel perfect, cross-browser, accessible sites using Javascript, React, PHP, CSS, SCSS, and Tailwind after consultation with Sales team to identify areas of client site improvement',
        },
        {
          achievment:
            'Created a CSS library to decrease CSS build time and deliver projects to clients ~15% earlier than projected deadline',
        },
        {
          achievment:
            'Developed code snippets that allowed clients to autonomously edit their site content, which decreased future development time ',
        },
      ],
    },
    {
      CompanyName: 'Unearth Labs',
      CompanyUrl: 'https://unearthlabs.com/',
      specialization: 'Front End Engineer Intern',
      MonthOfLeaving: 'May',
      YearOfLeaving: '2021',
      Achievements: [
        {
          achievment:
            'Built and tested a cohesive data management tool using MithrilJS, SCSS, ChaiJS, and RPC protocol that supported the customer service team',
        },
        {
          achievment:
            'Improved load time across platforms by 95.8% with requests to API taking < 5 seconds to complete',
        },
      ],
    },
    {
      CompanyName: 'Quave CB',
      CompanyUrl: 'https://quavecb.com/',
      specialization: 'Scientific Glass Blower',
      MonthOfLeaving: 'June',
      YearOfLeaving: '2020',
      Achievements: [
        {
          achievment:
            'Reduced expenditures on external lathe technicians while performing troubleshooting on ill-working lathe equipment through tactful techniques.',
        },
        {
          achievment:
            'Streamlined on-boarding process, enhanced productivity of training programs, and ensured highest level of cleanliness for staff members while aligning with upper management.',
        },
        {
          achievment:
            'Enhanced customer satisfaction, improved quality and process, and decreased material loss by 30% with implementation of raw material.',
        },
      ],
    },
  ],
  skillsDescription: 'Languages:',
  skills: [
    {
      skillname: 'CSS SCSS SASS',
    },
    {
      skillname: 'Reactjs',
    },
    {
      skillname: 'HTML5',
    },
    {
      skillname: 'Javascript',
    },
    {
      skillname: 'JSON',
    },
    {
      skillname: 'Ruby',
    },
    {
      skillname: 'Ruby-on-Rails',
    },
    {
      skillname: 'Git',
    },
    {
      skillname: 'SQL',
    },
    {
      skillname: 'firebase',
    },
    {
      skillname: 'JWT-Authentication',
    },
  ],
  portfolio: [
    {
      name: 'AI Machine',
      description: 'Interactive AI application',
      imgUrl: 'openAI.png',
      githubUrl: 'https://github.com/dbpatnode/OpenAIShopify',
      linkUrl: 'https://openaishopify.netlify.app/',
      techStack: ['html', 'sass', 'react', 'netlify', 'reactRouter', 'openAI'],
    },
    {
      name: 'Robot Search',
      description:
        'Calls to an external API of robot data, where robots can be searched based on name and tags',
      imgUrl: 'robot.png',
      // githubUrl: "https://github.com/dbpatnode/OpenAIShopify",
      linkUrl: 'https://zyncrobots.netlify.app/',
      techStack: ['html', 'sass', 'react', 'netlify'],
    },
    {
      name: 'GS Burgers',
      description:
        'Responsive mock up of menus and landing page for Great State Burgers.',
      imgUrl: 'GSB.jpg',
      githubUrl: 'https://github.com/dbpatnode/real-transom-takehome',
      linkUrl: 'https://transom-takehome.web.app/',
      techStack: ['html', 'sass', 'react', 'reactRouter', 'firebase'],
    },
    {
      name: 'Portfolio V1',
      description:
        'First iteration of my portfolio site showcasing my work as a software developer.',
      imgUrl: 'setup.png',
      // "githubUrl":"",
      linkUrl: 'https://danielpatnode.netlify.app/',
      techStack: ['html', 'css', 'javaScript', 'sass', 'netlify'],
    },
    {
      name: 'BrewMaps',
      description:
        'Brewery mapping application allows users to view breweries across the United States, while keeping an active log of their experiences.',
      imgUrl: 'brewmaps.png',
      githubUrl: 'https://github.com/dbpatnode/brewmaps-frontend',
      // "linkUrl":
      youtube: 'https://www.youtube.com/watch?v=B3SEAptSnTM&t=3s',
      techStack: ['react', 'ruby', 'mapbox', 'openBrewery'],
    },
    {
      name: 'FavFest',
      description:
        'Festival journaling application that gives users the ability to view festivals and musical artists, while keeping a notes on their experiences.',
      imgUrl: 'favfest.png',
      githubUrl: 'https://github.com/dbpatnode/favfest',
      linkUrl: 'https://favfest.herokuapp.com/',
      techStack: ['html', 'sass', 'ruby', 'postgresql', 'heroku'],
    },
    {
      name: 'Oasis',
      description:
        'Access point application that allows users to find lesser known rooftop parks and destinations.',
      imgUrl: 'oasis.png',
      githubUrl: 'https://github.com/tshlos/oasis',
      youtube: 'https://www.youtube.com/watch?v=NBWNe6LE7xw&t=1s',
      techStack: ['react', 'reactRouter', 'ruby', 'googleMaps', 'sqlite'],
    },
    {
      name: 'OHOHOH',
      description:
        'Pet adoption application with both admin and user capabilities.',
      imgUrl: 'OHOHOH.jpg',
      githubUrl: 'https://github.com/cortezd334/OHOHOH',
      youtube: 'https://www.youtube.com/watch?v=iwHu_6Okfxo&t=143s',
      techStack: ['html', 'css', 'ruby', 'sqlite', 'javaScript'],
    },
  ],
};

export default resumeData;
