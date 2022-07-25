import "./style.css"

export default function Baseboard ({result}) {

    function createResponse() {
        if(result.includes("wrong")){
            return <div className="notificationWrong">
                        <div className="iconsAnswer">
                            <img src="./img/sad.png" />
                            <h1 className="putz">Putz...</h1>
                        </div>
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                        <h1 className="finalResult">{result.length}/8 CONCLUÍDOS</h1>
                        <div className="iconsResponse"><Icon result={result} /></div>
                    </div>
        }else{
            return <div className="notificationWrong">
                        <div className="iconsAnswer">
                            <img src="./img/party.png" />
                            <h1 className="putz">Parabéns!</h1>
                        </div>
                        <p>Você não esqueceu de</p>
                        <p>nenhum flashcard!</p>
                        <h1 className="finalResult">{result.length}/8 CONCLUÍDOS</h1>
                        <div className="iconsResponse"><Icon result={result} /></div>
                    </div>
        }
    }

    return(
        (result.length) < 8 ? (<div className="baseboard">
            <h1>{result.length}/8 CONCLUÍDOS</h1>
            <div className="iconsResponse"><Icon result={result} /></div>
        </div>) : createResponse()
    )
}

function Icon ({result}) {

    return(
        result.map((item) => {
            if(item === "wrong"){
                return <ion-icon name="close-circle" className="wrong"></ion-icon>
            }else if(item === "maybe"){
                return <ion-icon name="help-circle" className="maybe"></ion-icon>
            }else{
                return <ion-icon name="checkmark-circle" className="right"></ion-icon>
            }
            
        })
        
    )
}