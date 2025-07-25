const Filter = ({ filter, setFilter, setSortOrder }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="completed">Concluídas</option>
            <option value="incomplete">Pendentes</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button onClick={() => setSortOrder('asc')}>Crescente</button>
          <button onClick={() => setSortOrder('desc')}>Decrescente</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;