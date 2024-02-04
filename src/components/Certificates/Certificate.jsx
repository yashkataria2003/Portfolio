import React from 'react'
import Python_C from '../../assets/Python_C.png'
import Python_Kaggle_C from '../../assets/Python_Kaggle_C.png'
import MERN_C from '../../assets/MERN_C.png'
import JS_C from '../../assets/JS_C.jpg'
import '../Certificates/Certificates.css'
import { motion } from 'framer-motion'


const Certificate = () => {
  return (
    <motion.div
      className='flex flex-col justify-start items-center w-[100%] min-h-max gap-y-[7vh] px-[1vw] py-[2vh] bg-BackgroundSvg2 bg-cover bg-no-repeat max-md:w-[100vw] max-md:mt-[10vh] max-sm:mt-[6.9vh]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col justify-center items-center h-[7vh] w-fit my-[1vh]">
        <p className='headingCertificates'>Certificates</p>
        <div className='flex justify-center items-center'>
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
          <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
        </div>
      </div>

      <div className='flex w-[100%] justify-center items-center px-[1vw] flex-wrap'>
        <p className='text-[1.3rem] font-bolder backdrop-blur-sm p-2 max-sm:p-0 max-sm:text-[1.1rem] max-[425px]:text-[1rem]'>These are a few certifications I gained during my graduation.</p>
      </div>

      <div className="grid grid-cols-3 gap-x-[3vw] gap-y-[6vh] px-[1vw] w-[80vw] h-fit py-[1vh] max-md:grid-cols-1">
        <motion.div 
          className='flex flex-col justify-center items-center'
          whileHover={{scale:1.05}}
        >
          <img src={Python_C} alt="" className='h-[40vh] rounded-[0.5rem] border-white border-[0.1rem] max-sm:h-[30vh] max-sm:w-auto' />
          <p>Python Certification Course: Master the essentials</p>
        </motion.div>
        <motion.div 
          className='flex flex-col justify-center items-center'
          whileHover={{scale:1.05}}
        >
          <img src={MERN_C} alt="" className='h-[40vh] rounded-[0.5rem] border-white border-[0.1rem] max-sm:h-[30vh] max-sm:w-auto' />
          <p>MERN Stack Certification from Internexus</p>
        </motion.div>
        <motion.div 
          className='flex flex-col justify-center items-center'
          whileHover={{scale:1.05}}
        >
          <img src={JS_C} alt="" className='h-[40vh] w-auto rounded-[0.5rem] border-white border-[0.1rem] max-sm:h-[30vh] max-sm:w-auto' />
          <p>JavaScript Certification from Udemy</p>
        </motion.div>
        <motion.div 
          className='flex flex-col justify-center items-center'
          whileHover={{scale:1.05}}
        >
          <img src={Python_Kaggle_C} alt="" className='h-[40vh] rounded-[0.5rem] border-white border-[0.1rem] max-sm:h-[30vh] max-sm:w-auto' />
          <p>Python Certification from Kaggle</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Certificate
