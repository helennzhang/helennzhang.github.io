
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Helen Zhang",
  title: "Hi, I'm Helen",
  subTitle: emoji("I am a senior at Vanderbilt double majoring in Computer Science and Mathematics. \
  I have experience in using Python and its various libraries for data analytics. I\
  also enjoy building Web applications with JavaScript / Reactjs / Nodejs."),
  resumeLink: "https://drive.google.com/file/d/1OIR_mohRwfzMmIeMFWiN44-CcteePeCj/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/helennzhang",
  linkedin: "https://www.linkedin.com/in/helenezhang/",
  gmail: "helenzhang2021@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "Skills",

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Vanderbilt University",
      logo: require("./assets/images/vanderbiltLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science and Mathematics",
      duration: "August 2017 - May 2021",
      descBullets: [
        "Teaching Assistant and Grader for Intro to Programming in Python (Spring 2020) and Discrete Structures (Fall 2020)",
        "Board member of the Philippine Intercultural Student Organization (PISO) and Vanderbilt Asian Pre-Professional Society (VAPS)"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "95%"
    },
    {
      Stack: "Java",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "React / Node / JavaScript",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker",
      progressPercentage: "40%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer Intern (Incoming)",
      company: "Robinhood",
      companylogo: require("./assets/images/robinhoodLogo.png"),
      date: "January 2021 – May 2021",
      desc: "I will be completing a 4 month Software Engineering Co-op at Robinhood during my final semester at Vanderbilt"
    },
    {
      role: "Software Engineer Intern",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.gif"),
      date: "May 2020 – August 2020",
      desc: "Interned on the Core Business: Delivery Economics team, which oversees 70% of total ad revenue for Facebook",
      descBullets: [
        "Built a Python library that aids with data preparation and visualization using Pandas and Matplotlib",
        "The library assists engineers in daily analysis of ad delivery experiments, significantly eliminating time spent preparing data for those experiments"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Principal Financial Group",
      companylogo: require("./assets/images/principal.jpg"),
      date: "May 2019 – August 2019",
      desc: "Member of the CSS Enterprise Documents team, which is responsible for working with all internal documents at Principal",
      descBullets: [
        "Developed a web app using Angular and Java Spring to automate the insertion of documents into the document item registry",
        "Won 3rd place of 15 teams at Intern Hackathon. Wrote API for a calendar app hosted on GCP using Flask, JavaScript and Google Maps API"
      ]
    },
  ]
};


const projectSection = {

  title: "Projects",
  subtitle: "Some cool projects I've worked on!",

  projectCards: [
    {
      title: "Poll Party (Technica 2020)",
      subtitle: "Winner: Google -- Best Use of Google Cloud",
      description: "Web app that encourages voters from underrepresented groups to vote by connecting them with other groups of voters who feel unsafe going to the polls alone",
      footerLink: [
        { name: "Devpost", url: "https://devpost.com/software/poll-party" },
        { name: "Github Repo", url: "https://github.com/helennzhang/PollParty" }
      ]
    },
    {
      title: "Janet (VandyHacks 2020)",
      subtitle: "Winner: Vanguard – Best Financial Literacy Hack",
      description: "Web app with personalized financial literacy courses based on credit score ranges.",
      footerLink: [
        { name: "Devpost", url: "https://devpost.com/software/janet" },
        { name: "Github Repo", url: "https://github.com/theedwinyu/Janet" },
      ]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "I should probbaly start blogging",

  blogs: [
    {
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ]
};


const contactInfo = {
  title: emoji("Contact Me "),
  subtitle: "Send me a message!",
  email_address: "helenzhang2021@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, projectSection, blogSection, contactInfo };
