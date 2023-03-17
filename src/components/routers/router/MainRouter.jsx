import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../screens/Home'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="" element={<Home />} />
    </Routes>
  )
}

export default MainRouter