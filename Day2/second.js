import React from "react";
import ReactDOM from "react-dom/client";

const element=React.createElement('h1',{id:"first",className:"aman",style:{backgroundColor:"blue",fontSize:"40px",color:"white"}},"HEllow aman");
const element1=React.createElement('h2',{id:"second",className:"aman",style:{backgroundColor:"red",fontSize:"40px",color:"black"}},"HEllow bittu");
//1.element create kiya // yaha pr ye style object ke ander rakha = style:{backgroundColor:"blue",fontSize:"40px",color:"white"}
const div1=React.createElement('div',{},[element],[element1])
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));//access kita 
// Reactroot.render(element);//screen pr acces krwaa diya 
// Reactroot.render(element1)
Reactroot.render(div1)