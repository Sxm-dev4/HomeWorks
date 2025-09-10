import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay imágenes para mostrar</p>
        <p className="text-gray-400 text-sm mt-2">
          Agrega imagenes para mostrarlas aquí
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;