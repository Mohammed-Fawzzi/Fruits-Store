import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Brand from './Components/Brand/Brand'
import Online from './Components/Online/Online'
import Today from './Components/Today/Today'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
        <Products/>
        <Brand/>
        <Online/>
        <Today/>
        <Footer/>
      </main>
    </>
  )
}

export default App