import "./Router.css";
// import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from '../../pages/Home/Home'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'

function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
  );
};

export default Router;
