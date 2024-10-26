import React, { createContext, useState , useContext} from 'react';

export const AuthContext = createContext();

// Custom hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(null);
    localStorage.clear();
  };
  
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
