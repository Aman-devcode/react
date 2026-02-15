import React from "react";
import ReactDOM from "react-dom/client";
//jsx:js ka Expression bhi rakh skta hu
const names="bittu"//to hme {}ke ander us varialbe ka name dalana hai
const obj={
    name:"kamni",
    age:21,
}
function greet(){
    return <h1> Aur bhai kaise ho yaar</h1>
};
const newElement1=greet();
const newElement=(//react element
    <>
    <h1 id="first" className="second">hellow aman{names} </h1>
    <h2 style={{backgroundColor:"blue", fontSize:"30px"}}> kaise ho bete {obj.name} </h2>
    </>
)
//style ko object chahiye hota hain isliye {{}} ye lagna padta hai
// isme {} phla curli isliye hain kuki iske ander hum js dalne wala hu
// {{}} double isliye hain kuki ye ek object ko leta hain isliye 
const Reactroot=ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(newElement1);
Reactroot.render(newElement);

//
