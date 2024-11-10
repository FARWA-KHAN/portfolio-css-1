import React from "react"
import Heading from "./Heading";
import Card from "./Card";
import "../app/styles/project.css";

const data =[
    {
        id: 0,
        title: "Simple-Calculator",
        desc: "A simple calculator built with TypeScript, HTML, and CSS that performs basic arithmetic operations like addition, subtraction, multiplication, and division. This project features a clean interface and responsive design for ease of use.",
        img: "/project_02.png",
        tags: ["Html", "Css", "Typescript"]
    },
    {
      id:1,
      title: "Personal-Resume",
      desc:"A personal resume project built with TypeScript, HTML, and CSS that showcases skills, experience, education, and contact details in a clean, responsive design. Perfect for highlighting or offering a professional professional resume online.",
      img: "/project_01.png",
      tags: ["Html", "Css", "Typescript"]
    },
    {
      id:2,
      title: "Resume-builder",
      desc:"A resume builder built with HTML, CSS, and TypeScript that allows users to create and edit a personalized resume. The generator provides easy-to-fill sections, and outputs a polished, downloadable resume.",
      img: "/project_03.png",
      tags: ["Html", "Css", "Typescript"]
    },
    {
      id:3,
      title: "Cake-Website",
      desc:" A cake website with HTML and CSS could feature a stunning homepage with cake images, a clean navigation bar, and sections like Menu, Gallery, About Us, and Contact. The site showcases cake categories, a gallery of designs, customer testimonials, and a contact form for easy ordering.",
      img: "/project_04.png",
      tags: ["Html", "Css",]
    },
   
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="Projects"/>
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  );
};

export default Projects;