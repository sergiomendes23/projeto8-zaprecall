import React from "react";
import FirstPage from "./assets/componentes/FirstPage/FirstPage.js";
import SecondPage from "./assets/componentes/SecondPage/SecondPage.js";



export default function App(){

    const [second, setSecond] = React.useState('FirstPage')

    return(
        <>
            {second === 'FirstPage' ? <FirstPage setSecond={setSecond} /> : <SecondPage />}
        </>
    )
}

