import { subscribeAuth } from '../../../../firebase/config';
import { login, logout } from '../authSlice';

export const listenAuthState = () => (dispatch) => {
  subscribeAuth((user)=>{
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    } else {
      dispatch(logout());
    }
  });
};
