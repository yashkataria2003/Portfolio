  import React, { useState } from 'react'
  import '../ContactUs/ContactUs.css'
  import ContactUsImage from '../../assets/ContactUsImage.svg'
  import { motion } from 'framer-motion'
  import { useNavigate } from 'react-router-dom'
  import * as dotenv from 'dotenv'

  dotenv.config

  const ContactUs = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleClick = async() => {
      if (!name || !phone) {
        alert("Name and Phone Number are necessary fields!");
        return;
      }

      // console.log(name, email, phone, feedback)
      
      const url = import.meta.env.VITE_SHEET_DB_API_KEY;
      console.log("Url : ",url);

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'Name': name,
              'EMail': email,
              'Phone': phone,
              'Feedback': feedback,
            }
          ]
        })
      })
      navigate("/home");
    }

    return (
      <motion.div
        className='flex flex-row justify-start items-center w-[100%] h-[100vh] py-[3vh] gap-y-[4vh] px-[1vw] gap-x-[1vw] max-md:w-[100vw] max-md:min-h-max max-md:flex-col max-sm:justify-start max-sm:items-center max-md:mt-[10vh] max-md:gap-y-[1vh] max-sm:py-[4vh] max-sm:mt-[6.9vh]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='flex flex-col justify-center items-center h-[100%] w-[40%] max-md:w-[100vw] max-sm:w-fit max-sm:h-fit max-[375px]:py-[1vh]'>
          <h2 className='feedbackContactUs'>Feedback</h2>
          <img src={ContactUsImage} alt="Contact Us" className='h-full'/>
        </div>
        <div className='flex flex-col justify-center items-center h-[100%] w-[60%] p-[1vw] gap-y-[1vh]'>
          <form action="submit" className='flex flex-col ustify-center items-center w-[60vw] max-md:w-[100vw] max-sm:w-[100vw] '>
            <ul className='flex flex-col justify-start items-center p-[1vw] gap-y-[0.5vh] w-[100%] max-sm:gap-y-[1vh]'>
              <li className='flex w-[80%] justify-start items-center p-[1vw] gap-x-[4.4vw] max-sm:w-[95%] max-sm:gap-x-[5.18vw]'>
                <label htmlFor="Name" className='hover:cursor-pointer text-xl'>Name</label>
                <input
                  type="text"
                  name='Name'
                  id='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='inputName w-[70%] h-[5vh] bg-[#ffffffa5] rounded-xl py-[1vh] px-[1vw]' 
                  required
                />
              </li>
              <li className='flex w-[80%] justify-start items-center p-[1vw] gap-x-[4.4vw] max-sm:w-[95%] max-sm:gap-x-[5.18vw]'>
                <label htmlFor="EMail" className='hover:cursor-pointer text-xl'>E-Mail</label>
                <input
                  type="email"
                  name="EMail"
                  id="EMail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='inputEMail w-[70%] h-[5vh] bg-[#ffffffa5] rounded-xl py-[1vh] px-[1vw]'
                />
              </li>
              <li className='flex w-[80%] justify-start items-center p-[1vw] gap-x-[4.4vw] max-sm:w-[95%] max-sm:gap-x-[5.18vw]'>
                <label htmlFor="Phone" className='hover:cursor-pointer text-xl'>Phone</label>
                <input
                  type="number"
                  name="Phone"
                  id="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='inputNumber w-[70%] h-[5vh] bg-[#ffffffa5] rounded-xl py-[1vh] px-[1vw]'
                />
              </li>
              <li className='flex w-[80%] justify-start items-center p-[1vw] gap-x-[2.9vw] max-sm:w-[95%] max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-[0.5vh] max-sm:mt-[1vh]'>
                <label htmlFor="Feedback" className='hover:cursor-pointer text-xl'>Feedback</label>
                <textarea
                  name="Feedback"
                  id="Feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  fixed='true'
                  className='textAreaFeedback w-[70%] bg-[#ffffffa5] rounded-xl py-[1vh] px-[1vw] max-sm:w-[90vw]'
                >
                </textarea>
              </li>
            </ul>
          </form>
          <button className='bg-[#22488d] h-fit w-[10vw] p-[1.4vh] rounded-full hover:border-white hover:border-2 text-white text-md max-md:w-[20vw] max-sm:w-[40vw]' onClick={handleClick}>Submit</button>
        </div>
      </motion.div>
    )
  }

  export default ContactUs
