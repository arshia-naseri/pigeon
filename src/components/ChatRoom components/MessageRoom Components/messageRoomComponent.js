import React, { useEffect, useState } from "react";
import MessageRoomTopBar from "./TopMenu/messageRoomTopBar.js";
import MessageDisplay from "./Message Display/messageRoomMessageDisplay.js";
import SendBarComponent from "./Message Send Bar/messageRoomSendBarComponent.js";

import "../../../styles/ChatRoomStyles/messageRoom/messageRoomStyle.css";

const MessagingComponent = ({
  User,
  chatRoomObject,
  showMembersList,
  setShowMembersList,
  sendMessage,
  chatRoomList,
  contacts,
  setContacts,
}) => {
  const [messageRoomPic, setMessageRoomPic] = useState();
  const [messageRoomTitle, setMessageRoomTitle] = useState();
  const [members, setMembers] = useState(chatRoomObject.participants);

  const getMessageRoomPic = () => {
    if (chatRoomObject.isGroupChat) return "default-group.webp";
    return chatRoomObject.participants.find(
      (participant) => participant.username !== User.username
    ).avatarPic;
  };

  const getMessageRoomTitle = () => {
    if (chatRoomObject.isGroupChat) return chatRoomObject.groupName;
    return chatRoomObject.participants.find(
      (participant) => participant.username !== User.username
    ).name;
  };

  const shiftUserInMembers = () => {
    let tempMembers = members.filter(
      (memebr) => memebr.username !== User.username
    );
    let mainMember = {
      name: User.name,
      username: User.username,
      avatarPic: User.avatarPic,
    };

    tempMembers.unshift(mainMember);
    setMembers(tempMembers);
  };

  useEffect(() => {
    setMessageRoomTitle(getMessageRoomTitle());
    setMessageRoomPic(getMessageRoomPic());
    shiftUserInMembers();
  }, [chatRoomObject]);

  if (messageRoomPic === undefined || messageRoomTitle === undefined) {
    return <></>;
  }

  // console.log(User);
  return (
    <section id="messageRoomContainer">
      <MessageRoomTopBar
        messageRoomPic={messageRoomPic}
        messageRoomTitle={messageRoomTitle}
        members={members}
        // Memebr's list Display
        showMembersList={showMembersList}
        setShowMembersList={setShowMembersList}
        contacts={contacts}
        setContacts={setContacts}
      />
      <MessageDisplay
        username={User.username}
        messagesObject={chatRoomObject.messages}
        chatRoomList={chatRoomList}
      />

      <SendBarComponent
        chatRoomObjectID={chatRoomObject._id}
        sendMessage={sendMessage}
      />
    </section>
  );
};

export default MessagingComponent;
