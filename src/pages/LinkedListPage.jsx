import React, { useState, useEffect } from 'react';
import { Music, Play, SkipForward, List, Home, RefreshCw } from 'lucide-react';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.originalHead = null;
  }

  append(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.originalHead = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }

  getCurrent() {
    return this.head;
  }

  next() {
    if (this.head && this.head.next) {
      this.head = this.head.next;
      return true;
    }
    return false;
  }

  reset() {
    this.head = this.originalHead;
  }

  print() {
    const values = [];
    let current = this.originalHead;
    
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    
    return values;
  }

  size() {
    return this.length;
  }
}

const mockSongs = [
  { id: 1, title: "Teenage Fever", artist: "Drake", duration: "3:40" },
  { id: 2, title: "PRIDE.", artist: "Kendrick Lamar", duration: "4:35" },
  { id: 3, title: "No Role Modelz", artist: "J.Cole", duration: "4:53" },
  { id: 4, title: "L$D", artist: "A$AP Rocky", duration: "3:58" },
  { id: 5, title: "Self Care", artist: "Mac Miller", duration: "5:45" },
  { id: 6, title: "Flex", artist: "Playboi Carti", duration: "4:00" },
  { id: 7, title: "Faneto", artist: "Chief Keef", duration: "3:26" },
  { id: 8, title: "TELEKINESIS", artist: "Travis Scott", duration: "5:53" },
];

function LinkedListPage() {
  const [playlist, setPlaylist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    const list = new LinkedList();
    mockSongs.forEach(song => list.append(song));
    setPlaylist(list);
    setCurrentSong(list.getCurrent()?.value);
    setAllSongs(list.print());
  }, []);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (playlist && playlist.next()) {
      setCurrentSong(playlist.getCurrent()?.value);
      setSongIndex(songIndex + 1);
    } else {
      playlist.reset();
      setCurrentSong(playlist.getCurrent()?.value);
      setSongIndex(0);
    }
    setIsPlaying(true);
  };

  const handleReset = () => {
    if (playlist) {
      playlist.reset();
      setCurrentSong(playlist.getCurrent()?.value);
      setSongIndex(0);
      setIsPlaying(false);
    }
  };

  const navigateHome = () => {
    window.location.href = '/';
  };

  const navigateToDoubly = () => {
    window.location.href = '/doubly-linked';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Music className="text-yellow-400" />
            Music Player - Lista Enlazada Simple
          </h1>
          <div className="flex gap-4">
            <button
              onClick={navigateHome}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <Home size={20} />
              Home
            </button>
            <button
              onClick={navigateToDoubly}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Ir a Browser History →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Now Playing</h2>
            
            {currentSong ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-center">
                  <Music size={80} className="mx-auto mb-4 text-white/90" />
                  <h3 className="text-2xl font-bold">{currentSong.title}</h3>
                  <p className="text-lg opacity-90 mt-2">{currentSong.artist}</p>
                  <p className="text-sm opacity-75 mt-1">{currentSong.duration}</p>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all hover:scale-110"
                    title="Reset Playlist"
                  >
                    <RefreshCw size={24} />
                  </button>
                  <button
                    onClick={handlePlay}
                    className={`p-4 ${isPlaying ? 'bg-green-600' : 'bg-blue-600'} hover:bg-blue-500 rounded-full transition-all hover:scale-110`}
                  >
                    <Play size={28} fill={isPlaying ? 'white' : 'none'} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all hover:scale-110"
                  >
                    <SkipForward size={24} />
                  </button>
                </div>

                <div className="text-center text-sm opacity-75">
                  Canción {songIndex + 1} de {playlist?.size() || 0}
                </div>
              </div>
            ) : (
              <p className="text-center opacity-50">No hay canciones en la lista</p>
            )}
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-400 flex items-center gap-2">
              <List size={24} />
              Playlist Completa
            </h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {allSongs.map((song, index) => (
                <div
                  key={song.id}
                  className={`p-4 rounded-lg transition-all ${
                    currentSong?.id === song.id
                      ? 'bg-blue-600/40 border border-blue-400'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-sm opacity-50">#{index + 1}</span>
                      <div>
                        <p className="font-semibold">{song.title}</p>
                        <p className="text-sm opacity-75">{song.artist}</p>
                      </div>
                    </div>
                    <span className="text-sm opacity-50">{song.duration}</span>
                  </div>
                  {index < allSongs.length - 1 && (
                    <div className="text-center text-xs opacity-30 mt-2">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}

export default LinkedListPage;
