import React from "react";
import "./style.css";

export default function FirstPage ({setSecond}){

    return(
        <div className="menuInitial">
            <img className="logoImg" src="./img/logo.png" />
            <h1 className="logoName">ZapRecall</h1>
            <button onClick={() => setSecond('second')}>Iniciar Recall!!</button>
        </div>
    )
}