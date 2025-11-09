import React from 'react';

export const StatCard = ({ label, value }) => {
  return (
    <li>
      <strong>{label}:</strong> {value}
    </li>
  );
};