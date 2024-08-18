import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './components/Home.jsx'
import Transition from './pages/Transition.jsx' 
import Waiting from './pages/Waiting.jsx'  
import { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Home />} />
        <Route path="/register" element={user ? <Chat /> : <Register />} />
        <Route path="/login" element={user ? <Chat /> : <Login />} />
        <Route path="*" element={<Navigate to={"/"} />} />
	  	<Route path="/transition" element={<Transition />} />  
	  	<Route path="/waiting" element={<Waiting />} />
      </Routes>
    </>
  );
}

export default App;
/*
function App() {

  return (
	<Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  )
}

export default App
*/
