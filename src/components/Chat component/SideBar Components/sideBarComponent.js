// import { useEffect, useRef, lazy, Suspense } from 'react';
import '../../../styles/ChatRoomStyles/sideBarComponent.css'
import SideBarTopMenu from './sideBarTopMenu';
import SideBarMessageList from './sideBarMessageList';

const SideBarComponent = ({User, ChatList, messageProfileClicked}) =>{
    
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear().toString().padStart(4, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const offsetMinutes = now.getTimezoneOffset();
      
        const offsetSign = offsetMinutes > 0 ? '-' : '+';
        const offsetHours = Math.abs(Math.floor(offsetMinutes / 60)).toString().padStart(2, '0');
        const offsetMinutesRemainder = (Math.abs(offsetMinutes) % 60).toString().padStart(2, '0');
      
        const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetSign}${offsetHours}:${offsetMinutesRemainder}`;
      
        return formattedDateTime;
    }
      
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