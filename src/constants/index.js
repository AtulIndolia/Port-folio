import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    cadence,
    bootsrap,
    java,
    python,
    sql,
    todoList,
    distanceMeasurement,
    loadForecasting
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name:"Bootstrap",
      icon:bootsrap
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"Python",
      icon:python,
    },
    {
      name:"Java",
      icon:java
    },
    {
      name:"My SQL",
      icon:sql
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company_name: "Cadence Design Systems",
      icon: cadence,
      iconBg: "#383E56",
      date: "Apr 2023 - Present",
      points: [
        "Developed Regression Webpage Automation Website.",
        "Utilized HTML , CSS, Bootstrap, JavaScript, React.js, Node.js ,Express.js and MongoDB to create a user friendly and efficient application",
        "Implemented automated regression testing, resulting in 50% reduction in testing time and improved accuracy.",
        "Developed RESTful APIs and integrated them with front- end components to create seamless user interactions. ",
        "Conducted unit testing and debugging to ensure smooth functioning and identify and resolve issues promptly",
        "Actively contributed to team meetings, brainstorming sessions, and project planning discussions."
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Load Forecasting",
      description:
        "Short-Term Load Forecasting Analyst skilled in Python-based predictive modeling, utilizing machine learning algorithms to optimize energy demand forecasting.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Jupyter",
          color: "pink-text-gradient",
        },

      ],
      image: loadForecasting,
      source_code_link: "https://github.com/AtulIndolia/load-forecasting-python",
    },
    {
      name: "Distance Measurement",
      description:
        "Developed a distance measuring device using Arduino and Ultrasonic sensor Module to accurately gauge distances. Used Arduino Board, Display Module, Breadboard, etc.",
      tags: [
        {
          name: "Arduino",
          color: "blue-text-gradient",
        },
        {
          name: "Ultrasonic Sensor",
          color: "green-text-gradient",
        },
        {
          name: "Display",
          color: "pink-text-gradient",
        },
      ],
      image: distanceMeasurement,
      source_code_link: "",
    },
    {
      name: "Todo List",
      description:
        "TaskEase: An intuitive and streamlined web-based todo list app that simplifies task management.Designed using React.js, HTML, CSS.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
      ],
      image: todoList,
      source_code_link: "https://github.com/AtulIndolia/to-do-list",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };