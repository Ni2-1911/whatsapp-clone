import { HandleDeleteMessage, UserIdKey } from "../../../../types/type.common";

export default function DeleteMessage({
  messageKey,
  deleteMessage,
  userId,
}: {
  messageKey: number,
  deleteMessage: HandleDeleteMessage,
  userId: UserIdKey
}) {
  return (
    <details>
      <summary>
        <i className='bx bx-chevron-down bx-sm'></i>
      </summary>
      <div className="menu">
        <ul className="menuList">
          <li className="menuListItem">
            <p
              className="menuListAction"
              onClick={() => deleteMessage(userId, messageKey)}
            >
              Delete
            </p>
          </li>
        </ul>
      </div>
    </details>
  );
}
