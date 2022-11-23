import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages';
import Results from './Results';

const Switch = () => {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={['/home', '/movie', '/music', '/entertainment', '/crypto', '/podcasts']} element={<Results />} />
      </Routes>
    </div>
  )
}

export default Switch;