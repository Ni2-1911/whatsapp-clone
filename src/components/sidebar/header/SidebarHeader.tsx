import { USER_CHAT_DATA } from "../../../constants/messages";
const ICONS = ["bxs-moon", "bxs-notification", "bxs-message-dots", "bx-dots-vertical-rounded"];
export default function SidebarHeader() {
  return (
    <div className="sidebarHeader flex-corner">
      <div className="">
        <img src={USER_CHAT_DATA.profileImg} alt="..." className="profile-img p-4" />
      </div>
      <ul className="flex-center">
        {ICONS.map((iconType) => {
          return (
            <li className="p-2" key={iconType}>
              <i className={`bx bx-sm ${iconType}`}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
