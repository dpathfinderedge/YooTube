import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {AiOutlineMenu} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {MdOutlineDarkMode} from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, handleCloseSideBar, setMode, currentMode } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize,', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-5 mt-4">
        <button
          type="button"
          onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          className="text-xl rounded-full p-3 hover:bg-light-gray dark:text-white dark:hover:text-slate-900"
        >
          <AiOutlineMenu />
        </button>
        <Link 
          to="/"
          onClick={handleCloseSideBar}
          className="flex justify-center items-center gap-3 text-xl font-extra-bold tracking-tight dark:text-white text-slate-900"
        >
          <AiFillYoutube /> <span>YooTube</span>
        </Link>
      </div>
      <div className="mt-4">
        <form onSubmit={() => {}}>
          <input type="search" 
            placeholder="Search..."
            className="rounded-full w-full border-none bg-slate-200 p-2 text-black"
          />
        </form>
      </div>
      <div className="mt-4">
        <button
        type="button"
          onClick={setMode}
          className="text-xl dark:text-white text-slate-900"
        >
          {currentMode === 'Light' ? (
            <MdLightMode />
          ) : (
            <MdOutlineDarkMode />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar