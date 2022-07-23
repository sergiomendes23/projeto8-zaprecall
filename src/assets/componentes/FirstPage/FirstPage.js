import React from "react";
import "./style.css";

function LogoType (props){
const {img, title, button} = props;

    return(
        <div className="menuInitial">
            <img className="logoImg" src={img} />
            <h1 className="logoName">{title}</h1>
            <button>{button}</button>
        </div>
    )
}


const enter = [{
        img: "./assets/img/logo.png",
        title: "Zap Recall",
        button: "Iniciar Recall!!"
    }
]


export default function FirstPage (){
    return (
        enter.map((enter) => (<LogoType img={enter.img} title={enter.title} button={enter.button} />))
    )
}