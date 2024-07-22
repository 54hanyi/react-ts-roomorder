import { createContext, useState, useEffect, ReactNode } from 'react';
import { checkLoginStatus, getUser } from '@/assets/api';
import { UserResponse, CheckResponse, MemberData } from '@/types';

interface UserContextType {
  user: MemberData | null;
  isLoggedIn: boolean;
  userName: string;
  setUser: (user: MemberData | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserName: (userName: string) => void;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<MemberData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const checkUserStatus = async () => {
      console.log("Checking user status...");
      try {
        const status: CheckResponse = await checkLoginStatus();
        if (status && status.token) {
          const userData: UserResponse = await getUser(status.token);
          if (userData && userData.result) {
            setUser(userData.result);
            setIsLoggedIn(true);
            setUserName(userData.result.name);
          }
        }
      } catch (error) {
        console.error("Failed to check user status:", error);
      }
    };

    checkUserStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, userName, setUser, setIsLoggedIn, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
