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
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  phone: string;
  setPhone: (phone: string) => void; 
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  userName: '',
  setUser: () => {},
  setIsLoggedIn: () => {},
  setUserName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  phone: '', 
  setPhone: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<MemberData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // 读取本地存储中的数据
    const storedUser = localStorage.getItem('user');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');

    if (storedUser && storedIsLoggedIn && storedUserName && storedPhone) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(storedIsLoggedIn === 'true');
      setUserName(storedUserName);
      setEmail(storedEmail ?? "");  //當storedEmail為null時，返回""
      setPhone(storedPhone);
    } else {
      const checkUserStatus = async () => {
        try {
          const status: CheckResponse = await checkLoginStatus();
          if (status && status.token) {
            const userData: UserResponse = await getUser(status.token);
            if (userData && userData.result) {
              setUser(userData.result);
              setIsLoggedIn(true);
              setUserName(userData.result.name);
              setEmail(userData.result.email || '');
              setPhone(userData.result.phone || '');

              localStorage.setItem('user', JSON.stringify(userData.result));
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userName', userData.result.name);
              localStorage.setItem('email', userData.result.email);
              localStorage.setItem('phone', userData.result.phone || '');
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

  const handleSetEmail = (email: string) => {
    setEmail(email);
    localStorage.setItem('email', email);
  };

  const handleSetPassword = (password: string) => {
    setPassword(password);
    localStorage.setItem('password', password);
  };

  const handleSetPhone = (phone: string) => {
    setPhone(phone);
    localStorage.setItem('phone', phone);
  };

  return (
    <UserContext.Provider 
      value={{
        user, 
        setUser: handleSetUser, 
        isLoggedIn, 
        setIsLoggedIn: handleSetIsLoggedIn, 
        userName, 
        setUserName: handleSetUserName, 
        email, 
        setEmail: handleSetEmail, 
        password, 
        setPassword: handleSetPassword, 
        phone, 
        setPhone: handleSetPhone 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
