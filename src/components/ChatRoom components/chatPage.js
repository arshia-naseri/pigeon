import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBarComponent from './SideBar Components/sideBarComponent.js';
import MessagingComponent from './MessageRoom Components/messageRoomComponent.js';
import "../../styles/chatRoomPage.css"

import {io} from 'socket.io-client';
const socket = io('http://localhost:5050');

const ChatPage = () =>{
    
    const [User, setUser] = useState();
    const [chatRoomList, setChatRoomList] = useState();
    const [profileMessageSelected, setProfileMessageSelected] = useState();

    const [showMembersList, setShowMembersList] = useState(false);

    const GET_USER_API_URL = process.env.REACT_APP_GET_USER_API_URL || "http://localhost:5040/getUser";
    const GET_USER_CHATROOM_LIST_API_URL = process.env.REACT_APP_GET_USER_CHATROOM_LIST_API_URL || "http://localhost:5040/getUserChatRoomList";
    
    const sendMessage = (text) => {
        let from = {id:User._id, name: User.name, username: User.username, avatarPic: User.avatarPic};
        let time = new Date().toISOString();
        let roomID = profileMessageSelected;
        
        socket.emit("send_message", from, time, text, roomID);
    }

    const joinRoomSocket = (chatRoomIDList) => {
        socket.emit("join-room",chatRoomIDList);
    }

    const timeout = (ms) => {
        return new Promise ((resolve) => setTimeout(resolve,ms));
    }

    const getUser = async (userID) =>{
        var result = "null"; 

        await axios.post(GET_USER_API_URL, {userID: userID})
            .then(res =>{
                result = res.data
            })
            .catch(error =>{
                console.error(error);
            })
        
        return result;
    }

    const getUserChatRoomsList = async(userChatRoomIDList) =>{
        let result = [];

        await axios.post(GET_USER_CHATROOM_LIST_API_URL, {chatRoomIDList: userChatRoomIDList})
            .then(res =>{
                result = res.data
            })
            .catch(error =>{
                console.error(error);
            })

        return result;
    }

    useEffect(() => {
        let isCancelled = false;
        const runOnce = async () =>{
            await timeout(5);
            
            if(!isCancelled){
                const index = window.location.hash.indexOf('?');
                const {uid} = queryString.parse(window.location.hash.substring(index + 1));  //Find locaation variable since its not working 
                const user = await getUser(uid);
                setUser(user);
                let chats = await getUserChatRoomsList(user.chatRoomIDList);
                setChatRoomList(chats);
                
                joinRoomSocket(user.chatRoomIDList);
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    useEffect(() =>{
        socket.on("receive_message", (data) =>{
            let tempChatRoomList = [...chatRoomList]
            for(let chatRoom of tempChatRoomList){
                if(chatRoom._id !== data.roomID) continue;
                
                // Alert Notificication Element 
                const messageProfile = document.querySelector(`[data-profile-message-id="${data.roomID}"]`)
                if(messageProfile !== undefined && data.roomID !== profileMessageSelected){
                    const alertElement = messageProfile.children[0];
                    alertElement.dataset.messageAlert = 'true';
                }

                delete data.roomID

                chatRoom.messages.push(data);
                break;
            }

            setChatRoomList(tempChatRoomList);
        })

        return () => {
            socket.off("receive_message")
        }
    }, [socket,chatRoomList,profileMessageSelected])

    if(User === undefined || chatRoomList === undefined){
        return (<div>Wait</div>)
    }

    const messageRoomExtractor = (chatRoomId) =>{
        return chatRoomList.find(object => object._id === chatRoomId)
    }
    const messageProfileClicked = (e) =>{
        const messageProfileElm = e.currentTarget;
        const messageProfileListElm = messageProfileElm.parentNode;

        messageProfileElm.getElementsByClassName("newMessageAlertDiv")[0].dataset.messageAlert = false;
        
        // Getting which message profile was selected the ID
        let clickedChatRoomID = messageProfileElm.dataset.profileMessageId;
        setProfileMessageSelected(clickedChatRoomID);

        let elms = messageProfileListElm.getElementsByClassName('messageProfileSelect');
        for(let elm of elms){
            elm.classList.remove('messageProfileSelect');
        }
        messageProfileElm.getElementsByClassName('messageProfileHighlight')[0]
                        .classList.add('messageProfileSelect');
    }
    // ? Purpose of this function is to revert the 
    // ? elements in assisting in componenet loading
    const elementsClicked = (e) => {
        
        var clickedElm,targetElm;
        
        clickedElm = e.target;
        targetElm = document.getElementById("membersListContainer");
        
        if(targetElm === null){return null;}

        if(showMembersList)
            if(!targetElm.contains(clickedElm))
                setShowMembersList(false);
    }

    
    return(<>
        <main id='chatRoomPageContainer' onClick={elementsClicked}>
            {/* ChatMenuComponent */}
            <SideBarComponent 
                User = {User} 
                ChatList={chatRoomList} 
                messageProfileClicked = {messageProfileClicked}
            />
            {profileMessageSelected ? 
                <MessagingComponent 
                    User = {User}
                    chatRoomObject={messageRoomExtractor(profileMessageSelected)}
                    chatRoomList = {chatRoomList}
                    showMembersList = {showMembersList}
                    setShowMembersList = {setShowMembersList}
                    sendMessage = {sendMessage}
                />:
                <div id='notLoadedChatRoomComponent' onClick={sendMessage}>
                    Select a Park or <u className='mouseCursorHoverPointer'>Create</u> one yourself  
                </div>
            }
        </main>
    </>)
}

export default ChatPage;