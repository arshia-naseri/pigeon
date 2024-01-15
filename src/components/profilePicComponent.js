import "../styles/profilePicContainer.css"
const ProfilePicComponent = ({cID, classList, avatarPic}) =>{
    return (
        <section id={cID} className={`profilePicContainer ${classList}`}>
                <img loading="lazy" 
                    alt="profile pic" 
                    src={require(`../resources/Avatars/${avatarPic}`)}
                />
        </section>
    )
}

export default ProfilePicComponent;