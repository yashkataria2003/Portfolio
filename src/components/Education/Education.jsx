import React, { useState } from 'react'
import '../Education/Education.css';
import downloadButton from '../../assets/downloadButton.png'
import { motion } from 'framer-motion';
import Marksheet_10 from '../../assets/Marksheet_10.pdf'
import Marksheet_12 from '../../assets/Marksheet_12.pdf'
import Marksheet_BCA from '../../assets/Marksheet_BCA.pdf'

const Education = () => {
    const [show10, setShow10] = useState(false);
    const [show12, setShow12] = useState(false);
    const [showBCA, setShowBCA] = useState(false);

    const handle10MouseEnter = () => {
        setShow10(true);
    }

    const handle10MouseLeave = () => {
        setShow10(false);
    }

    const handle12MouseEnter = () => {
        setShow12(true);
    }

    const handle12MouseLeave = () => {
        setShow12(false);
    }

    const handleBCAMouseEnter = () => {
        setShowBCA(true);
    }

    const handleBCAMouseLeave = () => {
        setShowBCA(false);
    }

    return (
        <motion.div
            className="flex flex-col justify-start items-center w-[100%] gap-y-[7vh] h-[100vh] py-[3vh] containerEducation bg-BackgroundSvg bg-cover bg-no-repeat max-md:w-[100vw] max-md:min-h-max max-md:mt-[10vh] max-sm:mt-[6.9vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col justify-center items-center h-[7vh] w-fit">
                <p className='headingEducation'>Education</p>
                <div className='flex justify-center items-center'>
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                </div>
            </div>
            <div className='flex justify-between items-center w-[85%] h-fit rounded-2xl py-[1.5vh] px-[1vw] max-md:flex-col max-md:w-[90%] max-md:gap-y-[2vh]'>
                <motion.div 
                    className="flex flex-col justify-start items-center h-fit w-[32%] educationCard border-white border-2 rounded-xl py-[2vh] gap-y-[1.5vh] max-md:w-[80%] max-sm:px-[2vw]"
                    whileHover={{scale:1.05}}
                >
                    <div className="flex flex-col justify-center items-center h-fit w-[100%] text-white  py-[2vh] px-[1vw] gap-y-[3vh]">
                        <h2 className='text-xl font-bold '>Secondary Schooling</h2>
                        <div className='flex flex-col justify-center items-start gap-y-2'>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>School : </span>Govt Sarvodaya Co-Ed Vidyalaya, A-2 Paschim Vihar</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>Board : </span>CBSE</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>Passing Year : </span>2019</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-[90%] max-md:py-[1vh] max-sm:py-[1.2vh]'>
                        <a href={Marksheet_10} download='Marksheet_10' className='flex justify-start items-center w-fit h-fit p-[0.5vw] bg-[#00000076] rounded-full hover:cursor-pointer gap-x-[1vw] px-[1vw] hover:border-white hover:border-[0.1vw] max-sm:px-[2vw] max-sm:py-[1vh]' onMouseEnter={handle10MouseEnter} onMouseLeave={handle10MouseLeave}>
                            <img src={downloadButton} alt="Download Button" className='h-[4vh] downloadButton' />
                            {
                                show10 &&
                                <p className='text-white hover:cursor-pointer transition-transform delay-350'>Download Marksheet</p>
                            }
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-start items-center h-fit w-[32%] educationCard border-white border-2 rounded-xl py-[2vh] gap-y-[1.5vh] max-md:w-[80%] max-sm:px-[2vw]"
                    whileHover={{scale:1.05}}
                >
                    <div className="flex flex-col justify-center items-center h-fit w-[100%] text-white  py-[2vh] px-[1vw] gap-y-[3vh]">
                        <h2 className='text-xl font-bold '>Senior Secondary Schooling</h2>
                        <div className='flex flex-col justify-center items-start gap-y-2'>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>School : </span>Govt Sarvodaya Co-Ed Vidyalaya, New Multan Ngar</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>Board : </span>CBSE</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>Passing Year : </span>2021</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-[90%] max-md:py-[1vh] max-sm:py-[1.2vh] max-[375px]:w-[100%]'>
                        <a href={Marksheet_12} download="Marksheet_12" className='flex justify-start items-center w-fit h-fit p-[0.5vw] bg-[#00000076] rounded-full hover:cursor-pointer gap-x-[1vw] px-[1vw] hover:border-white hover:border-[0.1vw] max-sm:px-[2vw] max-sm:py-[1vh]' onMouseEnter={handle12MouseEnter} onMouseLeave={handle12MouseLeave}>
                            <img src={downloadButton} alt="Download Button" className='h-[4vh] downloadButton' />
                            {
                                show12 &&
                                <p className='text-white hover:cursor-pointer transition-transform delay-350'>Download Marksheet</p>
                            }
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col justify-start items-center h-fit w-[32%] educationCard border-white border-2 rounded-xl py-[2vh] gap-y-[1.5vh] max-md:w-[80%] max-sm:px-[2vw]"
                    whileHover={{scale:1.05}}
                >
                    <div className="flex flex-col justify-center items-center h-fit w-[100%] text-white  py-[2vh] px-[1vw] gap-y-[3vh]">
                        <h2 className='text-xl font-bold '>Graduation</h2>
                        <div className='flex flex-col justify-center items-start gap-y-2'>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>University : </span>Gurugobind Singh Indraprastha University</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>College : </span>Institute of Innovation in Technology and Management</p>
                            <p className='text-lg text-[#e4e3e3]'><span className='text-lg font-bold'>Passing Year : </span>2024</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-[90%] max-md:py-[1vh] max-sm:py-[1.2vh] max-[375px]:w-[100%]'>
                        <a href={Marksheet_BCA} download="Marksheet_BCA" className='flex justify-start items-center w-fit h-fit p-[0.5vw] bg-[#00000076] rounded-full hover:cursor-pointer gap-x-[1vw] px-[1vw] hover:border-white hover:border-[0.1vw] max-sm:px-[2vw] max-sm:py-[1vh]' onMouseEnter={handleBCAMouseEnter} onMouseLeave={handleBCAMouseLeave}>
                            <img src={downloadButton} alt="Download Button" className='h-[4vh] downloadButton' />
                            {
                                showBCA &&
                                <p className='text-white hover:cursor-pointer transition-transform delay-350'>Download Marksheet</p>
                            }
                        </a>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Education
