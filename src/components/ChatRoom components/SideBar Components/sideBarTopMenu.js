import { useState, useRef } from "react";
import ProfilePicComponent from "../../profilePicComponent";

import "../../../styles/ChatRoomStyles/SideBar/actionDialog/newMessagePage.css";
import "../../../styles/ChatRoomStyles/SideBar/actionDialog/contactsPage.css";

const SideBarTopMenu = ({ User, contacts, setContacts }) => {
  const newMessageModal = useRef();
  const contactsModal = useRef();

  const [contactsModalStat, setContactsModalStat] = useState("Default");

  const openNewMessageModal = () => {
    newMessageModal.current.showModal();
  };
  const closeNewMessageModal = () => {
    newMessageModal.current.close();
  };
  const openContactsModal = () => {
    contactsModal.current.showModal();
  };
  const closeModalModal = () => {
    contactsModal.current.close();
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

  while (contacts === undefined) {
    return <></>;
  }
  console.log(contacts);
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
            onClick={() => openContactsModal()}
          />
          <button
            title="New Message"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnNewChat"
            onClick={() => openNewMessageModal()}
          />
        </section>
      </nav>

      {/* Modals for popup*/}
      <dialog
        data-modal
        data-new-message-modal
        ref={newMessageModal}
        onClick={backDropClicked}
      >
        <section>
          <div
            className="btnExitModal mouseCursorHoverPointer"
            onClick={() => closeNewMessageModal()}
          >
            X
          </div>

          <section className="actionButtons">
            <button className="mouseCursorHoverPointer">
              Message a Pigeon
            </button>
            <button className="mouseCursorHoverPointer">
              Create a new Park
            </button>
          </section>
        </section>
      </dialog>

      <dialog
        data-modal
        data-contacts-modal
        ref={contactsModal}
        onClick={backDropClicked}
      >
        <section>
          <div
            className="btnExitModal mouseCursorHoverPointer"
            onClick={() => closeModalModal()}
          >
            X
          </div>
          <header>
            <div className="ModalTitle">
              Flock<div>(Contacts)</div>
            </div>
            {contactsModalStat === "Default" && (
              <button className="btnFindFriends">+ Find Friends</button>
            )}
          </header>
          <main className="AllContactsContainer">
            {contacts.map((contact, index) => {
              return (
                <section className="ContactBlock" key={index}>
                  <section className="ContactContainer">
                    <ProfilePicComponent avatarPic={contact.avatarPic} />
                    <section className="ContactInfo">
                      <div>{contact.name}</div>
                      <div>@{contact.username}</div>
                    </section>
                  </section>
                  {contactsModalStat === "Default" && (
                    <button>Send a Hi!</button>
                  )}
                </section>
              );
            })}
          </main>
        </section>
      </dialog>
    </>
  );
};

export default SideBarTopMenu;
