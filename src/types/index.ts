export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export interface Business {
  id?: string;
  name: string;
  location: string;
  type?: string;
}

export interface Staff {
  id?: string;
  firstName: string;
  lastName: string;
  position: string;
  businessId: string;
  phoneNumber?: string;
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
