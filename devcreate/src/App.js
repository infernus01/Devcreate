import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Pets from './components/Pets'
import Shop from './components/Shop'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Nav/>}>
          <Route index element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/pets" element = {<Pets/>}/>
          <Route path = "/shop" element = {<Shop/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App