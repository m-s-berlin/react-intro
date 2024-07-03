export default function TeamSearch({ setSearchTerm }) {
  //   console.log(filteredTeams, searchTerm);

  return (
    <input
      placeholder="search..."
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
  );
}
