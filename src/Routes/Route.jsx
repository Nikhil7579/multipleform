import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../Pages/Form'
import Home from '../Pages/Home'

const Index = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </>
  )
}

export default Index
