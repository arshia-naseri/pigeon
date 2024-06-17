import React, { useEffect, useRef } from "react";

import "../../../../styles/ChatRoomStyles/messageRoom/messageDisplay.css";
import MessageBubble from "./messageBubble";

const MessageDisplay = ({ username, messagesObject, chatRoomList }) => {
  const messageSection = useRef();

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    let isCancelled = false;
    const runOnce = async () => {
      await timeout(5);
      if (!isCancelled) {
        const containerList = messageSection.current.getElementsByClassName(
          "messageBubbleContainer"
        );
        let preContainer = null;
        for (const container of containerList) {
          if (preContainer === null) {
            preContainer = container;
            continue;
          }

          if (container.dataset.username === preContainer.dataset.username) {
            if (
              container.parentNode.getElementsByClassName("dateDiv")[0]
                .innerHTML === "NULL"
            )
              preContainer.dataset.contMessage = "true";
          }
          preContainer = container;
        }

        // Auto Scroll to bottom
        messageSection.current.scrollTop = messageSection.current.scrollHeight;
      }
    };

    runOnce();
    return () => {
      isCancelled = true;
    };
  }, [messagesObject, chatRoomList]);

  const getLocalDate = (objDate) => {
    return `${objDate.getDate()}/${
      objDate.getMonth() + 1
    }/${objDate.getFullYear()}`;
  };

  const getDateStr = (index, messageDateStr) => {
    let messageDate = new Date(messageDateStr);
    let todayDate = new Date();

    if (index === 0) {
      if (
        messageDate.getMonth() === todayDate.getMonth() &&
        messageDate.getFullYear() === todayDate.getFullYear()
      ) {
        if (messageDate.getDate() + 1 === todayDate.getDate())
          return "Yesterday";
        if (messageDate.getDate() === todayDate.getDate()) return "Today";
      }
      return `${messageDate.getDate()} ${messageDate.toLocaleString("default", {
        month: "short",
      })} ${
        todayDate.getFullYear() !== messageDate.getFullYear()
          ? messageDate.getFullYear()
          : ""
      }`;
    }
    let preDate = new Date(messagesObject[index - 1].time);

    if (getLocalDate(preDate) !== getLocalDate(messageDate)) {
      if (
        messageDate.getMonth() === todayDate.getMonth() &&
        messageDate.getFullYear() === todayDate.getFullYear()
      ) {
        if (messageDate.getDate() + 1 === todayDate.getDate())
          return "Yesterday";
        if (messageDate.getDate() === todayDate.getDate()) return "Today";
      }
      return `${messageDate.getDate()} ${messageDate.toLocaleString("default", {
        month: "short",
      })} ${
        todayDate.getFullYear() !== messageDate.getFullYear()
          ? messageDate.getFullYear()
          : ""
      }`;
    }

    return "NULL";
  };

  return (
    <section id="MessagesSection" ref={messageSection}>
      {messagesObject.map((messageObj, index) => {
        return (
          <section key={index}>
            <div
              className="dateDiv"
              data-show-date={getDateStr(index, messageObj.time)}
            >
              {getDateStr(index, messageObj.time)}
            </div>
            <MessageBubble
              text={messageObj.text.replaceAll("\\n", "\n")}
              time={messageObj.time}
              name={messageObj.from.name}
              username={messageObj.from.username}
              avatarPic={messageObj.from.avatarPic}
              primaryUserSent={messageObj.from.username === username}
            />
          </section>
        );
      })}
    </section>
  );
};

export default MessageDisplay;
