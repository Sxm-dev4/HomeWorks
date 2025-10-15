import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, subscribeMessages, unsubscribeMessages } from "../store/Slices/chat/Thunks/chatThunks";

export const ChatMe = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector(s=>s.chat);
  const [text, setText] = useState("");

  useEffect(()=>{
    dispatch(subscribeMessages());
    return ()=>{ dispatch(unsubscribeMessages()); };
  },[dispatch]);

  const onSend = (e)=>{
    e.preventDefault();
    if(!text.trim()) return;
    dispatch(sendMessage(text.trim()));
    setText("");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Realtime Chat</h2>
      <form onSubmit={onSend} style={{ display:"flex", gap:8 }}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Escribe un mensaje..." />
        <button type="submit">Enviar</button>
      </form>
      <ul style={{ marginTop: 16 }}>
        {messages.map(m => <li key={m.id}>{m.text}</li>)}
      </ul>
    </div>
  );
};