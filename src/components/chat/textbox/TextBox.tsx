import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { HandleAddMessage } from "../../../types/type.common";
export default function TextBox({ addMessage }: { addMessage: HandleAddMessage }) {
  const [latestMessage, setLatestMessage] = useState<string>("");
  const sendMessageRef = useRef<HTMLDivElement>(null);
  function handleLatestMessage(e: ChangeEvent<HTMLInputElement>) {
    setLatestMessage(e.target.value);
  }
  function handleSendLatestMessage() {
    if (latestMessage != "") {
      addMessage(latestMessage);
    }
    setLatestMessage("");
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
        value={latestMessage}
        onChange={handleLatestMessage}
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
