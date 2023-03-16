import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainRouter from './components/routers/router/MainRouter'
import PrivateRoute from './components/routers/routes/PrivateRoute'

const App = () => {
  return (
    <Routes>
      {/* <Route path='/auth/*' element={<AuthRouter />} /> */}
      <Route path='/*' element={(
        <PrivateRoute>
          <MainRouter />
        </PrivateRoute>
      )} />
    </Routes>
  )
}

export default App