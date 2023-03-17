import React from 'react'
import { Route, Routes } from 'react-router-dom'

import "./assets/css/style.css"
import MainRouter from './components/routers/router/MainRouter'

const App = () => {
	return (
		<Routes>
			<Route path='/*' element={<MainRouter />} />
		</Routes>
	)
}

export default App