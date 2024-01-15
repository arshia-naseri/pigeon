import ProfilePicComponent from "../../../profilePicComponent";
import "../../../../styles/ChatRoomStyles/messageRoom/memberItem.css"

const MemberItem = ({member}) => {
    return (
        <section className="memberItemSection">
            <ProfilePicComponent 
                classList='memberPic'
                avatarPic={member.avatarPic}
            />
            <section className="memberLabelSection">
                <div title={member.name} className="memberName">{member.name}</div>
                <div title={`@${member.username}`} className="memberUsername">@{member.username}</div>
            </section>
        </section>
    )
}

export default MemberItem;