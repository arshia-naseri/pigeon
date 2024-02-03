import React, { useState, useRef, useEffect } from 'react';
import "../../../../styles/ChatRoomStyles/messageRoom/sendBarStyle.css"
const SendBarComponent = ({chatRoomObjectID, sendMessage}) =>{
    const btnSend = useRef();
    const txtSend = useRef();
    const [isBtnActive, setIsBtnActive] = useState(false);

    useEffect(()=>{
        txtSend.current.focus();
    }, [])

    useEffect(()=>{
        txtSend.current.value = '';
        setIsBtnActive(false);
    },[chatRoomObjectID])

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
        sendMessage(txtSend.current.value);
        txtSend.current.value = '';
        txtSend.current.focus();
        setIsBtnActive(false)
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