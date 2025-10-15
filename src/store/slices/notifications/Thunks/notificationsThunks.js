import { collection, addDoc, getDocs, orderBy, query, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { clearNotifications, pushNotification, popNotification } from '../notificationsSlice';

const col = collection(db, 'notifications');

export const loadNotifications = () => async (dispatch) => {
  const snap = await getDocs(query(col, orderBy('ts', 'asc')));
  const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  dispatch(clearNotifications());
  list.forEach(n => dispatch(pushNotification(n)));
};


export const pushNotificationRemote = (text) => (dispatch) => {
  const tempId = `tmp-${Date.now()}`;
  dispatch(pushNotification({ id: tempId, text })); 
  addDoc(col, { text, ts: serverTimestamp() })
    .then(() => dispatch(loadNotifications())) 
    .catch(() => dispatch(popNotification())); 
};

export const popNotificationRemote = () => async (dispatch, getState) => {
  const stack = getState().notifications.stack;
  if (!stack.length) return;
  const top = stack[stack.length - 1];

  dispatch(popNotification()); 
  try {
    if (top.id && !String(top.id).startsWith('tmp-')) {
      await deleteDoc(doc(db, 'notifications', top.id));
    }
  } catch {

  }
};
