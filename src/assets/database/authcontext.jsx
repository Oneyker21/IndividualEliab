import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { appfirebase } from "./firebaseconfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const auth = getAuth(appfirebase);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      const auth = getAuth(appfirebase);
      await signOut(auth);
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // Detectar estado de conexión/desconexión
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("¡Conexión restablecida!");
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log("Sin conexión. Los cambios se sincronizarán cuando vuelvas a conectarte.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isOnline, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
