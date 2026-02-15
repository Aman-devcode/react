import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
function GithubProfile(){
    return(
    <>
    <Header></Header>
    <Body></Body>
    </>)
}
ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile/>)