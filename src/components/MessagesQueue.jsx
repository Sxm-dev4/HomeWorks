import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {enqueueRemote,dequeueRemote,loadQueue} from '../store/slices/messages/Thunks/messagesThunks';

export default function MessagesQueue() {
  const dispatch = useDispatch();
  const queue = useSelector((s) => s.messages.queue);
  const [text, setText] = useState('');

  
  useEffect(() => {
    if (!queue.length === 0) dispatch(loadQueue());
  }, [ queue.length,dispatch]); 
  const send = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await dispatch(enqueueRemote(text)); 
    setText('');
  };

  const processOne = async () => {
    if (!queue.length) return;
    await dispatch(dequeueRemote()); 
  };

  return (
    <section>
      <h3>Mensajes pendientes (Cola)</h3>
      <form onSubmit={send} style={{ display: 'flex', gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Mensaje directo..."
        />
        <button type="submit">Encolar</button>
        <button type="button" onClick={processOne} disabled={!queue.length}>
          Procesar (dequeue)
        </button>
      </form>

      <ul style={{ marginTop: 8 }}>
        {queue.map((m, i) => (
          <li key={m.id ?? i}>{m.text}</li>
        ))}
      </ul>
    </section>
  );
}
