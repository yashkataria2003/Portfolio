import React from 'react'
import './AreasOfIntrest.css'
import Bullet_Point from '../../assets/Bullet_Point_Sm.png'
import { motion } from 'framer-motion'
import '../AreasOfIntrest/AreasOfIntrest.css'

const AreasOfIntrest = () => {
    return (
        <motion.div
            className="flex flex-col justify-start items-center w-[100%] h-[100vh] py-[3vh] gap-y-[7vh] bg-BackgroundSvg2 bg-cover bg-no-repeat max-md:w-[100vw] max-md:h-[90vh] max-sm:mt-[6.9vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="flex flex-col justify-center items-center h-[7vh] w-fit">
                <p className='headingAreasOfInterests'>Interests</p>
                <div className='flex justify-center items-center'>
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[1vh] bg-[#14336c] rounded-md max-md:w-[8vw]' />
                    <hr className='w-[4vw] h-[0.8vh] bg-[#121111fa] max-md:w-[8vw]' />
                </div>
            </div>
            <div className='flex justify-between items-center w-[100%] h-[60vh] rounded-2xl px-8 max-md:px-[1vw] max-sm:w-[100vw] max-sm:px-0'>
                <ul className='flex flex-col justify-center items-start gap-y-2 h-[90%] w-[100%] aoi_item_container py-4 px-4 max-md:px-[0.5vw]'>
                    <li className='flex justify-between items-center gap-x-6 text-xl text-bold  w-[90%] h-[20%] py-4 px-4 max-xl:gap-x-[20vw] max-md:gap-x-[10vw] max-sm:gap-x-[8vw]'>
                        <div className='flex justify-start items-center w-[60%] h-[90%] gap-x-6 px-3 max-md:gap-x-[1vw] aoi_item_2 '>
                            <img src={Bullet_Point} alt="pointer" className='h-[4rem] pointer' />
                            <p className='text-[1.5rem] font-bolder max-xl:text-[1.2rem] w-fit max-md:p-[0.8rem] max-sm:text-[1.1rem]'>Graphic Designing</p>
                        </div>
                        <div className='aoi_detail_container_2'>
                            <div className="flex flex-col justify-start items-center h-[90%] w-[97%] aoi_card_bg border-white border-2 rounded-2xl p-3 gap-y-5 my-2 max-xl:w-[40vw] max-sm:w-[48vw]">
                                <h2 className='font-bolder text-xl text-white font-bold'>Graphic Designing</h2>

                                <p className='text-sm text-[#e4e3e3]'>I have created numerous posters, certificates, event passes, etc., for my college. I am the head coordinator of the Designing department in our college's club.</p>
                            </div>
                        </div>
                    </li>

                    <li className='flex justify-between items-center gap-x-6 text-xl text-bold  w-[90%] h-[20%] py-4 px-4 max-xl:gap-x-[20vw] max-md:gap-x-[10vw] max-sm:gap-x-[8vw]'>
                        <div className='flex justify-start items-center w-[60%] h-[90%] gap-x-6 px-3 max-md:gap-x-[1vw] aoi_item_1'>
                            <img src={Bullet_Point} alt="pointer" className='h-[4rem] pointer' />
                            <p className='text-[1.5rem] font-bolder max-xl:text-[1.2rem] w-fit max-md:p-[0.8rem] max-sm:text-[1.1rem]'>Web Development</p>
                        </div>
                        <div className='aoi_detail_container_1 mt-[4vh]'>
                            <div className="flex flex-col justify-start items-center h-fit w-[97%] aoi_card_bg border-white border-2 rounded-2xl p-3 gap-y-5 my-2 max-xl:w-[40vw] max-sm:w-[48vw]">
                                <h2 className='font-bolder text-xl text-white font-bold'>Web Development</h2>

                                <p className='text-sm text-[#e4e3e3]'>I learned web development during my graduation and have completed numerous projects based on the MERN stack. Some of these projects include an image generator, a news application, a weather application, and a library management system. Additionally, I completed a MERN stack internship at Interexus during my summer break.</p>
                            </div>
                        </div>
                    </li>

                    <li className='flex justify-between items-center gap-x-6 text-xl text-bold  w-[90%] h-[20%] py-4 px-4 max-xl:gap-x-[20vw] max-md:gap-x-[10vw] max-sm:gap-x-[8vw]'>
                        <div className='flex justify-start items-center w-[60%] h-[90%] gap-x-6 px-3 max-md:gap-x-[1vw] aoi_item_3'>
                            <img src={Bullet_Point} alt="pointer" className='h-[4rem] pointer' />
                            <p className='text-[1.5rem] font-bolder max-xl:text-[1.2rem] w-fit max-md:p-[0.8rem] max-sm:text-[1.1rem]'>Object Oriented Programming</p>
                        </div>
                        <div className='aoi_detail_container_3'>
                            <div className="flex flex-col justify-start items-center h-[90%] w-[97%] aoi_card_bg border-white border-2 rounded-2xl p-3 gap-y-5 my-2 max-xl:w-[40vw] max-sm:w-[48vw]">
                                <h2 className='font-bolder text-xl text-white font-bold'>Object Oriented Programming</h2>

                                <p className='text-sm text-[#e4e3e3]'>I also have knowledge of object-oriented programming. I have learned object-oriented programming in C++ and Java.</p>
                            </div>
                        </div>
                    </li>

                    <li className='flex justify-between items-center gap-x-6 text-xl text-bold  w-[90%] h-[20%] py-4 px-4 max-xl:gap-x-[20vw] max-md:gap-x-[10vw] max-sm:gap-x-[8vw]'>
                        <div className='flex justify-start items-center w-[60%] h-[90%] gap-x-6 px-3 max-md:gap-x-[1vw] aoi_item_4'>
                            <img src={Bullet_Point} alt="pointer" className='h-[4rem] pointer' />
                            <p className='text-[1.5rem] font-bolder max-xl:text-[1.2rem] w-fit max-md:p-[0.8rem] max-sm:text-[1.1rem]'>Presentations</p>
                        </div>
                        <div className='aoi_detail_container_4'>
                            <div className="flex flex-col justify-start items-center h-[90%] w-[97%] aoi_card_bg border-white border-2 rounded-2xl p-3 gap-y-5 my-2 max-xl:w-[40vw] max-sm:w-[48vw]">
                                <h2 className='font-bolder text-xl text-white font-bold'>Presentations</h2>

                                <p className='text-sm text-[#e4e3e3]'>I also gave a lot of presentations during my graduation. It helped me overcome hesitation and improved my public speaking skills.</p>
                            </div>
                        </div>
                    </li>

                    <li className='flex justify-between items-center gap-x-6 text-xl text-bold  w-[90%] h-[20%] py-4 px-4 max-xl:gap-x-[20vw] max-md:gap-x-[10vw] max-sm:gap-x-[8vw]'>
                        <div className='flex justify-start items-center w-[60%] h-[90%] gap-x-6 px-3 max-md:gap-x-[1vw] aoi_item_5'>
                            <img src={Bullet_Point} alt="pointer" className='h-[4rem] pointer' />
                            <p className='text-[1.5rem] font-bolder max-xl:text-[1.2rem] w-fit max-md:p-[0.8rem] max-sm:text-[1.1rem]'>Database Management System</p>
                        </div>
                        <div className='aoi_detail_container_5'>
                            <div className="flex flex-col justify-start items-center h-[90%] w-[97%] aoi_card_bg border-white border-2 rounded-2xl p-3 gap-y-5 my-2 max-xl:w-[40vw] max-sm:w-[48vw]">
                                <h2 className='font-bolder text-xl text-white font-bold'>Database Management System</h2>

                                <p className='text-sm text-[#e4e3e3]'>I also have a good grasp of database management systems. I have learned DBMS in SQL, and I have mastered the basics of SQL.!</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default AreasOfIntrest
