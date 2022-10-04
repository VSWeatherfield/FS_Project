import React from 'react'

import { Footer, Blog, Possibility, Features, Header } from './containers';
import { CTAA, Brand, Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Features />
        <Possibility />
        <CTAA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App