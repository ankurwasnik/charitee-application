import React, { Component, useEffect, useState } from "react";
import FactoryContract from "./contracts/FundraiserFactory.json";
import getWeb3 from "./getWeb3";
import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import NewFundraiser from './NewFundraiser';
import Home from './Home';
import FactoryAppBar from './components/FactoryAppBar';
import "./App.css";

const App = () =>{
  const [state, setState] = useState({web3:null, accounts:null, contract:null});
  useEffect( ()=>{
    const init = async () =>{
      try{
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = FactoryContract.networks[networkId];
        const instance = new web3.eth.Contract(
          FactoryContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({web3,accounts,contract:instance});
      }
      catch(error){
        alert(`Failed to load web3, accounts, or contract.
        Check console for details`);
        console.error(error);
      }
    }
    init();
  },[]);

  const runExample = async()=>{
    const { accounts, contract } = state;
  }
  return (
    <Router>
    <FactoryAppBar/>
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/new/" element={ <NewFundraiser /> } />
      </Routes>
    </Router>
  )
}
export default App;
