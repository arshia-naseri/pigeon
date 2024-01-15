import React, { useState } from 'react';
import MemebrItem from './memberItem';

const MessageRoomMembers = ({members}) =>{
    const [showMembersList, setShowMembersList] = useState(false);

    const btnMemberClicked = () =>{
        setShowMembersList(!showMembersList);
    }

    return(
        <section id="messageRoomMemberSection">
            <button id="btnMembers" className= "mouseCursorHoverPointer" onClick={btnMemberClicked}>
                Members
            </button>
            {showMembersList ? 
                <section id='membersListContainer'>
                    {members.map((member, index) =>{
                        return(
                            <MemebrItem 
                            key={index}
                            member={member}
                            />
                        )
                    })}
                </section>:
                null
            }
        </section>
    )
}

export default MessageRoomMembers;