import React, { useState, useEffect } from 'react';
import './App.css';
import ImageForm from './components/ImageForm';
import SearchFilter from './components/SearchFilter';
import ImageList from './components/ImageList';

const initialImages = [
  {
    id: 1,
    title: "Hombre codificando",
    url: "https://picsum.photos/id/1/200/300"
  },
  {
    id: 10,
    title: "Bosque",
    url: "https://picsum.photos/id/10/200/300"
  },
  {
    id: 500,
    title: "Rascacielos",
    url: "https://picsum.photos/id/500/200/300"
  }
];

function App() {
  const [images, setImages] = useState(initialImages);
  const [filteredImages, setFilteredImages] = useState(initialImages);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddImage = (newImage) => {
    const existingImage = images.find(img => img.id === newImage.id);
    
    if (existingImage) {
      alert(`Ya existe una imagen con ID ${newImage.id}. Por favor usa un ID diferente.`);
      return;
    }

    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    
    if (searchTerm) {
      const filtered = updatedImages.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(updatedImages);
    }

    alert('¡Imagen agregada exitosamente!');
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(image =>
        image.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = images.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages(images);
    }
  }, [images, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Galería de Imágenes</h1>
          <p className="mt-2 text-blue-100">
            Agrega y busca imágenes usando Picsum Photos
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ImageForm onAddImage={handleAddImage} />
        
        <SearchFilter 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Imágenes ({filteredImages.length})
            </h2>
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Limpiar Filtro
              </button>
            )}
          </div>
          
          <ImageList images={filteredImages} />
        </div>
      </main>
    </div>
  );
}

export default App;