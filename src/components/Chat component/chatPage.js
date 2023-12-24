import queryString from 'query-string';
import React, { useEffect, useRef, lazy, Suspense, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading.js';
import SideBarComponent from './sideBarComponent';
import "../../styles/ChatRoomStyles/chatRoomPage.css"

// const SideBarComponent = lazy(()=> import("./sideBarComponent"));

// http://localhost:3000/#/chat?uid=65805fa47cf91f7433ac2251

const ChatPage = () =>{
    // const User = useRef();
    const [User, setUser] = useState();

    const GET_USER_API_URL = "http://localhost:5040/getUser";

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

    useEffect(() => {
        let isCancelled = false;
        const runOnce = async () =>{
            // await timeout(10);

            if(!isCancelled){
                const index = window.location.hash.indexOf('?');
                const {uid} = queryString.parse(window.location.hash.substring(index + 1));  //Find locaation variable since its not working 
                // User.current = await getUser(uid);
                setUser(await getUser(uid));
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    if(User === undefined){
        return (<div>Wait</div>)
    }else{
        console.log(User)
    }
    
    return(<>
        <section id='chatRoomPageContainer'>
            {/* ChatMenuComponent */}
            <SideBarComponent User = {User}/>
            {/* SideBarComponent */}
            {/* <Suspense fallback={<Loading/>}>
                
            </Suspense> */}
        </section>
    </>)
}

export default ChatPage;