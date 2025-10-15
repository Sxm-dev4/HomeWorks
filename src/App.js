import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import { Login } from './components/Login';
import { Registro } from './components/Registro';
import PostsList from './components/PostsList';
import NotificationsStacks from './components/NotificationsStacks';
import MessagesQueue from './components/MessagesQueue';
import { listenAuthState } from './store/slices/auth/Thunks/listenAuthState';
import { logoutAuth } from './store/slices/auth/Thunks/logoutAuth';
import { loadNotifications } from './store/slices/notifications/Thunks/notificationsThunks';
import { loadQueue } from './store/slices/messages/Thunks/messagesThunks';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const { status, displayName, email } = useSelector((s) => s.auth);

  useEffect(() => {
    dispatch(listenAuthState());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch(loadNotifications());
      dispatch(loadQueue());
    }
  }, [status, dispatch]);

  return (
    <div style={{ maxWidth: 920, margin: '0 auto', padding: 16 }}>
      <Header />

      {status === 'authenticated' ? (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <p>Bienvenido, {displayName || email}</p>
            <button onClick={() => dispatch(logoutAuth())}>Cerrar sesión</button>
          </div>

          <hr />
          <PostsList />

          <hr />
          <NotificationsStacks />

          <hr />
          <MessagesQueue />
        </>
      ) : (
        <>
          <h2>Autenticación</h2>
          <Login />
          <Registro />
        </>
      )}
    </div>
  );
}
