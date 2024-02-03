import ProfilePicComponent from "../../../profilePicComponent"
import "../../../../styles/ChatRoomStyles/messageRoom/messageBubble.css"
const MessageBubble = ({text, time, name, username, avatarPic, primaryUserSent}) =>{
    
    function NewLine (props) {
        const text = props.text;
        const result = text.split('\n').map((str,index) => <p key={index}>{str}</p>)
        return result;
    }

    

    let t = new Date(time);
    return (
        <section data-primary-user={primaryUserSent}
                data-sent-date = {time}
                data-username={username} 
                data-cont-message = "false"
                className="messageBubbleContainer">
            {primaryUserSent ? 
                null:
                <ProfilePicComponent
                    classList="messageDisplayAvatarPic"
                    avatarPic={avatarPic}
                />
            }
            
            <section className="textBubble">
                {
                    primaryUserSent ? null: <div className="messageDisplayName">~{name}</div>
                }
                <NewLine text ={text}/>
                <div className="timeStamp">
                    {`${t.getHours() % 12 || 12}:${t.getMinutes() < 10? '0'+t.getMinutes():t.getMinutes()} ${t.getHours() < 12? 'AM':'PM'}`}
                </div>
                <div className="triangle"/>
            </section>
        </section>
    )
}

export default MessageBubble;