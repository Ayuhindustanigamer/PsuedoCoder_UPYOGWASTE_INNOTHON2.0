import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const WasteContext = createContext();

export const useWaste = () => useContext(WasteContext);

export const WasteProvider = ({ children }) => {
  const [wasteItems, setWasteItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, currentUser } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      // Load waste items from localStorage
      const savedItems = localStorage.getItem('wasteItems');
      if (savedItems) {
        setWasteItems(JSON.parse(savedItems));
      }
    } else {
      setWasteItems([]);
    }
    setLoading(false);
  }, [isAuthenticated]);

  const addWasteItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      userId: currentUser?.id,
    };
    
    const updatedItems = [...wasteItems, newItem];
    setWasteItems(updatedItems);
    localStorage.setItem('wasteItems', JSON.stringify(updatedItems));
    return newItem;
  };

  const updateWasteItem = (id, updatedData) => {
    const updatedItems = wasteItems.map(item => 
      item.id === id ? { ...item, ...updatedData } : item
    );
    
    setWasteItems(updatedItems);
    localStorage.setItem('wasteItems', JSON.stringify(updatedItems));
  };

  const deleteWasteItem = (id) => {
    const updatedItems = wasteItems.filter(item => item.id !== id);
    setWasteItems(updatedItems);
    localStorage.setItem('wasteItems', JSON.stringify(updatedItems));
  };

  const submitWasteCollection = () => {
    // In a real application, this would send the data to a backend API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Clear the waste items after successful submission
        setWasteItems([]);
        localStorage.removeItem('wasteItems');
        resolve({ success: true, message: 'Collection request submitted successfully!' });
      }, 1500);
    });
  };

  const value = {
    wasteItems,
    loading,
    addWasteItem,
    updateWasteItem,
    deleteWasteItem,
    submitWasteCollection
  };

  return (
    <WasteContext.Provider value={value}>
      {!loading && children}
    </WasteContext.Provider>
  );
};

export default WasteContext;