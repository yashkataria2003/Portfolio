import React from 'react';
import '../Projects/Projects.css';

import ImageGenerator from '../../assets/ImageGenerator.png'
import KanbanBoard from '../../assets/KanbanBoard.png'
import ModernAkhbar from '../../assets/ModernAkhbar.png'
import Mosam from '../../assets/Mosam.png'
import LMS from '../../assets/LMS.png'
import Medway from '../../assets/Medway.png'
import ModernRadio from '../../assets/ModernRadio.png'
import Quiz from '../../assets/Quiz.png'
import Card from '../Card/Card';

import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      className='flex flex-col justify-center items-center min-h-max w-[100%] gap-y-[7vh] py-[3vh] px-[2vw] projectMainContainer bg-BackgroundSvg4 bg-cover bg-no-repeat max-md:w-[100vw] max-md:mt-[10vh] max-sm:mt-[6.9vh]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col justify-center items-center h-[7vh] w-fit my-[1vh]">
        <p className='headingProjects'>Projects</p>
        <div className='flex justify-center items-center'>
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
        </div>
      </div>

      <div className='flex w-[70%] px-[1vw] flex-wrap max-sm:w-[95vw]'>
        <p className='text-[1.3rem] font-bolder backdrop-blur-sm p-2 max-sm:p-0 max-sm:text-[1.1rem] max-[375px]:text-[1rem]'>These are the web development projects I prepared during my graduation. I'm still working on a few projects, enhancing my skills every day</p>
      </div>

      <div className="grid grid-cols-3 gap-x-[3vw] gap-y-[6vh] max-lg:grid-cols-2 max-md:grid-cols-1">
        <Card image={ImageGenerator} topic="AI Image Generator" date="December 2003" sourceCode="https://github.com/yashkataria2003/DALL-E-2.0" tech="MERN, Tailwind, Cloudinary, OpenAI API, Filebase"/>
        <Card image={KanbanBoard} topic="Kanban Board" date="November 2003" sourceCode="https://github.com/yashkataria2003/Kanban-Board" tech="React, Redux, Company's API, CSS"/>
        <Card image={Mosam} topic="Weather Website" date="November 2003" sourceCode="https://github.com/yashkataria2003/Mosam-Update" deployement="https://mosamupdate.netlify.app/" tech="React, Weather API, Tailwind CSS, Canva"/>
        <Card image={ModernAkhbar} topic="News Website" date="September 2003" sourceCode="https://github.com/yashkataria2003/Modern-Akhbar" tech="React, News API, Tailwind CSS"/>
        <Card image={LMS} topic="Library Management System" date="August 2023" sourceCode="https://github.com/yashkataria2003/Library-Management-System" tech="Mongo DB, Express JS, Node Js, React Js"/>
        <Card image={Medway} topic="Hospital UI" date="Novermber 2022" sourceCode="https://github.com/yashkataria2003/MedWay" deployement="https://yashkataria2003.github.io/MedWay/" tech="Basic HTML and CSS, Canva"/>
        <Card image={ModernRadio} topic="Music Website" date="July 2022" sourceCode="https://github.com/yashkataria2003/Modern-Radio" deployement="https://yashkataria2003.github.io/Modern-Radio/" tech="Basic HTML and CSS, Canva, JavaScript"/>
        <Card image={Quiz} topic="Quiz Website" date="June 2022" sourceCode="https://github.com/yashkataria2003/Quiz-Time" deployement="https://yashkataria2003.github.io/Quiz-Time/" tech="Basic HTML and CSS, Canva, JavaScript"/>
      </div>
    </motion.div>
  )
}

export default Projects
