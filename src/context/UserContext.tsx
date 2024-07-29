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
    const storedUser = localStorage.getItem('user');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');

    if (storedUser && storedIsLoggedIn && storedUserName) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(storedIsLoggedIn === 'true');
      setUserName(storedUserName);
    } else {
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

              localStorage.setItem('user', JSON.stringify(userData.result));
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userName', userData.result.name);
            }
          }
        } catch (error) {
          console.error("Failed to check user status:", error);
        }
      };

      checkUserStatus();
    }
  }, []);

  const handleSetUser = (user: MemberData | null) => {
    setUser(user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  };

  const handleSetIsLoggedIn = (isLoggedIn: boolean) => {
    setIsLoggedIn(isLoggedIn);
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  };

  const handleSetUserName = (userName: string) => {
    setUserName(userName);
    localStorage.setItem('userName', userName);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, userName, setUser: handleSetUser, setIsLoggedIn: handleSetIsLoggedIn, setUserName: handleSetUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
