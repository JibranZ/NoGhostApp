import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css'
import Home from './components/Home.jsx'
import Transition from './pages/Transition.jsx' 

function App() {

  return (
	<Router>
      <Routes>
        <Route path="/" element={<Home />} />
	  	<Route path="/transition" element={<Transition />} />  
      </Routes>
    </Router>
  )
}

export default App
