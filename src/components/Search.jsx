const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <label htmlFor="search-input">Buscar tarefas:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Digite para pesquisar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
