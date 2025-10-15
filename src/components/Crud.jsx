import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, createItem, editItem, deleteItem } from "../store/Slices/firebase/Thunks/itemsThunks";

export const Crud = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(s=>s.firebase);
  const [form, setForm] = useState({ name:"", qty:1 });
  const [editId, setEditId] = useState(null);

  useEffect(()=>{ dispatch(fetchItems()); },[dispatch]);

  const submit = (e)=>{
    e.preventDefault();
    if(editId){ dispatch(editItem(editId, form)); setEditId(null); }
    else { dispatch(createItem(form)); }
    setForm({ name:"", qty:1 });
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Firestore CRUD</h2>
      <form onSubmit={submit} style={{ display:"flex", gap:8 }}>
        <input placeholder="Nombre" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input type="number" placeholder="Cantidad" value={form.qty} onChange={e=>setForm({...form, qty:Number(e.target.value)})}/>
        <button type="submit">{editId ? "Actualizar" : "Agregar"}</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p style={{color:"crimson"}}>{error}</p>}
      <ul>
        {items.map(it=>(
          <li key={it.id} style={{ display:"flex", gap:8, alignItems:"center" }}>
            <span>{it.name} — {it.qty}</span>
            <button onClick={()=>{ setEditId(it.id); setForm({ name:it.name, qty:it.qty }); }}>Editar</button>
            <button onClick={()=>dispatch(deleteItem(it.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
