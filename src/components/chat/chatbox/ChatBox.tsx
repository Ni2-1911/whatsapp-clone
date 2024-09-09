import { HandleDeleteMessage, Message, UserIdKey } from "../../../types/type.common";
import DefaultMessage from "./message/DefaultMessage";
import SentMessage from "./message/SentMessage";
import { useRef, useEffect } from "react";
export default function ChatBox({ conversation, deleteMessage, userId }: {
  conversation: Message[],
  deleteMessage: HandleDeleteMessage,
  userId: UserIdKey
}) {
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);
  return (
    <div className="chatBox flex-col">
      <DefaultMessage />
      {conversation ? (
        <>
          {conversation.map((message: Message, index: number) => {
            return (
              <SentMessage
                key={message.id}
                text={message.text}
                time={message.time}
                userId={userId}
                messageKey={index}
                deleteMessage={deleteMessage}
              />
            );
          })}
        </>
      ) : null}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
