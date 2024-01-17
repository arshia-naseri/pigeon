import React, { useEffect, useRef, useState } from 'react';
import MessageRoomTopBar from './TopMenu/messageRoomTopBar.js';
import MessageDisplay from './Message Display/messageRoomMessageDisplay.js';
import SendBarComponent from './Message Send Bar/messageRoomSendBarComponent.js';

import '../../../styles/ChatRoomStyles/messageRoom/messageRoomStyle.css'

const MessagingComponent = ({User, chatRoomObject, showMembersList, setShowMembersList}) =>{
    const [messageRoomPic, setMessageRoomPic] = useState();
    const [messageRoomTitle, setMessageRoomTitle] = useState();

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear().toString().padStart(4, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const offsetMinutes = now.getTimezoneOffset();
      
        const offsetSign = offsetMinutes > 0 ? '-' : '+';
        const offsetHours = Math.abs(Math.floor(offsetMinutes / 60)).toString().padStart(2, '0');
        const offsetMinutesRemainder = (Math.abs(offsetMinutes) % 60).toString().padStart(2, '0');
      
        const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetSign}${offsetHours}:${offsetMinutesRemainder}`;
      
        return formattedDateTime;
    }
    
    const getMessageRoomPic = () => {
        if(chatRoomObject.isGroupChat)
            return 'default-group.webp';
        return chatRoomObject.participants.find(participant => participant.username !== User.username).avatarPic;
    }

    const getMessageRoomTitle = () =>{
        if(chatRoomObject.isGroupChat)
            return chatRoomObject.groupName;
        return chatRoomObject.participants.find(participant => participant.username !== User.username).name;
    }

    const timeout = (ms) => {
        return new Promise ((resolve) => setTimeout(resolve,ms));
    }

    useEffect(() => {
        let isCancelled = false;
        const runOnce = async () =>{
            await timeout(5);
            if(!isCancelled){
                
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    useEffect(() => {
        setMessageRoomTitle(getMessageRoomTitle());
        setMessageRoomPic(getMessageRoomPic());
    }, [chatRoomObject])

    if(messageRoomPic === undefined || messageRoomTitle === undefined) {return <></>}
    
    // console.log(chatRoomObject);
    return(
        <section id='messageRoomContainer'>
            <MessageRoomTopBar 
                messageRoomPic = {messageRoomPic}
                messageRoomTitle = {messageRoomTitle}
                members = {chatRoomObject.participants}
                // Memebr's list Display
                showMembersList = {showMembersList}
                setShowMembersList = {setShowMembersList}
            />
            <MessageDisplay 
                username = {User.username}
                messagesObject = {chatRoomObject.messages}
            />
            <SendBarComponent />
        </section>
    )
}

export default MessagingComponent;