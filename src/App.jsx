import React from 'react'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Tabl from './components/Tabl'
import Cards from './components/Cards'
import Input from './components/Input'


const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/"element={<First/>}/>
      <Route path="/s" element={<Second/>}/>
      <Route path="/t" element={<Third data={{age:"20" , name: "DEF"}}/>}/>
      <Route path="/ta" element={<Tabl/>}/>
      <Route path="/c" element={<Cards/>}/>
      <Route path="/i" element={<Input/>}/>
    </Routes>
    </>
  )
}

export default App