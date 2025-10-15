import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'messages',
  initialState: { queue: [] }, 
  reducers: {
    enqueue: (s,{payload})=>{ s.queue.push(payload); },
    dequeue: (s)=>{ if (s.queue.length) s.queue.shift(); },
    clearQueue: (s)=>{ s.queue = []; },
  }
});

export const { enqueue, dequeue, clearQueue } = slice.actions;
export default slice.reducer;
