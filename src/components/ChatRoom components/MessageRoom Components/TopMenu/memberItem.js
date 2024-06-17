import ProfilePicComponent from "../../../profilePicComponent";
import "../../../../styles/ChatRoomStyles/messageRoom/memberItem.css"

const MemberItem = ({member, btnText}) => {
    return (
        <section className="memberItemSection">
           <section className="memberItemInfo">
                <ProfilePicComponent 
                    classList='memberPic'
                    avatarPic={member.avatarPic}
                />
                <section className="memberLabelSection">
                    <div title={member.name} className="memberName">{member.name}</div>
                    <div title={`@${member.username}`} className="memberUsername">@{member.username}</div>
                </section>
           </section>

            <button disabled={btnText === "+Add Friend"?false:true} data-btn-text={btnText} className={`${btnText === "+Add Friend"?'mouseCursorHoverPointer':''} btnMemberAction`}>
                {btnText}
            </button>
        </section>
    )
}

export default MemberItem;