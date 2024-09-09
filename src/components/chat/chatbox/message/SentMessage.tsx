import DeleteMessage from "./DeleteMessage";
import { getTimeFormat } from "../../../../utils/utils.common";
import { HandleDeleteMessage, UserIdKey } from "../../../../types/type.common";
export default function SentMessage({ text, time, userId, messageKey, deleteMessage }: {
  text: string;
  time: Date;
  userId: UserIdKey;
  messageKey: number;
  deleteMessage: HandleDeleteMessage
}) {
  return (
    <div className="messageBox flex-center rounded-md">
      <p className="messageText">
        {text}
      </p>
      <div className="messageUtil flex-col p-2">
        <DeleteMessage
          userId={userId}
          messageKey={messageKey}
          deleteMessage={deleteMessage}
        />
        <div className="text-800 text-sm">{getTimeFormat(time)}</div>
      </div>
    </div>
  );
}
