import React from 'react'
import Nav from './Components/Nav'
import Landing from './Components/Landing'
import Card from './Components/Card'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className='w-full h-screen '>
      <Nav/>
      <Landing/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
