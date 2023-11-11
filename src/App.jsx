import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./data/BaseColaboradores.js";
import Buscador from "./components/Buscador.jsx";
import Listado from "./components/Listado.jsx";
import Formulario from "./components/Formulario.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  const [error, setError] = useState({ error: "", message: "", status: "" });
  const [updatedData, setUpdatedData] = useState(BaseColaboradores);
  const [searchValue, setSearchValue] = useState("");

  function returnFilteredArr(arr) {
    return arr;
  }
  return (
    <>
      <Buscador
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        returnFiltered={returnFilteredArr}
      />
      <section className="cont">
        <Listado
          updatedData={updatedData}
          searchValue={searchValue}
          setUpdatedData={setUpdatedData}
          returnFiltered={returnFilteredArr}
        />
        <Formulario
          errorState={error}
          setError={setError}
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
          BaseColaboradores={BaseColaboradores}
        />
        <Alert error={error} />
      </section>
    </>
  );
}

export default App;

