import Header from "./Header/Header.js";
import Questions from "./Questions/Questions.js";
import Baseboard from "./Baseboard/Baseboard.js";
import "./style.css";

export default function SecondPage(){
    return(
        <>
            <Header />
            <Questions />
            <Baseboard />  
        </>
    )
}