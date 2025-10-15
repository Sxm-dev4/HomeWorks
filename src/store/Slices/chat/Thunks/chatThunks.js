import { rtdb } from "../../../../firebase/config";
import { ref, push, onValue, off, serverTimestamp } from "firebase/database";
import { setMessages } from "../chatSlice";

const PATH = "chats/demo";
let _unsub = null;

export const sendMessage = (text)=> async ()=>{
  const listRef = ref(rtdb, PATH);
  await push(listRef, { text, ts: serverTimestamp() });
};

export const subscribeMessages = ()=> async (dispatch)=>{
  const listRef = ref(rtdb, PATH);
  const handler = (snap)=>{
    const data = snap.val() || {};
    const arr = Object.entries(data).map(([id,v])=>({id,...v})).sort((a,b)=>(a.ts||0)-(b.ts||0));
    dispatch(setMessages(arr));
  };
  onValue(listRef, handler);
  _unsub = ()=> off(listRef, "value", handler);
};

export const unsubscribeMessages = ()=> async ()=>{
  if(_unsub){ _unsub(); _unsub = null; }
};