/**
 * Controlled search input used on the directory page.
 * @param {{search: string, setSearch: function}} props
 * @returns {JSX.Element}
 */
function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by name or department"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
