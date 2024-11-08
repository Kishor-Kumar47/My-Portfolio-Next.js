import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id:0,
        title: "Todo List",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
    {
        id:2,
        title: "Weather App",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
    {
        id:3,
        title: "Birthday Wishes",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
    {
        id:4,
        title: "Portfolio web",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
    {
        id:5,
        title: "E-commerce website",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
    {
        id:5,
        title: "GIAIC Website Clone",
        decs: "A Nextj & TypeScript based app for managing & orgranizing your tasks efficiently.",
        img:"/app-deve.jpg",
        tags: ["Nextjs" , "Node", "CSS" , "TypeScript"],

    },
];

const Project = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10px xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.title}
            title={el.title}
            desc={el.decs}
            img={el.img}
            tags={el.tags}
            
            />))}

        </div>
    </div>

  )
}

export default Project