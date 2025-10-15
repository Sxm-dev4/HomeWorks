import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "../store/Slices/auth/Thunks/registerAuth";


export const Registro = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    dispatch(registerAuth(email, password));
  };

  return (
    <>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Correo" value={formState.email} onChange={onInputChange} />
        <input name="password" type="password" placeholder="Contraseña" value={formState.password} onChange={onInputChange} />
        <button type="submit">Crear cuenta</button>
      </form>
    </>
  );
};
