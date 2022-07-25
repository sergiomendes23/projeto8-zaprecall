import React from "react";
import "./style.css"

export default function QuestionAnswer(props) {

    const {title, front, verse} = props
    const [stage, setStage] = React.useState(1);

    if(stage === 1){
        return  <div className="contentQuestion">
                    <div className="clickQuestion">
                        <h1>Pergunta {title} </h1>
                        <ion-icon name="play-outline" onClick={() => setStage(2)}></ion-icon>
                    </div>
                </div>
    }
    if(stage === 2) {
        return  <div className="contentQuestion">
                    <div className="clickAnswer">
                        <h1>{front}</h1>
                        <img src="./img/setinha.png" onClick={() => setStage(3)} />
                    </div>
                </div>
    }
    if(stage === 3) {
        return <div className="contentQuestion">
                    <div className="clickAnswer">
                        <h1>{verse}</h1>
                        <img src="./img/setinha.png" onClick={() => setStage(1)} />
                    </div>
                </div>
    }

    return(
        <div className="contentQuestion">
            <div className="clickQuestion">
                <h1>Pergunta {title} </h1>
                <h1>{front}</h1>
                <h1>{verse}</h1>
                <ion-icon name="play-outline" onClick={"startQuestion()"}></ion-icon>
            </div>
        </div>
    )
}