import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Music, Globe, CheckCircle, BookOpen, Code } from 'lucide-react';
import './App.css';
import LinkedListPage from './pages/LinkedListPage';
import DoublyLinkedListPage from './pages/DoublyLinkedListPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-black/30 backdrop-blur-lg rounded-full border border-purple-500/30">
              <Code size={48} className="text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Estructura de Datos II
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Challenge-07
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link 
            to="/linked"
            className="group bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="text-center space-y-6">
              <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl">
                <Music size={64} className="mx-auto text-purple-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Music Player
                </h2>
                <p className="text-lg text-gray-300 mb-4 font-semibold">Lista Enlazada Simple</p>
                <p className="text-gray-400 leading-relaxed">
                  Reproduce canciones en orden secuencial usando una lista enlazada simple. 
                </p>
              </div>
              <div className="flex justify-center">
                <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm text-purple-300 border border-purple-500/30">
                  Ver Implementación 
                </span>
              </div>
            </div>
          </Link>

          <Link 
            to="/doubly-linked"
            className="group bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="text-center space-y-6">
              <div className="p-6 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl">
                <Globe size={64} className="mx-auto text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Browser History
                </h2>
                <p className="text-lg text-gray-300 mb-4 font-semibold">Lista Doblemente Enlazada</p>
                <p className="text-gray-400 leading-relaxed">
                  Navega hacia atrás y adelante en el historial del navegador. 
                </p>
              </div>
              <div className="flex justify-center">
                <span className="px-4 py-2 bg-cyan-600/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
                  Ver Implementación
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Challenge Info */}
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-600/20 rounded-lg">
              <BookOpen className="text-green-400" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Challenge 07</h3>
              <p className="text-gray-400">Implementación de estructuras de datos lineales</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-white mb-2">Lista Enlazada Simple</h4>
                <p className="text-gray-300 text-sm">
                  Reproduce canciones en orden secuencial. Implementa operaciones de avance y reinicio 
                  utilizando nodos con referencias unidireccionales.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-white mb-2">Lista Doblemente Enlazada</h4>
                <p className="text-gray-300 text-sm">
                  Navega en el historial del navegador. Implementa navegación bidireccional 
                  con nodos que mantienen referencias anterior y siguiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linked" element={<LinkedListPage />} />
        <Route path="/doubly-linked" element={<DoublyLinkedListPage />} />
      </Routes>
    </Router>
  );
}

export default App;