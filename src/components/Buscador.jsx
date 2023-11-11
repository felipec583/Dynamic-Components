const Buscador = ({ searchValue, setSearchValue }) => {
  function searchQuery(e) {
    const searchV = e.target.value;
    setSearchValue(searchV);
  }

  return (
    <div className="search-bar-cont">
      <input
        type="text"
        id="search-bar"
        placeholder="Busca un colaborador"
        onChange={searchQuery}
        value={searchValue}
      />
    </div>
  );
};

export default Buscador;
