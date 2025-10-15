import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "../store/slices/auth/Thunks/registerAuth";

export const Registro = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    dispatch(registerAuth(form.email, form.password));
  };

  return (
    <div>
      <h3>Registro</h3>
      <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
        <input name="email" type="email" placeholder="Correo" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
        <input name="password" type="password" placeholder="Contraseña" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};
