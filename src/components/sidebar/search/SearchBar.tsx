export default function SearchBar() {
  return (
    <div className="flex-center">
      <div className="searchBarWrapper flex-center rounded-sm">
        <div className="p-4">
          <i className='bx bx-search' ></i>
        </div>
        <input
          className="searchBar rounded-sm"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
}
