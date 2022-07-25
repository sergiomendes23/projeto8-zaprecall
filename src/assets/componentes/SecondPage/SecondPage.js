import Header from "./Header/Header.js";
import Questions from "./Questions/Questions.js";
import Baseboard from "./Baseboard/Baseboard.js";
import "./style.css";
import React from "react";

export default function SecondPage(){

    const [result, setResult] = React.useState([]);

    function getResponse(response){
        setResult([...result, response])
    }


    return(
        <>
            <Header />
            <Questions getResponse={getResponse} />
            <Baseboard result={result} />  
        </>
    )
}