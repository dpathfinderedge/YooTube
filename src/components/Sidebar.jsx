import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { categories } from '../utils/constants';

const Sidebar = () => {
  const { activeMenu, handleCloseSideBar } = useStateContext();

  const activeLink = 'flex items-center gap-5 rounded-[30px] text-md text-white py-3 pl-4 m-1';
  const normalLink = 'flex items-center gap-5 rounded-[30px] text-md text-white py-3 sm:pl-4 pl-2 m-1 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';
  const notActiveMenuActiveLink = 'flex flex-col items-center gap-2 text-md text-white py-2 my-1';
  const notActiveMenuNormalLink = 'flex flex-col items-center gap-2 text-md text-white py-2 my-1 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

  return (
    <div className="overflow-hidden hover:overflow-x-hidden hover:overflow-auto h-full pb-14">
      {activeMenu ? (
        <>
          <div className="">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/${category.name}`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#aaa" : ''
                })}
                className={({ isActive }) => isActive ? activeLink : normalLink}
              >
                {category.icon}
                <span className="capitalize md:text-[16px] sm:text-[12px] text-[10px]">{category.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/${category.name}`}
                onClick={() => {}}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#aaa" : ''
                })}
                className={({ isActive }) => isActive ? notActiveMenuActiveLink : notActiveMenuNormalLink}
              >
                {category.icon}
                <span className="capitalize sm:block hidden md:text-[16px] sm:text-[12px] text-[10px]">{category.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar;