import Table from "react-bootstrap/Table";

const Listado = ({
  updatedData,
  searchValue,
  setUpdatedData,
  returnFiltered,
}) => {
  function getKeys(data, searchValue) {
    const keys = Object.keys(data).slice(1);
    for (const key of keys) {
      if (data[key].toLowerCase().includes(searchValue)) {
        return key;
      }
    }
  }

  function deleteItem(id) {
    const updatedTable = updatedData.filter((item) => item.id !== id);
    setUpdatedData([...updatedTable]);
  }

  const getData = [...updatedData];

  const filtered = getData.filter((data) => {
    const key = getKeys(data, searchValue);

    return searchValue.toLowerCase() === "" ? getData : key;
  });

  const tableData = filtered.map((collab) => (
    <tr key={collab.id}>
      <td>{collab.nombre}</td>
      <td>{collab.correo}</td>
      <td>{collab.edad}</td>
      <td>{collab.cargo}</td>
      <td>{collab.telefono}</td>
      <td className="w-0 d-flex justify-content-center">
        <button
          className="btn btn-danger"
          onClick={() => deleteItem(collab.id)}
        >
          X
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="table-responsive table-cont" style={{ overflowX: "auto" }}>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </div>
  );
};

export default Listado;
