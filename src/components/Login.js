import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginEmailPassword } from "../store/Slices/auth/Thunks/loginEmailPassword";
import { loginWithGoogle } from "../store/Slices/auth/Thunks/loginWithGoogle";

export const Login = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((s) => s.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(form.email, form.password));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
        <input name="email" type="email" placeholder="Correo" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
        <input name="password" type="password" placeholder="Contraseña" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})}/>
        <button type="submit" disabled={status==="checking"}>Ingresar</button>
      </form>
      <div style={{ marginTop: 12 }}>
        <button onClick={()=>dispatch(loginWithGoogle())} disabled={status==="checking"}>Ingresar con Google</button>
      </div>
      {errorMessage && <p style={{ color:"crimson" }}>{errorMessage}</p>}
    </div>
  );
};
