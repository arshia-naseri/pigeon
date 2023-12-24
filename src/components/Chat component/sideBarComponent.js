// import { useEffect, useRef, lazy, Suspense } from 'react';
import '../../styles/ChatRoomStyles/sideBarComponent.css'
import SideBarTopMenu from './sideBarTopMenu';

const SideBarComponent = ({User}) =>{
    console.log(User)
    return (
        <section id='sideBarComponentContainer'>
            <SideBarTopMenu User = {User}/>
        </section>
    )
}

export default SideBarComponent;