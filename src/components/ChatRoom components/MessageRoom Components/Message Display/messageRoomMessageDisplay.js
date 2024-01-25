import React, { useEffect, useRef } from 'react';

import "../../../../styles/ChatRoomStyles/messageRoom/messageDisplay.css"
import MessageBubble from "./messageBubble"


const MessageDisplay = ({username, messagesObject}) =>{
    const messageSection = useRef();
    
    const timeout = (ms) => {
        return new Promise ((resolve) => setTimeout(resolve,ms));
    }

    useEffect(() => {
        let isCancelled = false;
        const runOnce = async () =>{
            await timeout(5);
            if(!isCancelled){
                let messageContainers = messageSection.current.children;
                let preUsername = ''
                for (let index = 0; index < messageContainers.length; index++) {
                    const container = messageContainers[index];
                    
                    if(preUsername === container.dataset.username)
                        messageContainers[index - 1].dataset.contMessage = "true";
                    preUsername = container.dataset.username;
                }
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, [messagesObject]);

    return (
        <section id="MessagesSection" ref={messageSection}>
            {messagesObject.map((messageObj, index) => {
                return <MessageBubble 
                    key={index}
                    text={messageObj.text.replaceAll("\\n","\n")}
                    time={messageObj.time}
                    name={messageObj.from.name}
                    username={messageObj.from.username}
                    avatarPic={messageObj.from.avatarPic}
                    primaryUserSent = {messageObj.from.username === username? true: false}
                />
            })}
        </section>
    )
}

export default MessageDisplay;