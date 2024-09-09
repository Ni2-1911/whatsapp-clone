import { Message, UserChatData, UserIdKey } from "../types/type.common";

export function getTimeFormat(date: Date) {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (hours.length === 1) hours = "0" + hours;
  if (minutes.length === 1) minutes = "0" + minutes;
  return `${hours}:${minutes}`;
}
export function deleteMessageFromDB(
  userChatData: UserChatData,
  userId: UserIdKey,
  messageKey: number
): UserChatData {
  const Data = userChatData.chatData[userId];
  Data.splice(messageKey, 1);
  const newChatData = {
    ...userChatData,
    chatData: { ...userChatData.chatData, [userId]: Data },
  };
  return newChatData;
}
export function generateNewMessage(message: string): Message {
  const newMessage: Message = {
    id: Date.now().toString(),
    text: message,
    time: new Date(Date.now()),
  };
  return newMessage;
}
export function addMessageToDB(
  userChatData: UserChatData,
  userId: UserIdKey,
  message: string
): UserChatData {
  const newMessage: Message = generateNewMessage(message);
  const newItem = [...userChatData.chatData[userId], newMessage];
  const newChatData = {
    ...userChatData,
    chatData: { ...userChatData.chatData, [userId]: newItem },
  };
  return newChatData;
}
