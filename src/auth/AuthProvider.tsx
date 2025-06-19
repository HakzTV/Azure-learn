import { createContext, useEffect, useState } from "react";
import type { AuthContextType, UserInfo } from "./types";

// Global context for the login state
// This context will be used to provide authentication state across the application
// It will include user information(refer to types.ts), login and logout functions, and loading state
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/.auth/me')
      .then(res => res.json())
      .then(data => {
        setUser(data.clientPrincipal ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const login = () => (window.location.href = '/.auth/login/aad');
  const logout = () => (window.location.href = '/.auth/logout');

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
     
    </AuthContext.Provider>
  );
};
