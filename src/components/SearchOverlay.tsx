
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search as SearchIcon, Clock, ArrowRight } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: any[];
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, products }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('search_history');
    return saved ? JSON.parse(saved) : [];
  });

  const suggestions = query 
    ? products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const trimmedQuery = query.trim();
      const newHistory = [trimmedQuery, ...history.filter(h => h !== trimmedQuery)].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem('search_history', JSON.stringify(newHistory));
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      setQuery('');
      onClose();
    }
  };

  const handleSuggestionClick = (text: string) => {
    const trimmedQuery = text.trim();
    const newHistory = [trimmedQuery, ...history.filter(h => h !== trimmedQuery)].slice(0, 5);
    setHistory(newHistory);
    localStorage.setItem('search_history', JSON.stringify(newHistory));
    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="search-container">
            <div className="search-header">
              <form onSubmit={handleSearch} className="search-form">
                <SearchIcon className="search-icon" size={24} />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search for jewellery..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="button" onClick={onClose}><X size={28} /></button>
              </form>
            </div>

            <div className="search-results-area">
              {query && suggestions.length > 0 && (
                <div className="search-suggestions">
                  <h4 className="u-mono">Suggestions</h4>
                  <ul>
                    {suggestions.map(p => (
                      <li key={p.id} onClick={() => handleSuggestionClick(p.title)}>
                        <ArrowRight size={14} className="icon" />
                        <span>{p.title}</span>
                        <span className="category u-mono">{p.category}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {history.length > 0 && !query && (
                <div className="search-history">
                  <h4 className="u-mono">Recent Searches</h4>
                  <ul>
                    {history.map((h, i) => (
                      <li key={i} onClick={() => handleSuggestionClick(h)}>
                        <Clock size={14} className="icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {query && suggestions.length === 0 && (
                <div className="no-results">
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
