import React from "react";
import { Login } from "./Login";
import  Register  from "./Register";
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import A_propos from "./pages/A_propos";
import Contact from "./pages/Contact";
// import Dashboard from "./Users/Dashboard";
import Menu from "./Components/Menu";
import MessageAdmin from "./Components/Menu";
import MessageResto from "./Users/MessageResto";
import Add_resto from "./Users/Add_resto";
import Add_abn from "./Users/Add_abn";
import Historiques_abn from "./Users/Historiques-abn";
import Activer_abn from "./Users/Activer_abn";
import Board from "./Users/Board";
import BoardAdmin from "./Users/BoardAdmin";
import Sales from "./Users/Sales";
import Report from "./Users/Rapport";
import MenuItem from "./Components/MenuItem";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/Login" exact Component={Login}/>
          <Route path="/Register" exact Component={Register}/>
          <Route path="/A propos" exact Component={A_propos}/>
          <Route path="/Contact" exact Component={Contact}/>
          <Route path="/Dashboard" exact Component={Board}/>
          <Route path="/DashboardAdmin" exact Component={BoardAdmin}/>
          <Route path="/MessageResto" exact Component={MessageResto}/>
          <Route path="/MessageAdmin" exact Component={MessageAdmin}/>
          <Route path="/Add_resto" exact Component={Add_resto}/>
          <Route path="/Add_abn" exact Component={Add_abn}/>
          <Route path="/Activer_abn" exact Component={Activer_abn}/>
          <Route path="/Historiques_abn" exact Component={Historiques_abn}/>

          <Route path="/Ventes" exact Component={Sales}/>
          <Route path="/Rapport" exact Component={Report}/>
          <Route path="/Menu" exact Component={Menu}/>
          {/* <Route path="/Menu" exact Component={MenuItem}/> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
