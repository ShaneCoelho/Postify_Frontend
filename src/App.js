import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from "./pages/LoginSignUp";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginSignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
