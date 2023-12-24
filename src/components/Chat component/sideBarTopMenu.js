const SideBarTopMenu = ({User}) =>{
    return (
        <section id="topMenuContainer">
            <section id="profilePicContainer">
                <img loading="lazy" id="mainUserProfilePic" 
                    alt="Main User avatar" 
                    src={require(`../../resources/Avatars/${User.avatarPic}`)}
                />
            </section>
            <section id="MainUsernameSection">
                <p title={User.name}>{User.name}</p>
                <p title={`@${User.username}`}>@{User.username}</p>
            </section>
            <section id="UserActionSection">
               <button title="Settings" className="userActionButtons mouseCursorHoverPointer" id="btnSettings"/>
               <button title="Video Call" className="userActionButtons mouseCursorHoverPointer" id="btnVideoCall"/>
               <button title="New Message" className="userActionButtons mouseCursorHoverPointer" id="btnNewChat"/>
            </section>
        </section>
    )
}


export default SideBarTopMenu;