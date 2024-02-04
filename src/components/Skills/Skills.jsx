import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import '../Skills/Skills.css'
import { motion } from 'framer-motion'
import htmlLogo from '../../assets/htmlLogo.svg'
import cssLogo from '../../assets/cssLogo.svg'
import jsLogo from '../../assets/jsLogo.svg'
import tailwindLogo from '../../assets/tailwindLogo.svg'
import reactLogo from '../../assets/reactLogo.svg'
import gitLogo from '../../assets/gitLogo.svg'
import oopsLogo from '../../assets/oopsLogo.svg'
import canvaLogo from '../../assets/canvaLogo.png'
import sqlLogo from '../../assets/sqlLogo.svg'
import cppLogo from '../../assets/cppLogo.svg'
import pythonLogo from '../../assets/pythonLogo.svg'

const Skills = () => {
  const htmlScore = 90;
  const cssScore = 80;
  const jsScore = 70;
  const tailwindScore = 80;
  const reactScore = 70;
  const oopsScore = 70;
  const canvaScore = 80;
  const dbmsScore = 70;
  const cppScore = 70;
  const pythonScore = 65;
  const gitScore = 70;

  return (
    <motion.div
      className='flex flex-col justify-start items-center w-[100%] h-[100vh] py-[3vh] gap-y-[7vh] px-[1vw] bg-cover bg-no-repeat max-md:w-[100vw] max-md:h-[90vh] max-sm:mt-[6.9vh]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col justify-center items-center h-[7vh] w-fit my-[1vh]">
        <p className='headingSkills'>Skills</p>
        <div className='flex justify-center items-center'>
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
        </div>
      </div>

      <div className="flex justify-between items-center px-[1vw] w-[80vw] h-fit py-[1vh] max-md:flex-col max-md:p-0">
        <ul className='flex flex-col justify-start items-start h-[60vh] min-h-fit p-[2vw] w-[35vw] gap-y-[4vh] max-md:w-[90vw] max-md:justify-center max-md:items-center max-md:p-[1vw] max-md:h-fit'>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={htmlLogo} alt="html" className='h-[4.5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>HTML</p>
            </div>
            <ProgressBar score={htmlScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={cssLogo} alt="css" className='h-[4.5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>CSS</p>
            </div>
            <ProgressBar score={cssScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={jsLogo} alt="js" className='h-[4.5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>Java Script</p>
            </div>
            <ProgressBar score={jsScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={tailwindLogo} alt="tailwind" className='h-[5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>Tailwind</p>
            </div>
            <ProgressBar score={tailwindScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={reactLogo} alt="react" className='h-[6vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>React</p>
            </div>
            <ProgressBar score={reactScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={gitLogo} alt="github" className='h-[6vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>Git & Github</p>
            </div>
            <ProgressBar score={gitScore} />
          </li>
        </ul>

        <ul className='flex flex-col justify-start items-start h-[60vh] min-h-fit p-[2vw] w-[35vw] gap-y-[4vh] max-md:w-[90vw] max-md:justify-center max-md:items-center max-md:p-[0vw]'>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={oopsLogo} alt="oops" className='h-[4.5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>OOPs</p>
            </div>
            <ProgressBar score={oopsScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={canvaLogo} alt="canva" className='h-[5vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>Canva</p>
            </div>
            <ProgressBar score={canvaScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={sqlLogo} alt="sql" className='h-[5.3vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>DBMS</p>
            </div>
            <ProgressBar score={dbmsScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={cppLogo} alt="cpp" className='h-[5.3vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>C++</p>
            </div>
            <ProgressBar score={cppScore} />
          </li>
          <li className='flex w-[28vw] justify-between items-center gap-x-[2vw] max-md:w-[80vw] max-md:gap-x-[1vw]'>
            <div className='flex justify-around items-center gap-x-[0.7vw] max-md:gap-x-0'>
              <img src={pythonLogo} alt="python" className='h-[5.2vh]' />
              <p className='text-xl text-bold max-md:text-[1.2rem]'>Python</p>
            </div>
            <ProgressBar score={pythonScore} />
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Skills
