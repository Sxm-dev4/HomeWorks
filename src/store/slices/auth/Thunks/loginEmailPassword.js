import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase/config';
import { checking, login, logout } from '../authSlice';

export const loginEmailPassword = (email, password) => async (dispatch) => {
  try {
    dispatch(checking());
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid, email: e, displayName, photoURL } = user;
    dispatch(login({ uid, email: e, displayName, photoURL }));
  } catch (e) {
    dispatch(logout({ errorMessage: 'No se pudo iniciar sesión' }));
  }
};
