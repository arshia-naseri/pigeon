import React, { useState, useRef } from 'react';
import "../../../../styles/ChatRoomStyles/messageRoom/sendBarStyle.css"
const SendBarComponent = () =>{
    const btnSend = useRef();
    const txtSend = useRef();
    const [isBtnActive, setIsBtnActive] = useState(false);

    const textFieldChange = (e) =>{
        if(e.target.value === '') 
            setIsBtnActive(false);
        else
            setIsBtnActive(true);

        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight- e.target.clientHeight + 18 + 'px';
    }

    const clickedSendButton = (e) =>{
        e.preventDefault();
        alert("hello")
    }
    
    return (
        <section id="sendBarContainer">
            <form autoComplete="off" id="sendBarElements">
                <textarea
                    rows={1}
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