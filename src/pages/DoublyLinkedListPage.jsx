import React, { useState, useEffect } from 'react';
import { Globe, ChevronLeft, ChevronRight, History, Home, ExternalLink } from 'lucide-react';

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.current = null;
  }

  append(value) {
    const newNode = new DoublyNode(value);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this;
  }

  goNext() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return true;
    }
    return false;
  }

  goPrevious() {
    if (this.current && this.current.previous) {
      this.current = this.current.previous;
      return true;
    }
    return false;
  }

  getCurrentValue() {
    return this.current ? this.current.value : null;
  }

  getCurrentIndex() {
    if (!this.current) return -1;
    
    let index = 0;
    let node = this.head;
    
    while (node && node !== this.current) {
      index++;
      node = node.next;
    }
    
    return index;
  }

  canGoNext() {
    return this.current && this.current.next !== null;
  }

  canGoPrevious() {
    return this.current && this.current.previous !== null;
  }

  print() {
    const values = [];
    let current = this.head;
    
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

const mockBrowserHistory = [
  { 
    id: 1, 
    title: "Google", 
    url: "www.google.com", 
    visitTime: "10:30 AM",
    description: "Navegadror de búsqueda"
  },
  { 
    id: 2, 
    title: "GitHub", 
    url: "github.com/user/project", 
    visitTime: "10:35 AM",
    description: "Plataforma de desarrollo colaborativo",
  },
  { 
    id: 3, 
    title: "Stack Overflow", 
    url: "stackoverflow.com/questions/javascript", 
    visitTime: "10:42 AM",
    description: "Developer Q&A"
  },
  { 
    id: 4, 
    title: "React Documentation", 
    url: "react.dev/learn", 
    visitTime: "10:48 AM",
    description: "Documentacion Oficial"
  },
  { 
    id: 5, 
    title: "Figma", 
    url: "figma.com", 
    visitTime: "11:05 AM",
    description: "Diseño UI/UX"
  },
  { 
    id: 6, 
    title: "YouTube - Programming Tutorial", 
    url: "youtube.com/watch?v=tutorial", 
    visitTime: "11:15 AM",
    description: "Plataforma de videos"
  },
  { 
    id: 7, 
    title: "LinkedIn", 
    url: "linkedin.com/in/profile", 
    visitTime: "11:25 AM",
    description: "Portal profesional"
  },
  { 
    id: 8, 
    title: "Universidad Autónoma de Occidente", 
    url: "uao.edu.co", 
    visitTime: "11:30 AM",
    description: "Portal educativo"
  }
];

function DoublyLinkedListPage() {
  const [browserHistory, setBrowserHistory] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [allPages, setAllPages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const list = new DoublyLinkedList();
    mockBrowserHistory.forEach(page => list.append(page));
    setBrowserHistory(list);
    setCurrentPage(list.getCurrentValue());
    setAllPages(list.print());
  }, []);

  const handleBack = () => {
    if (browserHistory && browserHistory.goPrevious()) {
      setCurrentPage(browserHistory.getCurrentValue());
      setCurrentIndex(browserHistory.getCurrentIndex());
    }
  };

  const handleForward = () => {
    if (browserHistory && browserHistory.goNext()) {
      setCurrentPage(browserHistory.getCurrentValue());
      setCurrentIndex(browserHistory.getCurrentIndex());
    }
  };

  const navigateHome = () => {
    window.location.href = '/';
  };

  const navigateToLinked = () => {
    window.location.href = '/linked';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Globe className="text-cyan-400" />
            Browser History - Lista Doblemente Enlazada
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
              onClick={navigateToLinked}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
            >
              Ir a Music Player →
            </button>
          </div>
        </div>

        {/* Browser Mockup */}
        <div className="bg-gray-900 rounded-t-xl border border-gray-700">
          <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleBack}
                disabled={!browserHistory?.canGoPrevious()}
                className={`p-2 rounded-lg transition-all ${
                  browserHistory?.canGoPrevious() 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white hover:scale-105' 
                    : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleForward}
                disabled={!browserHistory?.canGoNext()}
                className={`p-2 rounded-lg transition-all ${
                  browserHistory?.canGoNext() 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white hover:scale-105' 
                    : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex-1 bg-gray-900 rounded-lg px-4 py-2 flex items-center gap-2">
              <Globe size={16} className="text-gray-400" />
              <span className="text-sm">{currentPage?.url || 'No page loaded'}</span>
            </div>
          </div>

          {/* Current Page Content */}
          {currentPage && (
            <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 min-h-[300px]">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <div className="text-6xl mb-4">{currentPage.favicon}</div>
                <h2 className="text-3xl font-bold">{currentPage.title}</h2>
                <p className="text-cyan-400">{currentPage.url}</p>
                <p className="text-gray-400">{currentPage.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <History size={16} />
                  <span>Visited at {currentPage.visitTime}</span>
                </div>
                <div className="pt-4">
                  <span className="px-4 py-2 bg-blue-600/20 rounded-full text-sm">
                    Page {currentIndex + 1} of {browserHistory?.size() || 0}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* History Timeline */}
        <div className="mt-8 bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
            <History size={20} />
            Navigation Timeline
          </h3>
          
          <div className="relative">
            <div className="absolute left-0 right-0 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {allPages.map((page, index) => (
                <div
                  key={page.id}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${
                      currentIndex === index
                        ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50'
                        : currentIndex > index
                        ? 'bg-green-600'
                        : 'bg-gray-600'
                    }`}
                  >
                    {page.favicon}
                  </div>
                  <div className="mt-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity absolute top-14 w-24">
                    <p className="font-semibold truncate">{page.title}</p>
                    <p className="text-gray-400">{page.visitTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoublyLinkedListPage;