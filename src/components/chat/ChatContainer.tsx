import ChatFallback from "./ChatFallback";
import ChatHeader from "./header/ChatHeader";
import ChatBox from "./chatbox/ChatBox";
import TextBox from "./textbox/TextBox";
import "/src/assets/styles/components/chat.css";
import { useState } from "react";
import { USER_CHAT_DATA } from "../../constants/messages";
import { ContactSelected, UserChatData, UserIdKey } from "../../types/type.common";
import { addMessageToDB, deleteMessageFromDB } from "../../utils/utils.common";

export default function ChatContainer({
  contactInfo,
}: {
  contactInfo: ContactSelected;
}) {
  const [userChatData, setUserChatData] =
    useState<UserChatData>(USER_CHAT_DATA);

  function deleteMessage(userId: UserIdKey, messageKey: number) {
    const newData = deleteMessageFromDB(userChatData, userId, messageKey);
    setUserChatData(newData);
  }
  function addMessage(message: string) {
    if (contactInfo != null) {
      const newData = addMessageToDB(userChatData, contactInfo.id, message);
      setUserChatData(newData);
    }
  }
  return (
    <div className="chatContainer h-full flex-center">
      {contactInfo === null ? (
        <ChatFallback />
      ) : (
        <div className="flex-col w-100 h-full">
          <ChatHeader contactInfo={contactInfo} />
          <ChatBox
            conversation={userChatData.chatData[contactInfo.id]}
            deleteMessage={deleteMessage}
            userId={contactInfo.id}
          />
          <TextBox addMessage={addMessage} />
        </div>
      )}
    </div>
  );
}
