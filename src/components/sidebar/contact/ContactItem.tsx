import { HandleContactSelected, Contact } from "../../../types/type.common";

export default function ContactItem(
  contact: { info: Contact } & HandleContactSelected
) {
  function setContactSelected() {
    contact.handleContactSelected(contact.info);
  }
  return (
    <>
      <div
        className="contactItem flex-corner cursor-pointer"
        onClick={() => setContactSelected()}
      >
        <div className="flex-center">
          <img
            src={contact.info.profileImg}
            alt="..."
            className="profile-img p-3"
          />
          <p>{contact.info.name}</p>
        </div>
      </div>
    </>
  );
}
