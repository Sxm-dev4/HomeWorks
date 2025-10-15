import { collection, addDoc, getDocs, orderBy, query, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { clearQueue, enqueue, dequeue } from '../messagesSlice';

const col = collection(db, 'outbox');

export const loadQueue = () => async (dispatch) => {
  const snap = await getDocs(query(col, orderBy('ts', 'asc')));
  const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  dispatch(clearQueue());
  list.forEach(m => dispatch(enqueue(m)));
};


export const enqueueRemote = (text) => (dispatch) => {
  const tempId = `tmp-${Date.now()}`;
  dispatch(enqueue({ id: tempId, text })); 

  addDoc(col, { text, ts: serverTimestamp() })
    .then(() => dispatch(loadQueue()))
    .catch(() => {
      dispatch(loadQueue());
    });
};

export const dequeueRemote = () => async (dispatch, getState) => {
  const q = getState().messages.queue;
  if (!q.length) return;
  const front = q[0];

  dispatch(dequeue()); 
  try {
    if (front.id && !String(front.id).startsWith('tmp-')) {
      await deleteDoc(doc(db, 'outbox', front.id));
    }
  } catch {

    dispatch(loadQueue());
  }
};
