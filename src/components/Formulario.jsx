import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ updatedData, setUpdatedData, setError }) => {
  const [data, setData] = useState({
    id: uuidv4(),
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [inputFocus, setInputFocus] = useState({
    isAgeInputFocused: null,
    isPhoneNumberInputFocused: null,
  });
  const { isAgeInputFocused, isPhoneNumberInputFocused } = inputFocus;
  const inputValues = Object.values(data).slice();
  const { correo, edad, telefono } = data;
  /* Email Regex */
  const emailPattern =
    /^[a-zA-Z0-9._%+-ñÑáéíóúÁÉÍÓÚ]+@[a-zA-Z0-9.-ñÑáéíóúÁÉÍÓÚ]+\.[a-zA-Z]{2,4}$/;
  /* Age Regex */
  const agePattern = /^(1[6-9]|[2-9][0-9]|100)$/;
  const phoneNumberPattern = /^9\s\d{4}\s\d{4}$/;
  const phoneNumberValidation = phoneNumberPattern.test(telefono);
  const emailValidation = emailPattern.test(correo);
  const ageValidation = agePattern.test(edad);
  function handleSubmit(e) {
    e.preventDefault();
    const areInputValuesFilledIn = inputValues.some((item) => item === "");
    if (
      areInputValuesFilledIn ||
      !emailValidation ||
      !ageValidation ||
      !phoneNumberValidation
    ) {
      setError({
        status: "alert-danger",
        message: "Debes completar el formulario",
        error: true,
      });
      return;
    }
    setError({
      status: "alert-success",
      message: "Registro exitoso",
      error: false,
    });
    setUpdatedData([...updatedData, data]);
    setData({
      id: uuidv4(),
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });

    setInputFocus({
      isAgeInputFocused: false,
      isPhoneNumberInputFocused: false,
    });
  }

  const handleFocus = (e) => {
    const { target } = e;
    if (target.id !== "formAge" || target.id !== "formPhonenumber")
      setError({ status: "", message: "", error: "" });

    if (target.id === "formAge")
      setInputFocus((input) => ({ ...input, isAgeInputFocused: true }));
    else {
      setInputFocus((input) => ({ ...input, isAgeInputFocused: false }));
    }

    if (target.id === "formPhonenumber")
      setInputFocus((input) => ({ ...input, isPhoneNumberInputFocused: true }));
    else {
      setInputFocus((input) => ({
        ...input,
        isPhoneNumberInputFocused: false,
      }));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <section className="form-cont">
      <Form onSubmit={handleSubmit}>
        <h1 className="fs-2 text-center">Agregar Colaborador</h1>
        <Form.Group className="mb-3 my-3" controlId="formName">
          <Form.Control
            type="name"
            placeholder="Ingresa nombre"
            value={data.nombre}
            onChange={handleChange}
            onFocus={handleFocus}
            name="nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="myemail@example.com"
            value={data.correo}
            onChange={handleChange}
            onFocus={handleFocus}
            name="correo"
          />
        </Form.Group>
        <Form.Group className="mb-3 my-3" controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Edad del colaborador"
            value={data.edad}
            onChange={handleChange}
            onFocus={handleFocus}
            name="edad"
            maxLength={3}
          />

          <Form.Text>
            {!ageValidation && isAgeInputFocused ? (
              <p className="alert alert-info p-2 my-2">
                Debes tener 16 años o más para registrarte
              </p>
            ) : (
              ""
            )}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-1 my-3" controlId="formRole">
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            value={data.cargo}
            onChange={handleChange}
            name="cargo"
          />
        </Form.Group>
        <Form.Group className="mb-1 my-3" controlId="formPhonenumber">
          <Form.Control
            type="text"
            placeholder="Teléfono del colaborador: 9 XXXX XXXX"
            value={data.telefono}
            onChange={handleChange}
            onFocus={handleFocus}
            name="telefono"
            maxLength={11}
          />
          <Form.Text>
            {!phoneNumberValidation && isPhoneNumberInputFocused ? (
              <p className="alert alert-warning p-2 my-2">
                Escribe un número valido
              </p>
            ) : (
              ""
            )}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success" className="my-3 fs-5 w-100 ">
          Agregar al colaborador
        </Button>
      </Form>
    </section>
  );
};

export default Formulario;
