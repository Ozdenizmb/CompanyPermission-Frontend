// WRITTEN BY MEHMET BARAN ÖZDENİZ @ozdeniz.mb

import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Home from './views/Home/Home';
import About from './views/About/About';
import SignUp from './views/SignUp/SignUp';
import TopBar from './components/TopBar';
import Contact from './views/Contact/Contact'
import UserPage from './views/UserPage/UserPage';
import Login from './views/Login/Login';

const App = () => {

  const { isLoggedIn } = useSelector(store => {
    return {
      isLoggedIn : store.isLoggedIn
    }
  });

  return(
    <div>

      <BrowserRouter>

        <TopBar />

        <Routes>
          <Route exact path="/" element={<Home />}/>

          {!isLoggedIn && (
            <Route path="/login" element={<Login />}/>
          )}

          <Route path="/signup" element={<SignUp />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/profile/:email" element={<UserPage />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>

      </BrowserRouter>

    </div>
  );

}

export default App;