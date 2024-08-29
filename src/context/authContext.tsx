import React, { createContext, useState, useContext, ReactNode } from 'react';

type AuthContextProps = {
  isSignedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

// Cria o contexto com um valor inicial undefined
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Cria o provedor do contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return <AuthContext.Provider value={{ isSignedIn, setSignedIn: setIsSignedIn }}>{children}</AuthContext.Provider>;
};

// Hook personalizado para consumir o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
