import React from "react";
import "./style.css"

export default function QuestionAnswer(props) {

    const {title, front, verse, getResponse} = props
    const [stage, setStage] = React.useState(1);

    if(stage === 1){
        return  <div className="contentQuestion">
                    <div className="clickQuestion">
                        <h1 onClick={() => setStage(2)}>Pergunta {title} </h1>
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
                        <div className="buttons">
                            <button className="wrong" onClick={() => {setStage(5); getResponse('wrong')}}>Não lembrei</button>
                            <button className="maybe" onClick={() => {setStage(6); getResponse('maybe')}}>Quase não lembrei</button>
                            <button className="right" onClick={() => {setStage(4); getResponse('right')}}>Zap!</button>
                        </div>
                    </div>
                </div>
    }
    if(stage === 4){
        return  <div className="contentQuestion">
                    <div className="clickQuestion final">
                        <h1>Pergunta {title} </h1>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
    }
    if(stage === 5){
        return  <div className="contentQuestion">
                    <div className="clickQuestion red">
                        <h1>Pergunta {title} </h1>
                        <ion-icon name="close-circle"></ion-icon>
                    </div>
                </div>
    }
    if(stage === 6){
        return  <div className="contentQuestion">
                    <div className="clickQuestion yellow">
                        <h1>Pergunta {title} </h1>
                        <ion-icon name="help-circle"></ion-icon>
                    </div>
                </div>
    }
}

