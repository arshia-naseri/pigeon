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
        <section data-primary-user={primaryUserSent} className="messageBubbleContainer" onClick={secClick}>
            <section className="textBubble">
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