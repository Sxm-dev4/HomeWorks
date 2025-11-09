import React from 'react';
import { MenuItem } from './MenuItem';

export const Sidebar = ({ tree, onMenuSelect, selectedLink }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menú de navegación</h2>
      </div>
      
      <div className="sidebar-menu">
        {tree.root.children.map((child, index) => (
          <MenuItem
            key={index}
            node={child}
            level={0}
            onSelect={onMenuSelect}
            selectedLink={selectedLink}
          />
        ))}
      </div>
    </div>
  );
};