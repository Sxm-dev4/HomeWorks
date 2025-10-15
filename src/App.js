import React from "react";
import { useSelector } from "react-redux";
import { Login } from "./components/Login";
import { Registro } from "./components/Registro";
import { LogoutButton } from "./components/LogoutButton";
import { Crud } from "./components/Crud";
import { ChatMe } from "./components/ChatMe";

export default function App() {
  const { status, displayName, email, errorMessage } = useSelector((s) => s.auth);

  const Box = ({ children }) => (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      padding: 16,
      marginBottom: 24,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ maxWidth: 880, margin: "32px auto", padding: "0 16px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 8 }}>Firebase + Redux Challenge 11, 12 y 13</h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>
        Autenticación (email/Google)  + Firestore CRUD + Chat en tiempo real
    </p>

      {status === "authenticated" ? (
        <>
          <Box>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <h2 style={{ margin: "0 0 4px" }}>
                  Bienvenido {displayName || email}
                </h2>
                <small style={{ color: "#6b7280" }}>
                  Sesión iniciada
                </small>
              </div>
              <LogoutButton />
            </div>
          </Box>

          <Box>
            <h2 style={{ marginTop: 0 }}>Challenge 12 — Firestore CRUD</h2>
            <p style={{ color: "#6b7280", marginTop: 0 }}>
              Crea, actualiza y elimina documentos en tu colección.
            </p>
            <Crud />
          </Box>

          <Box>
            <h2 style={{ marginTop: 0 }}>Challenge 13 — Chat en tiempo real</h2>
            <p style={{ color: "#6b7280", marginTop: 0 }}>
              Envía mensajes en tiempo real 
            </p>
            <ChatMe />
          </Box>
        </>
      ) : (
        <>
          <Box>
            <h2 style={{ marginTop: 0 }}>Challenge 11 — Login y Registro</h2>
            <p style={{ color: "#6b7280", marginTop: 0 }}>
              Inicia sesión con correo/contraseña o Google.
            </p>
            <Login />
            {errorMessage && (
              <p style={{ color: "crimson", marginTop: 12 }}>{errorMessage}</p>
            )}
            <Registro />
          </Box>
        </>
      )}
    </div>
  );
}
