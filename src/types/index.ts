export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
