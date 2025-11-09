import React, { useState } from 'react';
import {ChevronDown } from 'lucide-react';

export const MenuItem = ({ node, level = 0, onSelect, selectedLink }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children.length > 0;
  const isSelected = selectedLink === node.value.link;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    onSelect(node.value);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        className={`menu-item ${isSelected ? 'selected' : ''}`}
      >
        <span className="menu-item-title">{node.value.title}</span>
        {hasChildren && (
          <span className={`menu-item-icon ${isOpen ? 'rotated' : ''}`}>
            <ChevronDown size={16} />
          </span>
        )}
      </div>
      
      {isOpen && hasChildren && (
        <div className="menu-children">
          {node.children.map((child, index) => (
            <MenuItem
              key={index}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              selectedLink={selectedLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};