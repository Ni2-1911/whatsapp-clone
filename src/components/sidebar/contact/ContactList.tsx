import ContactItem from "./ContactItem";
import { CONNECTIONS } from "../../../constants/connections";
import { HandleContactSelected } from "../../../types/type.common";
export default function ContactList(handleUserSelected: HandleContactSelected) {
  return (
    <>
      <div className="contactList">
        <div className="border"></div>
        {CONNECTIONS.map((contact) => {
          return (
            <div key={contact.id}>
              <ContactItem info={contact} {...handleUserSelected} />
              <div className="border"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
