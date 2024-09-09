export type UserIdKey = `user_id_${number}`;
export type Contact = {
  id: UserIdKey;
  name: string;
  profileImg: string;
};
export type Message = {
  id: string;
  text: string;
  time: Date;
};
export type UserChatData = Contact & {
  chatData: { [key in UserIdKey]: Message[] };
};
export type LatestMessage = {
  [key in UserIdKey]: Message;
};
export type ContactSelected = Contact | null;
export type HandleContactSelected = {
  handleContactSelected: (someArg: Contact) => void;
};
export type HandleDeleteMessage = (userId: UserIdKey, messageKey: number) => void;
export type HandleAddMessage = (messsage: string) => void
