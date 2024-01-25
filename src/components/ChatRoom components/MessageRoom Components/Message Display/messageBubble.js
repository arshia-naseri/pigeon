import ProfilePicComponent from "../../../profilePicComponent"
const MessageBubble = ({text, time, name, username, avatarPic, primaryUserSent}) =>{
    
    function NewLine (props) {
        const text = props.text;
        const result = text.split('\n').map((str,index) => <p key={index}>{str}</p>)
        return result;
    }

    const secClick = (e) =>{
        const textElements = e.currentTarget.getElementsByTagName("p");
        let textArray = [];
        for(let elm of textElements){
            textArray.push(elm.innerHTML);
        }

        let newText = textArray.join('\n');
        console.log(newText)
    }

    let t = new Date(time);
    return (
        <section data-primary-user={primaryUserSent}
                data-sent-date = {time}
                data-show-date = "false"
                data-username={username} 
                data-cont-message = "false"
                className="messageBubbleContainer" 
                onClick={secClick}>
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