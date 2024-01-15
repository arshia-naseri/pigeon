import ChatRoomItem from "./chatRoomItem";

const SideBarMessageList = ({UserID, chatRoomList, messageProfileClicked}) =>{
    return(
        <section id="MessageList">
            {chatRoomList.map((chatRoom, index)=>{
                return(
                    <ChatRoomItem 
                        key={index} 
                        UserID={UserID} 
                        chatRoom = {chatRoom}
                        messageProfileClicked = {messageProfileClicked}
                    />
                )
            })}
        </section>
    )
}

export default SideBarMessageList;