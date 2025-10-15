import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../../firebase/config';
import { login } from '../authSlice';

export const registerAuth = (email, password) => async (dispatch) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: 'Usuario', photoURL: '' });
  const { uid, email: e, displayName, photoURL } = user;
  dispatch(login({ uid, email: e, displayName, photoURL }));
};
