import { useRef, KeyboardEvent } from "react";
import { HandleAddMessage } from "../../../types/type.common";
export default function TextBox({ addMessage }: { addMessage: HandleAddMessage }) {
  const latestMessageRef = useRef<HTMLInputElement>(null);
  const sendMessageRef = useRef<HTMLDivElement>(null);
  function handleSendLatestMessage() {
    if (latestMessageRef.current != null && latestMessageRef.current.value != "") {
      addMessage(latestMessageRef.current.value);
      latestMessageRef.current.value = "";
    }
  }
  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessageRef.current?.click();
    }
  }
  return (
    <div className="textBox flex-center">
      <div className="p-3">
        <i className='bx bx-paperclip bx-sm' ></i>
      </div>
      <input
        className="chatTextBox p-3 rounded-sm"
        type="text"
        placeholder="Type a message"
        ref={latestMessageRef}
        onKeyPress={handleKeyPress}
      />
      <div
        className="p-3"
        ref={sendMessageRef}
        onClick={handleSendLatestMessage}
      >
        <i className='bx bxs-send bx-sm' ></i>
      </div>
    </div>
  );
}
