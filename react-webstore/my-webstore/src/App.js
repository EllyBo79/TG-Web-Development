// import React, { useState, useEffect} from "react";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import Header from "./components/Header";
import CatStuff1 from "./pages/CatStuff1";
import CatStuff2 from "./pages/CatStuff2";
import Home from "./pages/Home";
import Pay from "./components/Pay";
import React from 'react';


function App() {

  return (
    <BrowserRouter>
    <div className="navBar">
      <Header />
    </div> 

    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/CatStuff1" component={CatStuff1}/>
      <Route path="/CatStuff2" component={CatStuff2}/>
      <Route path="/Pay" component={Pay}/>
    </Switch>
    
    
    </BrowserRouter>
    
  );
}
// console.log(data)

export default App;
