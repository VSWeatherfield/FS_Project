import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Footer, Header } from './containers';
import {Main, Forum, Scoreboard, Profile, Olympiads} from './pages';

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Forum />}></Route>
        <Route path='/Olympiads' element={<Olympiads />}></Route>
        <Route path='/Scoreboard' element={<Scoreboard />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;