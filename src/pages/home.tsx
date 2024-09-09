import { useState } from "react";
import ChatContainer from "../components/chat/ChatContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import { ContactSelected, Contact } from "../types/type.common";
export default function Home() {
  const [contactSelected, setContactSelected] = useState<ContactSelected>(null);
  function handleContactSelected(contact: Contact): void {
    setContactSelected(contact);
  }
  return (
    <div className="chatApp flex-corner h-full w-full">
      <SidebarContainer handleContactSelected={handleContactSelected} />
      <ChatContainer contactInfo={contactSelected} />
    </div>
  );
}
