import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'notifications',
  initialState: { stack: [] }, 
  reducers: {
    pushNotification: (s,{payload})=>{ s.stack.push(payload); },
    popNotification:  (s)=>{ s.stack.pop(); },
    clearNotifications:(s)=>{ s.stack = []; },
  }
});

export const { pushNotification, popNotification, clearNotifications } = slice.actions;
export default slice.reducer;
export const selectNotificationsCount = (state) => state.notifications.stack.length;
