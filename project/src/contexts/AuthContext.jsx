import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate authentication API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, accept any non-empty credentials
        if (email && password) {
          const user = {
            id: 'user1',
            email,
            name: email.split('@')[0],
          };
          
          setCurrentUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = (email, password, name) => {
    // Simulate signup API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password && name) {
          const user = {
            id: 'user' + Math.floor(Math.random() * 1000),
            email,
            name,
          };
          
          setCurrentUser(user);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Please fill all required fields'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('wasteItems');
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;