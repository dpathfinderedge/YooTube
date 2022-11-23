import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useStateContext } from './contexts/ContextProvider';

import { ChannelDetail, Navbar, Results, Sidebar, VideoDetail } from './components';
import  { Home, Comedy, Crypto, Education, Games, Movie, Music, Podcasts, Sports, Telivision } from './pages';

import './App.css';
// import Switch from './components/Routes';

function App() {
  const { activeMenu, currentMode } = useStateContext();

  return (
    <div className={` ${currentMode === 'Dark' ? 'dark' : ''}`}> {/**min-h-screen */}
      <BrowserRouter>
        <div className="relative dark:bg-main-dark-bg w-full h-screen"> {/** fixed flex relaive h-screen*/}
          <div className="fixed top-0 left-0 bg-white dark:bg-secondary-dark-bg navbar w-full" style={{zIndex: '1000'}}>
            <Navbar />
          </div>  
          <div className="flex sm:mt-[54px] mt-[39px] dark:bg-main-dark-bg w-full">
            <div className={`fixed left-0 sm:top-[54px] top-[39px] h-full dark:bg-secondary-dark-bg bg-white ${activeMenu ? 'sm:w-48 w-24' : 'sm:w-20 w-11'}`}>
              <Sidebar />
            </div>
            <div className={`w-full dark:bg-main-dark-bg bg-main-bg dark:text-[#fff] ${activeMenu ? 'sm:ml-48 ml-24' : 'sm:ml-20 ml-11'}`}>
              <div className="w-full overflow-hidden">
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/home' element={<Home />} />
                  <Route exact path='/search/:searchTerm' element={<Results />} />
                  <Route exact path='/video/:id' element={<VideoDetail />} />
                  <Route exact path='/channel/:id' element={<ChannelDetail />} />


                  <Route exact path='/comedy' element={<Comedy />} />
                  <Route exact path='/crypto' element={<Crypto />} />
                  <Route exact path='/education' element={<Education />} />
                  <Route exact path='/games' element={<Games />} />
                  <Route exact path='/movie' element={<Movie />} />
                  <Route exact path='/music' element={<Music />} />
                  <Route exact path='/podcasts' element={<Podcasts />} />
                  <Route exact path='/sports' element={<Sports />} />
                  <Route exact path='/telivision' element={<Telivision />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
