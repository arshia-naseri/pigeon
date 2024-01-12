import queryString from 'query-string';
import React, { useEffect, useRef, lazy, Suspense, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading.js';
import SideBarComponent from './SideBar Components/sideBarComponent.js';
import "../../styles/ChatRoomStyles/chatRoomPage.css"

// const SideBarComponent = lazy(()=> import("./sideBarComponent"));

// http://localhost:3000/#/chat?uid=65805fa47cf91f7433ac2251

const ChatPage = () =>{
    const [User, setUser] = useState();
    const [chatRoomList, setChatRoomList] = useState();
    const [profileMessageSelected, setProfileMessageSelected] = useState();

    const GET_USER_API_URL = "http://localhost:5040/getUser";
    const GET_USER_CHATROOM_LIST_API_URL = "http://localhost:5040/getUserChatRoomList";

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
                // console.log(user)
                let chats = await getUserChatRoomsList(user.chatRoomIDList);
                setChatRoomList(chats)
                // console.log(chats)
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    if(User === undefined || chatRoomList === undefined){
        return (<div>Wait</div>)
    }

    const messageProfileClicked = (e) =>{
        const messageProfileElm = e.currentTarget;
        const messageProfileListElm = messageProfileElm.parentNode;

        messageProfileElm.getElementsByClassName("newMessageAlertDiv")[0].dataset.messageAlert = false;
        
        // Getting which message profile was selected the ID
        setProfileMessageSelected(messageProfileElm.dataset.profileMessageId)

        let elms = messageProfileListElm.getElementsByClassName('messageProfileSelect');
        for(let elm of elms){
            elm.classList.remove('messageProfileSelect');
        }
        messageProfileElm.getElementsByClassName('messageProfileHighlight')[0]
                        .classList.add('messageProfileSelect');
    }
    


    return(<>
        <main id='chatRoomPageContainer'>
            {/* ChatMenuComponent */}
            <SideBarComponent 
                User = {User} 
                ChatList={chatRoomList} 
                messageProfileClicked = {messageProfileClicked}
            />
            {/* SideBarComponent */}
            {/* <Suspense fallback={<Loading/>}>
                
            </Suspense> */}
        </main>
    </>)
}

export default ChatPage;