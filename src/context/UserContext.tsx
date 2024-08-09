import { createContext, useState, useEffect, ReactNode } from 'react';
import { checkLoginStatus, getUser } from '@/assets/api';
import { UserResponse, CheckResponse, MemberData, Address } from '@/types';

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
  birthday: string;
  setBirthday: (birthday: string) => void;
  address: Address;
  setAddress: (address: Address) => void;
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
  birthday: '',
  setBirthday: () => {},
  address: { zipcode: 0, detail: '', city: '', county: '' },
  setAddress: () => {},
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
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState<Address>({ zipcode: 0, detail: '', city: '', county: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');
    const storedBirthday = localStorage.getItem('birthday');
    const storedAddress = localStorage.getItem('address');

    if (storedUser && storedIsLoggedIn && storedUserName && storedEmail && storedPhone && storedBirthday && storedAddress) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(storedIsLoggedIn === 'true');
      setUserName(storedUserName);
      setEmail(storedEmail ?? "");
      setPhone(storedPhone);
      setBirthday(storedBirthday ?? "");
      try {
        setAddress(JSON.parse(storedAddress));
      } catch (error) {
        console.error("Failed to parse address from localStorage", error);
      }
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
              setBirthday(userData.result.birthday.substring(0, 10) || '');
              setAddress(userData.result.address || { zipcode: 0, detail: '', city: '', county: '' });

              localStorage.setItem('user', JSON.stringify(userData.result));
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('userName', userData.result.name);
              localStorage.setItem('email', userData.result.email);
              localStorage.setItem('phone', userData.result.phone || '');
              localStorage.setItem('birthday', userData.result.birthday.substring(0, 10) || '');
              localStorage.setItem('address', JSON.stringify(userData.result.address || { zipcode: 0, detail: '', city: '', county: '' }));
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

  const handleSetBirthday = (birthday: string) => {
    setBirthday(birthday);
    localStorage.setItem('birthday', birthday);
  };

  const handleSetAddress = (address: Address) => {
    setAddress(address);
    localStorage.setItem('address', JSON.stringify(address));
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
        setPhone: handleSetPhone,
        birthday,
        setBirthday: handleSetBirthday,
        address,
        setAddress: handleSetAddress
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
