import "../../assets/styles/components/sidebar.css";
import SidebarHeader from "./header/SidebarHeader";
import SearchBar from "./search/SearchBar";
import ContactList from "./contact/ContactList";
import { HandleContactSelected } from "../../types/type.common";
export default function SidebarContainer(
  handleUserSelected: HandleContactSelected
) {
  return (
    <>
      <div className="sidebarContainer h-full">
        <SidebarHeader />
        <SearchBar />
        <ContactList {...handleUserSelected} />
      </div>
    </>
  );
}
