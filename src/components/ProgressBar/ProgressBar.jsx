import React, { useEffect, useState } from 'react'

const ProgressBar = ({ score }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        setProgressWidth(score);
    }, [score]);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(count!=score) {
                setCount(count + 1);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [count]);


    const progressFillStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        borderRadius: '2rem',
        backgroundColor: '#204898',
        width: `${progressWidth}%`,
        transition: 'width 2.5s ease-in-out',
    };

    return (
        <div className='flex justify-center items-center gap-x-[1vw]'>
            <div className='flex justify-start items-center h-[2vh] w-[15vw] bg-[#dfd4d4] rounded-md px-[0.2vw] max-md:w-[40vw]'>
                <div style={progressFillStyle} className='text-white progressFill'>
                </div>
            </div>
            {count}%
        </div>
    )
}

export default ProgressBar
