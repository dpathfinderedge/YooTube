import React, { useState } from 'react'
import { useNavigate }  from 'react-router-dom';

import {AiOutlineSearch} from 'react-icons/ai';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    };
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative h-[45px] max-w-[350px] w-full border-1 bg-slate-200 rounded-full my-0 "
      >
        <input
          type="text"
          placeholder="Search..."
          className="relative w-full h-full dark:bg-slate-100 py-0 pl-[55px] pr-[15px] border-0 outline-none rounded-full text-[16px] text-[#33]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute left-0 top-0 w-[50px] h-full dark:bg-slate-100 flex items-center justify-center text-[22px] text-[#333] rounded-l-full">
          <AiOutlineSearch />
        </span>
      </form>
    </div>
  );
}

export default Search;