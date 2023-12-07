import queryString from 'query-string';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';


const ChatPage = () =>{
    const User = useRef();

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
            await timeout(10);

            if(!isCancelled){
                const index = window.location.hash.indexOf('?');
                const {uid} = queryString.parse(window.location.hash.substring(index + 1));  //Find locaation variable since its not working 
                User.current = await getUser(uid);
                console.log(User.current)
            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    
    return(<>
        <div>Chat Page</div>
    </>)
}

export default ChatPage;