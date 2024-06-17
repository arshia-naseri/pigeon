import ProfilePicComponent from "../../../profilePicComponent";
import MessageRoomMore from "./messageRoomMore";

const MessageRoomTopBar = ({
  messageRoomPic,
  messageRoomTitle,
  members,
  showMembersList,
  setShowMembersList,
  contacts,
  setContacts,
}) => {
  return (
    <section id="messageRoomTopBar">
      <ProfilePicComponent
        cID="messageRoomTopBarPic"
        avatarPic={messageRoomPic}
      />
      <div id="messageRoomTitle">{messageRoomTitle}</div>

      {members.length > 2 && (
        <MessageRoomMore
          members={members}
          showMembersList={showMembersList}
          setShowMembersList={setShowMembersList}
          contacts={contacts}
        />
      )}
    </section>
  );
};

export default MessageRoomTopBar;
