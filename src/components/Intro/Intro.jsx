import React, { useState, useEffect } from 'react'
import Yash_Img_2 from '../../assets/Yash_Img_2.svg'
import '../Intro/Intro.css'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion'

const Intro = () => {
    const project = 8;
    const internship = 1;

    const [projectCount, setProjectCount] = useState(0);
    const [internshipCount, setInternshipCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (projectCount != project) {
                setProjectCount(projectCount + 1);
            }
        }, 90);

        return () => clearInterval(interval);
    }, [projectCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (internshipCount != internship) {
                setInternshipCount(internshipCount + 1);
            }
        }, 90);

        return () => clearInterval(interval);
    }, [internshipCount]);

    return (
        <motion.div
            className='flex justify-between items-center h-[100vh] w-[100%] px-4 bg-Yash_Bg_Center bg-cover bg-no-repeat max-md:w-[100vw] max-md:h-[90vh] max-sm:flex-col max-sm:gap-y-[0.5vh] max-sm:py-0 max-sm:min-h-max max-sm:mt-[4vh] max-sm:justify-around'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ transitionDuration: 1 }}
        >
            <div className='flex justify-start items-center'>
                <img src={Yash_Img_2} alt="Yash Img" className='h-[75vh] max-xl:h-[65vh] max-lg:h-[60vh] max-md:h-[55vh] ' />
            </div>
            <div className='flex flex-col justify-between items-center w-[30%] h-[50%] max-sm:w-[100vw] max-sm:gap-y-[5vh] max-xl:gap-y-[10vh]'>
                <div className='flex flex-col justify-center items-center w-fit h-fit gap-y-[1vh] px-[1vw] py-[0.5vh]'>
                    <h2 className=' text-[2.7rem] font-bold'>Yash Kumar</h2>
                    <p className='text-[2.1rem]'>
                        <Typewriter
                            loop='true' onInit={(typewriter) => {
                                typewriter
                                    .typeString("Web Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Graphic Designer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Problem Solver")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Public Speaker")
                                    .start();
                            }}
                        />
                    </p>
                </div>
                <div className='flex justify-center items-center w-fit h-fit px-[1vw] py-[1vh] gap-x-[5vw] max-xl:flex-col max-xl:gap-y-[3vh]'>
                    <div className='flex flex-col justify-center items-center w-fit h-fit'>
                        <p className='text-[1.7rem]'>{projectCount}+</p>
                        <h2 className=' text-[1.5rem] max-sm:text-[1.3rem] font-bold'>Projects</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center w-fit h-fit'>
                        <p className='text-[1.7rem]'>{internshipCount}</p>
                        <h2 className=' text-[1.5rem] max-sm:text-[1.3rem] font-bold'>Internship/ Training</h2>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Intro
