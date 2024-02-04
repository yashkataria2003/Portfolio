import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import HomeIcon from '../../assets/HomeIcon.svg'
import EducationIcon from '../../assets/EducationIcon.svg'
import InterestsIcon from '../../assets/InterestsIcon.svg'
import SkillsIcon from '../../assets/SkillsIcon.svg'
import ProjectsIcon from '../../assets/ProjectsIcon.svg'
import DesignsIcon from '../../assets/DesignsIcon.svg'
import CertificateIcon from '../../assets/CertificateIcon.svg'
import ContactIcon from '../../assets/ContactIcon.svg'
import hamburgerLogo from '../../assets/hamburgerLogo.svg'

const Navbar = () => {
  const [homeVisible, setHomeVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [interestsVisible, setInterestsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [designsVisible, setDesignsVisible] = useState(false);
  const [certificatesVisible, setCertificatesVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      // Adjust the screen width threshold as needed (640px in this case)
      const screenWidthThreshold = 640;

      // Update the state based on the screen size
      setMenuVisible(window.innerWidth > screenWidthThreshold);
    }

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [menuVisible, setMenuVisible] = useState(true);


  const handleHomeMouseEnter = () => {
    setHomeVisible(true);
  }

  const handleHomeMouseLeave = () => {
    setHomeVisible(false)
  }

  const handleEducationMouseEnter = () => {
    setEducationVisible(true);
  }

  const handleEducationMouseLeave = () => {
    setEducationVisible(false)
  }

  const handleInterestsMouseEnter = () => {
    setInterestsVisible(true);
  }

  const handleInterestsMouseLeave = () => {
    setInterestsVisible(false)
  }

  const handleSkillsMouseEnter = () => {
    setSkillsVisible(true);
  }

  const handleSkillsMouseLeave = () => {
    setSkillsVisible(false)
  }

  const handleProjectsMouseEnter = () => {
    setProjectsVisible(true);
  }

  const handleProjectsMouseLeave = () => {
    setProjectsVisible(false)
  }

  const handleDesignsMouseEnter = () => {
    setDesignsVisible(true);
  }

  const handleDesignsMouseLeave = () => {
    setDesignsVisible(false)
  }

  const handleCertificatesMouseEnter = () => {
    setCertificatesVisible(true);
  }

  const handleCertificatesMouseLeave = () => {
    setCertificatesVisible(false)
  }

  const handleContactMouseEnter = () => {
    setContactVisible(true);
  }

  const handleContactMouseLeave = () => {
    setContactVisible(false)
  }

  const handleHamburgerClick = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center w-[5%] h-[100vh] backdrop-blur-sm bg-[#000000b7] fixed top-0 border-2 rounded-r-3xl px-1 z-20 max-lg:w-[5%] max-md:w-[100vw] max-md:h-[10vh] max-md:flex-row max-sm:flex-col max-sm:h-fit max-sm:gap-y-[2vh] max-sm:bg-transparent'>
        <div className='hidden hamburgerDiv max-sm:flex max-sm:items-center max-sm:justify-center max-sm:bg-[#000000b7] max-sm:w-[100vw] max-sm:h-[7vh] max-sm:py-[1vh] max-sm:border-2 max-sm:rounded-r-3xl' onClick={handleHamburgerClick}>
          <img src={hamburgerLogo} alt="hamburge" className='hamburgerLogo h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
        </div>
        {
          menuVisible &&
          <div className='flex flex-col justify-center items-start h-[100vh] w-[100%] gap-y-[2vh] max-xl:gap-y-[3vh] max-lg:gap-y-[4vh] max-md:w-[100vw] max-md:h-[10%] max-md:flex-row max-md:gap-x-[3vw] max-md:items-center max-sm:bg-[#000000b7] max-sm:flex-col max-sm:w-[100vw] max-sm:h-[100vh] max-sm:py-[1vh] max-sm:border-2 max-sm:rounded-r-3xl'>
            <Link to="/home" className='links transition-transform delay-350' id='l1' onMouseEnter={handleHomeMouseEnter} onMouseLeave={handleHomeMouseLeave}>
              <img src={HomeIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.2vh] max-lg:h-[5.2vh]' />
              {
                homeVisible &&
                <p>Home</p>
              }
            </Link>

            <Link to="/education" className='links transition-transform delay-350' id='l1' onMouseEnter={handleEducationMouseEnter} onMouseLeave={handleEducationMouseLeave}>
              <img src={EducationIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                educationVisible &&
                <p>Education</p>
              }
            </Link>

            <Link to="/interest" className='links transition-transform delay-350' id='l1' onMouseEnter={handleInterestsMouseEnter} onMouseLeave={handleInterestsMouseLeave}>
              <img src={InterestsIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                interestsVisible &&
                <p>Interests</p>
              }
            </Link>

            <Link to="/skills" className='links transition-transform delay-350' id='l1' onMouseEnter={handleSkillsMouseEnter} onMouseLeave={handleSkillsMouseLeave}>
              <img src={SkillsIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                skillsVisible &&
                <p>Skills</p>
              }
            </Link>

            <Link to="/projects" className='links transition-transform delay-350' id='l1' onMouseEnter={handleProjectsMouseEnter} onMouseLeave={handleProjectsMouseLeave}>
              <img src={ProjectsIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                projectsVisible &&
                <p>Projects</p>
              }
            </Link>

            <Link to="/designs" className='links transition-transform delay-350' id='l1' onMouseEnter={handleDesignsMouseEnter} onMouseLeave={handleDesignsMouseLeave}>
              <img src={DesignsIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                designsVisible &&
                <p>Designs</p>
              }
            </Link>

            <Link to="/certificates" className='links transition-transform delay-350' id='l1' onMouseEnter={handleCertificatesMouseEnter} onMouseLeave={handleCertificatesMouseLeave}>
              <img src={CertificateIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                certificatesVisible &&
                <p>Certificates</p>
              }
            </Link>

            <Link to="/contact" className='links transition-transform delay-350' id='l1' onMouseEnter={handleContactMouseEnter} onMouseLeave={handleContactMouseLeave}>
              <img src={ContactIcon} alt="home" className='h-[5.2vh] max-xl:h-[5.4vh] max-lg:h-[5.2]' />
              {
                contactVisible &&
                <p>Contact Us</p>
              }
            </Link>
          </div>
        }
      </div >
    </>
  )
}

export default Navbar
