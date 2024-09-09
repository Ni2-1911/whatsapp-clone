import { Contact } from "../../../types/type.common";

export default function ChatHeader({ contactInfo }: { contactInfo: Contact }) {
  return (
    <div className="chatHeader flex-corner">
      <div className="flex-center">
        <img src={contactInfo.profileImg} alt="..." className="p-3 profile-img" />
        <h3 className="text-wt-300">{contactInfo.name}</h3>
      </div>
      <div>
        <ul className="flex-center">
          <li className="p-2">
            <i className='bx bx-search bx-sm' ></i>
          </li>
          <li className="p-2">
            <i className='bx bx-dots-vertical-rounded bx-sm' ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
