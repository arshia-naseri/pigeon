import "../../../../styles/ChatRoomStyles/messageRoom/messageRoomMore/main.css";
import MemberItem from "./memberItem";
const MessageRoomMore = ({
  members,
  showMembersList,
  setShowMembersList,
  contacts,
}) => {
  const btnMemberClicked = (e) => {
    setShowMembersList(!showMembersList);
  };

  const exitDialog = (e) => {
    if (
      e.target.id === "MessageRoomMoreDialogSection" ||
      e.target.id === "MoreContainerExit"
    ) {
      setShowMembersList(false);
    }
  };

  const setBtnText = (index, member) => {
    if (index === 0) return "Me";

    for (let contact of contacts) {
      if (contact.username === member.username) {
        return "✔ Friend";
      }
    }

    return "+Add Friend";
  };
  return (
    <section id="MessageRoomMoreSection">
      <div
        id="btnMessageRoomMore"
        className="mouseCursorHoverPointer"
        onClick={btnMemberClicked}
      >
        ...
      </div>

      {showMembersList && (
        <section id="MessageRoomMoreDialogSection" onClick={exitDialog}>
          <section id="MessageRoomMoreContainer">
            <div id="MoreContainerExit" className="mouseCursorHoverPointer">
              X
            </div>
            <section id="groupActionBtnSection">
              <button id="btnAddMember" className="mouseCursorHoverPointer">
                Add Member
              </button>
              <button id="btnLeavePark" className="mouseCursorHoverPointer">
                Leave Park
              </button>
            </section>

            <section id="membersSection">
              <div id="membersTitle">Members</div>
              <section id="membersListContainer">
                {members.map((member, index) => {
                  return (
                    <MemberItem
                      key={index}
                      member={member}
                      contacts={contacts}
                      btnText={setBtnText(index, member)}
                    />
                  );
                })}
              </section>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default MessageRoomMore;
