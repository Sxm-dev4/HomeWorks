import React from 'react';

const ImageCard = ({ image }) => {
  const { id, title, url } = image;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={url} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          ID: {id}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;