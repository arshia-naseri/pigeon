import React, { useEffect, useRef, useState } from 'react';
const ChatRoomItem = ({UserID, chatRoom, messageProfileClicked}) =>{
    const [messageProfile,setMessageProfile] = useState();
    
    const timeout = (ms) => {
        return new Promise ((resolve) => setTimeout(resolve,ms));
    }

    useEffect(() => {
        let isCancelled = false;

        const runOnce = async () =>{
            await timeout(3);
            
            if(!isCancelled){
                let profile;
                if(chatRoom.isGroupChat === false){
                    for(let participant of chatRoom.participants){
                        if(participant.username !== UserID){
                            profile ={
                                name: participant.name,
                                profilePic: participant.avatarPic
                            }
                            setMessageProfile(profile)
                        }
                    }
                }
                else{
                    profile ={
                        name: chatRoom.groupName,
                        profilePic: 'default-group.webp'
                    }
                    setMessageProfile(profile)
                }

            }
        }

        runOnce();
        return () =>{
            isCancelled = true;
        }
    }, []);

    if(messageProfile === undefined || chatRoom === undefined){
        return(<div>Loading Messages</div>)
    }
    return(
        <section 
            data-profile-message-id = {chatRoom._id}
            className='messageProfileClass mouseCursorHoverPointer' 
            onClick={messageProfileClicked}
            >
            
            <div data-message-alert={false} className="newMessageAlertDiv"/> 
            {/* When selected, it acts as a hightlight */}
            {/* "messageProfileSelect" is added when user selects*/}
            <div 
                className='messageProfileHighlight messageProfileHover'
            />
            
            <section className="profilePicContainer">
                <img loading="lazy" 
                    alt="Main User avatar" 
                    src={require(`../../../resources/Avatars/${messageProfile.profilePic}`)}
                />
            </section>

            <div 
                title={messageProfile.name} 
                className='profileMessageName txtOverFlowStyle'>
                
                {messageProfile.name}
            </div>
        </section>
    )
}

export default ChatRoomItem;