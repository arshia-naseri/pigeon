import "../../../../styles/ChatRoomStyles/messageRoom/messageDisplay.css"
import MessageBubble from "./messageBubble"
const MessageDisplay = ({username, messagesObject}) =>{

    return (
        <section id="MessagesSection">
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