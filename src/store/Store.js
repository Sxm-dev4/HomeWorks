import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth/authSlice';
import posts from './slices/posts/postsSlice';
import notifications from './slices/notifications/notificationsSlice';
import messages from './slices/messages/messagesSlice';

export const store = configureStore({
  reducer: { auth, posts, notifications, messages },
});
