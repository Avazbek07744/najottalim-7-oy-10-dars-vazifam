// clind_id
// 1c086cb2418542dbb5889e5170ac2582

// clind_secret
// 9349f520e7314bffad0a77a2393f95a7

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Likes from './pages/Likes';
import MainLeout from './Leout/MainLeout';

const App = () => {

  return (
    <div>
      <Routes>

        <Route path='/' element={
          <MainLeout>
            <Home />
          </MainLeout>
        } />
        <Route path='/like' element={
          <MainLeout>
            <Likes />
          </MainLeout>
        } />
        <Route path='/details/:id' element={
          <MainLeout>
            <Details />
          </MainLeout>
        } />
      </Routes>
    </div>
  )
};
export default App;

