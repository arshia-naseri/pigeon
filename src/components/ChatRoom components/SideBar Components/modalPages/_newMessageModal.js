import "../../../../styles/ChatRoomStyles/SideBar/actionDialog/newMessagePage.css";

const NewMessageModal = ({ backDropClicked, openModal, closeModal }) => {
  return (
    <>
      {/* New Message Modal*/}
      <dialog data-modal data-new-message-modal onClick={backDropClicked}>
        <section>
          <div
            className="btnExitModal mouseCursorHoverPointer"
            onClick={() => closeModal("data-new-message-modal")}
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
    </>
  );
};

export default NewMessageModal;
