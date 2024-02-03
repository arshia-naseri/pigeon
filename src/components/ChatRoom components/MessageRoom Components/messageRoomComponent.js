import React, { useEffect, useState } from 'react';
import MessageRoomTopBar from './TopMenu/messageRoomTopBar.js';
import MessageDisplay from './Message Display/messageRoomMessageDisplay.js';
import SendBarComponent from './Message Send Bar/messageRoomSendBarComponent.js';

import '../../../styles/ChatRoomStyles/messageRoom/messageRoomStyle.css'

const MessagingComponent = ({User, chatRoomObject, showMembersList, setShowMembersList, sendMessage, updateComponent, chatRoomList}) =>{
    const [messageRoomPic, setMessageRoomPic] = useState();
    const [messageRoomTitle, setMessageRoomTitle] = useState();
    
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
                chatRoomList = {chatRoomList}
            />
            
            <SendBarComponent 
                chatRoomObjectID = {chatRoomObject._id}
                sendMessage= {sendMessage}
            />
        </section>
    )
}

export default MessagingComponent;