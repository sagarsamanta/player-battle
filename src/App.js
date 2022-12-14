import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from './components/Analytics/Analytics';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Media from './components/Media/Media';
import Signup from './components/Signup/Signup';
import Watch from './components/Watch/Watch';




const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route  element={<Main/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/watch" element={<Watch/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/media" element={<Media/>} />
        </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
