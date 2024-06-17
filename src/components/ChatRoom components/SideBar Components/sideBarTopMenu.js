import { useState, useRef } from "react";
import ProfilePicComponent from "../../profilePicComponent";
// import NewMessagePage from "./Action Button Componenets/newMessagePage";
// import ContactsPage from "./Action Button Componenets/contactsPage";

import "../../../styles/ChatRoomStyles/SideBar/actionDialog/newMessagePage.css";

const SideBarTopMenu = ({ User, contacts, setContacts }) => {
  const newMessageDialog = document.querySelector("[data-new-message]");

  const openNewMessageDialog = () => {
    newMessageDialog.showModal();
  };
  const closeNewMessageDialog = () => {
    newMessageDialog.close();
  };

  const backDropClicked = (e) => {
    const clickedModal = e.currentTarget;
    const dimentions = clickedModal.getBoundingClientRect();
    if (
      e.clientX < dimentions.left ||
      e.clientX > dimentions.right ||
      e.clientY < dimentions.top ||
      e.clientY > dimentions.bottom
    ) {
      clickedModal.close();
    }
  };

  return (
    <>
      {/* Top Menu */}
      <nav id="topMenuContainer">
        <ProfilePicComponent
          cID="mainUserProfilePicContainer"
          avatarPic={User.avatarPic}
        />
        <section id="MainUsernameSection">
          <p className="txtOverFlowStyle" title={User.name}>
            {User.name}
          </p>
          <p title={`@${User.username}`}>@{User.username}</p>
        </section>
        <section id="UserActionSection">
          <button
            title="Settings"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnSettings"
          />
          <button
            title="Contacts"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnContacts"
          />
          <button
            title="New Message"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnNewChat"
            onClick={() => openNewMessageDialog()}
          />
        </section>
      </nav>

      {/* Modals for popup*/}
      <dialog data-modal data-new-message onClick={backDropClicked}>
        <section>
          <div
            className="ContainerExit mouseCursorHoverPointer"
            onClick={() => closeNewMessageDialog()}
          >
            X
          </div>

          <section id="actionButtons">
            <button className="mouseCursorHoverPointer">
              Message a Pigeon
            </button>
            <button className="mouseCursorHoverPointer">
              Create a new Park
            </button>
          </section>
        </section>
      </dialog>

      {/* <dialog data-modal data-newMessage>
        <section>
          <div
            className="ContainerExit mouseCursorHoverPointer"
            onClick={() => closeNewMessageDialog()}
          >
            X
          </div>

          <section id="actionButtons">
            <button className="mouseCursorHoverPointer">
              Message a Pigeon
            </button>
            <button className="mouseCursorHoverPointer">
              Create a new Park
            </button>
          </section>
        </section>
      </dialog> */}
    </>
  );
};

export default SideBarTopMenu;
