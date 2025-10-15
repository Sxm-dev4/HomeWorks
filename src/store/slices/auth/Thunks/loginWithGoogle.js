import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../../../firebase/config';
import { checking, login, logout } from '../authSlice';

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch(checking());
    const { user } = await signInWithPopup(auth, googleProvider);
    const { uid, email, displayName, photoURL } = user;
    dispatch(login({ uid, email, displayName, photoURL }));
  } catch {
    dispatch(logout({ errorMessage: 'No se pudo iniciar con Google' }));
  }
};
