import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useStateContext } from './contexts/ContextProvider';

import { Navbar, Sidebar } from './components';
import  { Home, Comedy, Crypto, Education, Games, Movie, Music, Podcasts, Sports, Telivision } from './pages';

import './App.css';

function App() {
  const { activeMenu, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="fixed md:static bg-white dark:bg-secondary-dark-bg navbar w-full">
          <Navbar />
        </div>
        <div className="flex dark:bg-main-dark-bg">
          <div className={`dark:bg-secondary-dark-bg bg-white ${activeMenu ? 'w-72' : 'w-22'}`}>
            <Sidebar />
          </div>
          <div className={`w-full dark:bg-main-dark-bg bg-main-bg min-h-screen ${activeMenu ? 'md:ml-72' : 'ml-12'}`}>
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/comedy' element={<Comedy />} />
                <Route path='/crypto' element={<Crypto />} />
                <Route path='/education' element={<Education />} />
                <Route path='/games' element={<Games />} />
                <Route path='/movie' element={<Movie />} />
                <Route path='/music' element={<Music />} />
                <Route path='/podcasts' element={<Podcasts />} />
                <Route path='/sports' element={<Sports />} />
                <Route path='/telivision' element={<Telivision />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
