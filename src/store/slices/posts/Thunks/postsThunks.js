import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { setPosts, addPost, removePost } from "../postsSlice";

const col = collection(db, "posts");

export const loadPosts = () => async (dispatch) => {
  const snap = await getDocs(col);
  const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  dispatch(setPosts(list));
};

export const createPost = (text) => (dispatch) => {
  const tempId = `tmp-${Date.now()}`;
  dispatch(addPost({ id: tempId, text, ts: Date.now() })); 

  addDoc(col, { text, ts: serverTimestamp() })
    .then(() => dispatch(loadPosts()))        
    .catch(() => dispatch(removePost(tempId))); 
};

export const deletePost = (id) => async (dispatch, getState) => {
  if (!id || typeof id !== "string") return;


  
  dispatch(removePost(id));

  try {
    if (id.startsWith("tmp-")) return;

    await deleteDoc(doc(db, "posts", id));
  } catch (e) {
    console.error("deletePost error:", e);
    dispatch(loadPosts());

  }
};
