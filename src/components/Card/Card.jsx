import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ image, topic, date, sourceCode, deployement, tech }) => {
    return (
        <motion.div 
            className='group flex justify-center items-center h-[35vh] w-[26vw] bg-[#dfd4d4] rounded-[0.5rem] border-[#fff] border-[0.1rem] hover:border-[#204898] max-lg:w-[35vw] max-md:w-[80vw] max-md:h-[50vh] max-sm:h-[26vh] max-sm:w-[95vw]'
            whileHover={{scale:1.05}}
        >
            <img src={image} alt="Kanban-Board" className='h-full w-full group-hover:hidden rounded-[0.5rem]' />
            <div className='hidden group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-start group-hover:px-[3vw] h-full w-full px-[0.5vw] gap-y-[7vh]'>
                <div className='flex flex-col justify-start items-start'>
                    <div className='flex justify-start items-center'>
                        <h2 className='font-bold text-[#204898]'>Topic :</h2> &nbsp;
                        <p>{topic}</p>
                    </div>

                    <div className='flex justify-start items-center'>
                        <h2 className='font-bold text-[#204898]'>Date :</h2> &nbsp;
                        <p>{date}</p>
                    </div>

                    <div className='flex justify-start items-center'>
                        <h2 className='font-bold text-[#204898]'>Tech :</h2> &nbsp;
                        <p>{tech}</p>
                    </div>
                </div>
                <div className="flex justify-evenly items-center w-[90%]">
                    {
                        sourceCode && <a href={sourceCode}><button className='bg-[#204898] rounded-md text-white px-[0.4vw] py-[0.3vh]'>Source Code</button></a>
                    }
                    {
                        deployement && <a href={deployement}><button className='bg-[#204898] rounded-md text-white px-[0.4vw] py-[0.3vh]'>Deployement</button></a>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Card
