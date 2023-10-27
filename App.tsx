import React from 'react';
import lionling from "./Componet/lionking.png"
import './App.css';
import Function from './Componet/function';
import Darkmode from './Componet/Darkmode';
import Usestake from './Componet/Usestake';


function Logo() {
  const lionPic = <img src= {lionling} />;
  return lionPic;
  
}

function App() {

  const h2style = {
    background: "yellow",
    marginLeft: "20vw",
    paddingLeft: "20vw",
    marginRight: "20vw",
    alignItems: "center",
    color: "Green",

   } 
  return (
   <>
   <Logo/>
   <Logo/>
   <Logo/>
   <Logo/>
   <Logo/>
   <Logo/>
    
     <h2 style={h2style}> hello everyone</h2>
     <Logo/>
     <Logo/>
     <Logo/>
     <Logo/>
     <Logo/>
     <Logo/>
    < Function/>
    <br />
    <br />
    <Darkmode/>
    <Usestake/>
   </>
  );
};

export default App;
