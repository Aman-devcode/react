import React,{useCallback, useEffect,useState}from "react";
import ReactDOM from "react-dom/client";
function PasswardGenerator(){
    const[Passward,setPassward]=useState("");
    const[length,setlength]=useState(10);
    const[numberChanged,setnumberChanged]=useState(false);
    const[charChanged,setcharChanged]=useState(false);
    const generatePassward=useCallback(()=>{
        let str="abcdefzhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789";
        if(charChanged)
            str+="+-*&^$@()!?:{}"
        let pass=""
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setPassward(pass);
    },[length,numberChanged,charChanged])
    useEffect(()=>{
        generatePassward();
    },[length ,numberChanged,charChanged])

    return(
        <>
        <h1>Passward is:{Passward}</h1>
        <div>
            <input type="range" min={4} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length is : ({length})</label>
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>
            <input type="checkbox" defaultChecked={charChanged}onChange={()=>setcharChanged(!charChanged)}></input>
            <label>Character</label>
        </div>
        
        
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<PasswardGenerator/>)
