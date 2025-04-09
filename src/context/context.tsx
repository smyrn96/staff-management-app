"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { User, AuthContextType } from "../types/index";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    if (email === "admin@example.com" && password === "password123") {
      setUser({
        id: "1",
        email: "admin@example.com",
        password: "password123",
      } as User);

      localStorage.setItem("userId", "1");

      router.push("/dashboard");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    setUser(null);
    router.push("/auth/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export default AuthProvider;
