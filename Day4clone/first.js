 import React from "react";
 import ReactDOM from "react-dom/client";
 const element1=<h1>hellow aman kaise ho</h1>;
 let obj={
    name:"aman",
    age:21,
 }
 const arry=[20,"aman",20]//array ko bhi de skte hain
 function greet(expression){
    return <h1>Hellow Brother{expression}{arry}</h1>//jsx:ke ander hum java-script ke kisi bhi expression {} ko daal skte hain
 }
 //✔️ {} ke andar sirf expression aata hai
//❌ statement (if, for) nahi
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(// yaha React Fragment <></> use kiya element1 ko renedr krne ke liye
    <>
    {element1}
    {greet(" kaise ho ")}
    {obj.name}
    </>
);//yaha pr hum obj.name kr ke object ko bhi render krwa skte hain
    

 


