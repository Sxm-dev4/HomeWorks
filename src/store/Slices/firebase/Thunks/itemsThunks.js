import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { setLoading, setError, setItems, addItemLocal, updateItemLocal, removeItemLocal } from "../firebaseSlice";

const col = collection(db, "items");

export const fetchItems = () => async (dispatch)=>{
  try{
    dispatch(setLoading(true));
    const snap = await getDocs(col);
    dispatch(setItems(snap.docs.map(d=>({id:d.id, ...d.data()}))));
  }catch{
    dispatch(setError("No se pudieron cargar los items"));
  }finally{ dispatch(setLoading(false)); }
};

export const createItem = (data)=> async (dispatch)=>{
  try{
    dispatch(setLoading(true));
    const ref = await addDoc(col, data);
    dispatch(addItemLocal({ id: ref.id, ...data }));
  }catch{
    dispatch(setError("No se pudo crear"));
  }finally{ dispatch(setLoading(false)); }
};

export const editItem = (id,data)=> async (dispatch)=>{
  try{
    dispatch(setLoading(true));
    await updateDoc(doc(db,"items",id), data);
    dispatch(updateItemLocal({id, ...data}));
  }catch{
    dispatch(setError("No se pudo actualizar"));
  }finally{ dispatch(setLoading(false)); }
};

export const deleteItem = (id)=> async (dispatch)=>{
  try{
    dispatch(setLoading(true));
    await deleteDoc(doc(db,"items",id));
    dispatch(removeItemLocal(id));
  }catch{
    dispatch(setError("No se pudo eliminar"));
  }finally{ dispatch(setLoading(false)); }
};
