import ProfilePicComponent from "../../../profilePicComponent";
import MessageRoomMembers from "./messageRoomMembers";

const MessageRoomTopBar = ({messageRoomPic, messageRoomTitle, members, showMembersList, setShowMembersList}) =>{

    return(
        <section id="messageRoomTopBar">
            <ProfilePicComponent 
                cID= 'messageRoomTopBarPic'
                avatarPic={messageRoomPic}
            />
            <div id="messageRoomTitle">{messageRoomTitle}</div>
            
            {members.length > 2 ? 
                <MessageRoomMembers 
                    members={members}
                    showMembersList = {showMembersList}
                    setShowMembersList = {setShowMembersList}
                />:
                null
            }
            
        </section>
    )
}

export default MessageRoomTopBar;