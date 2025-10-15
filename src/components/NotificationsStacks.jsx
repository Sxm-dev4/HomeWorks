import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popNotification } from '../store/slices/notifications/notificationsSlice';

export default function NotificationsStacks(){
  const dispatch = useDispatch();
  const stack = useSelector(s=>s.notifications.stack); 

  return (
    <section>
      <h3>Notificaciones (Pila)</h3>
      <button onClick={()=>dispatch(popNotification())} disabled={!stack.length}>Pop (leer última)</button>
      <ol reversed style={{marginTop:8}}>
        {stack.slice().reverse().map((n,idx)=>(
          <li key={idx}>{n.text || JSON.stringify(n)}</li>
        ))}
      </ol>
    </section>
  );
}
