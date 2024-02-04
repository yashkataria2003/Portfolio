import React from 'react'
import Intro from '../Intro/Intro'
import Education from '../Education/Education'
import AreasOfIntrest from '../AreasOfIntrest/AreasOfIntrest'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Content from '../Content/Content'
import Certificate from '../Certificates/Certificate'
import ContactUs from '../ContactUs/ContactUs'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Intro />}></Route>
                <Route exact path='/home' element={<Intro />}></Route>
                <Route exact path='/education' element={<Education />}></Route>
                <Route exact path='/interest' element={<AreasOfIntrest />}></Route>
                <Route exact path='/skills' element={<Skills />}></Route>
                <Route exact path='/projects' element={<Projects />}></Route>
                <Route exact path='/designs' element={<Content />}></Route>
                <Route exact path='/certificates' element={<Certificate />}></Route>
                <Route exact path='/contact' element={<ContactUs />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
