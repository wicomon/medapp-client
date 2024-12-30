'use client';
import { useContext } from 'react';
import { PatientPage } from './includes/PatientPage';
import { UserContext } from '@/context/user/UserContext';

const Person = () => {
  // get all patients query
   const { user } = useContext(UserContext);

  return (
    <div>
      {
        (user && user.id!=0) ? 
          <PatientPage userId={user.id} />
        : null
      }
    </div>
  );
};

export default Person;
