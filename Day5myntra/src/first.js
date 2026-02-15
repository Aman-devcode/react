import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Fotter from "./component/Fotter";
import arry from "./utils/dummy";
function App(){
    return(
        <>
        {/* // Header */}
        <Header/>
        {/* // Body */}
        <div className="Bodysec"style={{display:"flex",gap:"5px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
        {/* <Card cloth="T-Shirt's" offer="20-40%off"/>
        <Card cloth="Jeans"     offer="30-40%off"/>
        <Card cloth="Shirt's" offer="20-40%off"/>
        <Card cloth="Sweeter" offer="20-40%off"/>
        <Card cloth="Pant" offer="60-80%off"/>
        <Card cloth="Kurta" offer="50-60%off"/>
        <Card cloth="Shoes" offer="20-40%off"/> */}
        {
            arry.map((value,index)=> <Card key={index}cloth={value.cloth} offer={value.offer}/>)
        }
        </div>
        {/* //Footer */}
        <Fotter/>
        </>

    )
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);