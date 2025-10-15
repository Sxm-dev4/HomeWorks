import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotificationsCount } from '../store/slices/notifications/notificationsSlice';
import { IoNotificationsCircle } from 'react-icons/io5';

export default function Header(){
  const count = useSelector(selectNotificationsCount);
  return (
    <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee'}}>
      <strong> Red Social Uao</strong>
      <span> <IoNotificationsCircle/>  {count}</span>
    </header>
  );
}
