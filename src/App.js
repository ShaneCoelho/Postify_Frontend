import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import UserDetails from "./pages/UserDetails/UserDetails";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginSignUp />}/>
      <Route path="/userdetails" element={<UserDetails />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
