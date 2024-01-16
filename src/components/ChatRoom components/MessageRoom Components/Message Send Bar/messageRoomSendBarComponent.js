import React, { useState, useRef } from 'react';
import "../../../../styles/ChatRoomStyles/messageRoom/sendBarStyle.css"
const SendBarComponent = () =>{
    const btnSend = useRef();
    const txtSend = useRef();
    const [isBtnActive, setIsBtnActive] = useState(false);

    const textFieldChange = (e) =>{
        if(e.currentTarget.value.length === 0)
            setIsBtnActive(false);
        else
            setIsBtnActive(true);
    }

    const clickedSendButton = (e) =>{
        e.preventDefault();
    }

    return (
        <section id="sendBarContainer">
            <form autoComplete="off" id="sendBarElements">
                <input 
                    ref={txtSend}
                    name="text" 
                    id="txtSend"
                    placeholder="Type your message ... "
                    onChange={textFieldChange}
                />
                <button
                    disabled={!isBtnActive}
                    onClick={clickedSendButton}
                    type="submit" 
                    id="btnSend" 
                    className="mouseCursorHoverPointer"
                    ref={btnSend}
                    title='Send'
                />
            </form>
        </section>
    )
}

export default SendBarComponent;