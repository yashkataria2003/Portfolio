import React from 'react'
import Carousel from '../Carousel/Carousel'
import postersData from './postersData.js';
import certificatesData from './certificatesData.js';
import thumbnailsData from './thumbnailsData.js';
import '../Content/Content.css'
import { motion } from 'framer-motion';

const Content = () => {
    return (
        <motion.div
            className='flex flex-col justify-center items-center min-h-max w-[100%] px-[2vw] py-[3vh] gap-y-[7vh] contentMainContainer bg-BackgroundSvg bg-cover bg-no-repeat max-md:w-[100vw] max-md:mt-[10vh] max-sm:mt-[6.9vh]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col justify-center items-center h-[7vh] w-fit my-[1vh]">
                <p className='headingContent'>Designs</p>
                <div className='flex justify-center items-center'>
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                </div>
            </div>

            <div className='flex w-[100%] px-[1vw] flex-wrap'>
                <p className='text-[1.3rem] font-bolder backdrop-blur-sm p-2 max-sm:p-0 max-sm:text-[1.1rem] max-[425px]:text-[1rem]'>These are the posters and certificates I created for my college. I also prepared numerous thumbnails for my coaching center's YouTube channel while working part-time there.</p>
            </div>

            <div className="flex justify-center items-start h-[68vh] w-[90vw] gap-x-4 px-[1vw] max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-y-[8vh] max-sm:gap-y-[4vh]">
                <motion.div
                    className="flex flex-col justify-start items-center h-[60vh] w-[20vw] gap-y-[0.5vh] max-md:w-[60vw] max-md:h-[100vh]"
                    whileHover={{ scale: 1.05 }}
                >
                    <Carousel data={postersData.slides} />
                    <p className=' text-lg'>Posters</p>
                </motion.div>
                <motion.div
                    className="flex flex-col justify-between items-center h-[36vh] w-[27vw] gap-y-[0.5vh] max-md:w-[60vw] max-md:h-[50vh]"
                    whileHover={{ scale: 1.05 }}
                >
                    <Carousel data={certificatesData.slides} />
                    <p className=' text-lg'>Certificates</p>
                </motion.div>
                <motion.div
                    className="flex flex-col justify-between items-center [36vh] w-[27vw] gap-y-[0.5vh] max-md:w-[60vw] max-md:h-[50vh]"
                    whileHover={{ scale: 1.05 }}
                >
                    <Carousel data={thumbnailsData.slides} />
                    <p className=' text-lg'>Thumbnails</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Content
