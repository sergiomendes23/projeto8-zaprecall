import React from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer.js";
import "./style.css";

const itens = [{
    front: "O que é JSX?",
    verse: "Uma extensão de linguagem do JavaScript."
    },
    {
    front: "O React é __ ",
    verse: "Uma biblioteca JavaScript para construção de interfaces."
    },
    {
    front: "Componentes devem iniciar com __",
    verse: "Letra maiúscula."
    },
    {
    front: "Podemos colocar __ dentro do JSX",
    verse: "Expressões."
    },
    {
    front: "O ReactDOM nos ajuda __ ",
    verse: "Interagindo com a DOM para colocar componentes React na mesma."
    },
    {
    front: "Usamos o npm para __",
    verse: "Gerenciar os pacotes necessários e suas dependências."
    },
    {
    front: "Usamos props para __",
    verse: "Passar diferentes informações para componentes."
    },
    {
    front: "Usamos estado (state) para __",
    verse: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
    }
]

export default function Questions () {

    function startQuestion(){
        if(questions.length === 0){
            itens.sort((a, b) => Math.random() - 0.5)
            setQuestion([...itens])
            return <></>
        }else{
            return questions.map((question, title)=> {
                const {front, verse} = question
                return <QuestionAnswer title={title + 1} front={front} verse={verse} />
            })
        }
    }


    const [questions, setQuestion] = React.useState([])
    const start = startQuestion()

    return(
        <>
        {start}
        </>
    )
    
}