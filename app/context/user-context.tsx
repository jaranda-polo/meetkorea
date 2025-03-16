"use client";

import { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  level: "beginner" | "intermediate" | "advanced";
  interests: string[];
  profileImage?: string;
  country?: string;
};

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user for development
  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      // For development, set a mock user
      setUser({
        id: "1",
        name: "John Davis",
        email: "john@example.com",
        level: "beginner",
        interests: ["travel", "daily life", "K-Pop"],
        country: "USA",
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: "1",
        name: "John Davis",
        email,
        level: "beginner",
        interests: ["travel", "daily life", "K-Pop"],
        country: "USA",
      });
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock signup - would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: "1",
        name,
        email,
        level: "beginner",
        interests: [],
      });
    } catch (error) {
      console.error("Signup failed", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, isLoading, login, signup, logout, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
