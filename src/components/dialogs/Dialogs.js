import React from "react";
import "./Dialogs.css";

function Dialogs(){
    return(
        <div className="dialogs">
            <div className="name">
                <p>Иван</p>
                <p>Петя</p>
                <p>Миша</p>
            </div>
            <div className="message">
                <p>message1</p>
                <p>message2</p>
                <p>message3</p>
            </div>
            
            <input placeholder="Введите сообщение" className="input"></input>
            <button className="send">send</button>
        </div>
    )
}
export default Dialogs;
