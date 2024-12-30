
import { IUser } from '@/types';
import { createContext, useContext } from 'react';

export const defaultUser = {
  id: 0,
  name: '',
  lastName: '',
  email: '',
  password: '',
  image: '',
};

interface UserContextType {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: (): void => {},
});

// export const useUser = () => {
//   const context = useContext(UserContext);
//   // console.log(context)
//   if (context === undefined) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };