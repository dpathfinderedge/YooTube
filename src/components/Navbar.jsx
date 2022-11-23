import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import youtube from '../utils/youtube.png';
import youtube_black from '../utils/youtube_black.png';
import { useStateContext } from '../contexts/ContextProvider';

import {AiOutlineMenu} from 'react-icons/ai';
import {MdOutlineDarkMode} from 'react-icons/md';
import {MdLightMode} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai';
import {BiArrowBack} from 'react-icons/bi';


import Search from './Search';

const Navbar = () => {
  const { setActiveMenu, screenSize, setScreenSize, handleCloseSideBar, setMode, currentMode } = useStateContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize,', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex flex-col items-center border-b dark:border-gray-700"> {/**lg:bg-red-400 md:bg-green-400 sm:bg-yellow-400 bg-pink-400 */}
      <div className={isClicked ? "hidden" : "flex justify-between py-1 md:px-4 px-2 items-center box-border w-full"}>
        <div className="flex justify-between items-center sm:space-x-2 space-x-[1px]">
          <button
            type="button"
            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            className="text-center text-xl w-[30px] h-[30px] rounded-full dark:hover:bg-gray-400 hover:bg-gray-100 flex justify-center items-center dark:text-white dark:hover:text-slate-900"
          >
            <AiOutlineMenu />
          </button>
          <Link 
            to="/"
            onClick={handleCloseSideBar}
            
          > 
            <div className="sm:w-32 w-24 sm:h-11 h-8">
              {currentMode === 'Light' ? (
                <img src={youtube_black} alt="youtube logo" className="object-cover w-full h-full" />
              ) : (
                <img src={youtube} alt="youtube logo" className="object-cover w-full h-full" />
              )}
            </div>
          </Link>
        </div>
        <div className="hidden sm:block">
          <Search />
        </div>
        <div className={isClicked ? 'hidden' : 'sm:hidden block w-[30px] h-[30px] rounded-full dark:hover:bg-gray-400 hover:bg-gray-100 flex justify-center items-center'}> 
          <button className="cursor-pointer" onClick={handleClick} >
            <AiOutlineSearch className="text-2xl dark:text-white dark:hover:text-slate-900" />
          </button>
        </div>
        <div className="">
          <button
          type="button"
            onClick={setMode}
            className="text-xl dark:text-white dark:hover:text-slate-900 text-slate-900 w-[30px] h-[30px] rounded-full dark:hover:bg-gray-400 hover:bg-gray-100 flex justify-center items-center"
          >
            {currentMode === 'Light' ? (
              <MdLightMode />
            ) : (
              <MdOutlineDarkMode />
            )}
          </button>
        </div>
      </div>
      <div>
        {
          isClicked && (
            <div className="flex justify-between items-center my-1 space-x-4 sm:hidden block">
              <div className="w-[30px] h-[30px] rounded-full dark:hover:bg-gray-400 hover:bg-gray-100 flex justify-start items-center w-full">
                <button onClick={() => setIsClicked(false)} >
                  <BiArrowBack className="text-2xl dark:text-white dark:hover:text-slate-900" />
                </button>
              </div>
              <Search />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;