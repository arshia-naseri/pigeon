import ProfilePicComponent from "../../../profilePicComponent";
import "../../../../styles/ChatRoomStyles/SideBar/ModalPages/contactsPage.css";

const ContactsPage = ({
  backDropClicked,
  openModal,
  closeModal,
  contacts,
  contactsModalStat,
}) => {
  return (
    <>
      <dialog data-modal data-contacts-modal onClick={backDropClicked}>
        <section>
          <div
            className="btnExitModal mouseCursorHoverPointer"
            onClick={() => closeModal("data-contacts-modal")}
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
                    <ProfilePicComponent
                      avatarPic={contact.avatarPic}
                      classList={"ContactsProfilePic"}
                    />
                    <section className="ContactInfo">
                      <div>
                        <strong>{contact.name}</strong>
                      </div>
                      <div>@{contact.username}</div>
                    </section>
                  </section>
                  {contactsModalStat === "Default" && (
                    <button
                      className="mouseCursorHoverPointer"
                      data-contacts-stat="Default"
                    >
                      Send a Hi!
                    </button>
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

export default ContactsPage;
