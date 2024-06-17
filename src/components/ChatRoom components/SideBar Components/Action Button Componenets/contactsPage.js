import "../../../../styles/ChatRoomStyles/SideBar/action button page/contactsPage.css";
const ContactsPage = ({
  pageType,
  contacts,
  setContacts,
  resetActionButtonSelection,
}) => {
  const exitContainer = (e) => {
    if (
      e.target.classList.contains("wholeBlackSection") ||
      e.target.classList.contains("ContainerExit")
    ) {
      resetActionButtonSelection();
    }
  };
  return (
    <>
      <section
        id="contactsSection"
        className="wholeBlackSection"
        onClick={exitContainer}
      >
        <section id="contactsContainer" className="InnerContainer">
          <div className="ContainerExit mouseCursorHoverPointer">X</div>

          <header id="contactsHeader">
            <div id="contactsTitle">
              Flock <p>(contacts)</p>
            </div>

            <button
              id="btnFindFriends"
              className="mouseCursorHoverPointer primaryButton"
            >
              + Find Friends
            </button>
          </header>
        </section>
      </section>
    </>
  );
};

export default ContactsPage;
