import React, {  useEffect, usestate,useState } from "react";
import ReactDOM from "react-dom/client"
//Background color Changer
function Main(){
    const[color,setColor]=useState("black");
    // console.log("render")
    useEffect(()=>{
        // console.log("UseEffect Executed")
        document.body.style.backgroundColor=color;
    }
    ),[color];
    return(
         <>
        <h1>Background color Changer</h1>
        <div className="but">
            <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orenge</button>
            <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        </div>
        
        </>
    )
        
}

    ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);
