import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import GlobalNavBar from './components/GlobalNavBar';
import GlobalFooter from './components/GlobalFooter';
import GlobalBody from './components/GlobalBody';

function App() {
  return (
    <Router>
      <div>
        <GlobalNavBar />
      </div>
      <Routes>
        <Route path="/" element={<GlobalBody />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <div>
        <GlobalFooter />
      </div>
    </Router>
  );
}

export default App;