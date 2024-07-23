import "../../../../styles/ChatRoomStyles/SideBar/ModalPages/settingsPage.css";
import wrench_logo from "../../../../resources/settings-header.webp";
import ProfilePicComponent from "../../../profilePicComponent";

const SettingsPage = ({ backDropClicked, openModal, closeModal }) => {
  return (
    <>
      <dialog data-modal data-settings-modal onClick={backDropClicked}>
        <section>
          <div
            className="btnExitModal mouseCursorHoverPointer"
            onClick={() => closeModal("data-settings-modal")}
          >
            X
          </div>
          <header>
            <strong>Settings</strong>
            <img src={wrench_logo} />
          </header>
          <form action="">
            <ProfilePicComponent
              avatarPic={"bird_main.webp"}
              cID={"MainSettingsAvatarPic"}
            />
            <input type="text" name="newName" />
            <input type="text" name="newUsername" />
            <input type="password" name="newPassword" />
            <input type="submit" />
          </form>
        </section>
      </dialog>
    </>
  );
};

export default SettingsPage;
