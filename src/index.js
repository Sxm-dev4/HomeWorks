import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApps from './FirstApps.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApps value={10} />
    
  </React.StrictMode>
);

