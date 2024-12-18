import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
// import Career from './components/career/Career'
import Recentwork from './components/recent_work/Recentwork'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    {/* <Career/> */}
    <Recentwork/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App