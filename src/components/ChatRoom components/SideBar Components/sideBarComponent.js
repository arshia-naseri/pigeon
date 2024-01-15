import '../../../styles/ChatRoomStyles/SideBar/sideBarComponent.css';
import SideBarTopMenu from './sideBarTopMenu';
import SideBarMessageList from './sideBarMessageList';

const SideBarComponent = ({User, ChatList, messageProfileClicked}) =>{
      
    return (
        <section id='sideBarComponentContainer'>
            <SideBarTopMenu User = {User}/>
            <SideBarMessageList 
                UserID={User.username} 
                chatRoomList = {ChatList} 
                messageProfileClicked={messageProfileClicked}
            />
        </section>
    )
}

export default SideBarComponent;