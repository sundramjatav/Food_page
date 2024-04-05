import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Footer from './Footer'
const Home = () => {
  return (
    <div className='p-5'> 
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Footer/>
    </div>
  )
}

export default Home