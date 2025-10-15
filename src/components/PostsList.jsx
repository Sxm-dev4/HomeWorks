import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts, createPost, deletePost } from '../store/slices/posts/Thunks/postsThunks';

import { pushNotificationRemote } from '../store/slices/notifications/Thunks/notificationsThunks';

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((s) => s.posts.list);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const add = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await dispatch(createPost(text));
    await dispatch(pushNotificationRemote(`Nuevo post: ${text}`)); 
  };

  return (
    <section>
      <h3>Posts (Lista)</h3>
      <form onSubmit={add} style={{ display: 'flex', gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué estás pensando?"
        />
        <button type="submit">Publicar</button>
      </form>

      <ul style={{ marginTop: 12 }}>
        {posts.map((p) => (
          <li key={p.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span>{p.text}</span>
            <button onClick={() => dispatch(deletePost(p.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
