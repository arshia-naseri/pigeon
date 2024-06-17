import "../../../../styles/ChatRoomStyles/SideBar/action button page/newMessagePage.css";
import { useState } from "react";
const NewMessagePage = ({ resetActionButtonSelection }) => {
  const exitContainer = (e) => {
    if (
      e.target.id === "newMessagePanelSection" ||
      e.target.classList.contains("ContainerExit")
    ) {
      resetActionButtonSelection();
    }
  };
  return (
    <>
      <section
        id="newMessagePanelSection"
        className="wholeBlackSection"
        onClick={exitContainer}
      >
        <section id="newMessagePanelContainer" className="InnerContainer">
          <div className="ContainerExit mouseCursorHoverPointer">X</div>

          <section id="actionButtons">
            <button className="mouseCursorHoverPointer">
              Message a Pigeon
            </button>
            <button className="mouseCursorHoverPointer">
              Create a new Park
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default NewMessagePage;
