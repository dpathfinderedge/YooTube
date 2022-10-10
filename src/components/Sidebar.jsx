import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

import { categories } from '../utils/constants';

const Sidebar = () => {
  const { activeMenu, handleCloseSideBar } = useStateContext();

  const activeLink = 'flex items-center gap-5 rounded-[30px] text-md text-white py-3 pl-4 m-1';
  const normalLink = 'flex items-center gap-5 rounded-[30px] text-md text-white py-3 pl-4 m-1 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';
  const notActiveMenuActiveLink = 'flex flex-col items-center gap-2 rounded-[30px] text-md text-white py-3 pl-4 m-1';
  const notActiveMenuNormalLink = 'flex flex-col items-center gap-2 rounded-[30px] text-md text-white py-3 pl-4 m-1 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';

  return (
    <div className="ml-3 md:overflow-hidden overflow-auto md:hover-overflow-auto pb-10">
      {activeMenu ? (
        <>
          <div className="mt-5">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/${category.name}`}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#aaa" : ''
                })}
                className={({ isActive }) => isActive ? activeLink: normalLink}
              >
                {category.icon}
                <span className="capitalize">{category.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-5">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/${category.name}`}
                onClick={() => {}}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#aaa" : ''
                })}
                className={({ isActive }) => isActive ? notActiveMenuActiveLink: notActiveMenuNormalLink}
              >
                {category.icon}
                <span className="capitalize">{category.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar