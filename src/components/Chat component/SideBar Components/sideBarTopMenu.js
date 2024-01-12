const SideBarTopMenu = ({User}) =>{
    return (
        <nav id="topMenuContainer">
            <section className="profilePicContainer mainUserProfilePicContainer">
                <img loading="lazy" 
                    alt="Main User avatar" 
                    src={require(`../../../resources/Avatars/${User.avatarPic}`)}
                />
            </section>
            <section id="MainUsernameSection">
                <p className ="txtOverFlowStyle" title={User.name}>{User.name}</p>
                <p title={`@${User.username}`}>@{User.username}</p>
            </section>
            <section id="UserActionSection">
               <button title="Settings" className="userActionButtons mouseCursorHoverPointer" id="btnSettings"/>
               <button title="Video Call" className="userActionButtons mouseCursorHoverPointer" id="btnVideoCall"/>
               <button title="New Message" className="userActionButtons mouseCursorHoverPointer" id="btnNewChat"/>
            </section>
        </nav>
    )
}


export default SideBarTopMenu;