import NewMessageModal from "./_newMessageModal";
import ContactsPage from "./_contactsPage";
import SettingsPage from "./_settingsPage";

const ModalPages = ({
  openModal,
  closeModal,
  User,
  contacts,
  contactsModalStat,
}) => {
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
      <NewMessageModal
        backDropClicked={backDropClicked}
        openModal={openModal}
        closeModal={closeModal}
      />
      <ContactsPage
        backDropClicked={backDropClicked}
        openModal={openModal}
        closeModal={closeModal}
        contacts={contacts}
        contactsModalStat={contactsModalStat}
      />

      <SettingsPage
        backDropClicked={backDropClicked}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default ModalPages;
