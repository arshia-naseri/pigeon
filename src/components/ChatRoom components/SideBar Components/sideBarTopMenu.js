import { useState } from "react";
import ProfilePicComponent from "../../profilePicComponent";

import ModalPages from "./modalPages/modalPages";

const SideBarTopMenu = ({ User, contacts, setContacts }) => {
  const [contactsModalStat, setContactsModalStat] = useState("Default");
  const openModal = (modalDataName) => {
    const targetModal = document.querySelector(`[${modalDataName}]`);
    targetModal.showModal();
  };

  const closeModal = (modalDataName) => {
    const targetModal = document.querySelector(`[${modalDataName}]`);
    targetModal.close();
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
            onClick={() => openModal("data-settings-modal")}
          />
          <button
            title="Contacts"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnContacts"
            onClick={() => openModal("data-contacts-modal")}
          />
          <button
            title="New Message"
            className="userActionButtons mouseCursorHoverPointer"
            id="btnNewChat"
            onClick={() => openModal("data-new-message-modal")}
          />
        </section>
      </nav>

      {/* Modals*/}
      <ModalPages
        openModal={openModal}
        closeModal={closeModal}
        User={User}
        contacts={contacts}
        contactsModalStat={contactsModalStat}
      />
    </>
  );
};

export default SideBarTopMenu;
