import { IUser } from '@/types';
import { ReactNode, useEffect, useState } from 'react';
import { defaultUser, UserContext } from './UserContext';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BY_TOKEN } from '@/graphql';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(defaultUser);
  
  const [getUser, { data, loading, error }] = useLazyQuery<{
    authValidateToken: IUser;
  }>(GET_USER_BY_TOKEN);

  useEffect(() => {
    // console.log('render');
    getUser();
  }, []);

  useEffect(() => {
    if (data && data.authValidateToken) {
      setUser(data.authValidateToken);
    }
    if(error){
      window.location.href = '/login';
    }
  }, [data]);

  // console.log({error})
  // console.log({user})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
