'use client';
import { GET_PERSON_BY_DOCTOR_ID } from '@/graphql';
import { useQuery } from '@apollo/client';
import { PatientTable } from './includes/PatientTable';
import { IPatient } from '@/types';

const Person = () => {
  // get all patients query
  const { data, loading, error } = useQuery<{ patientFindAll: IPatient[] }>(
    GET_PERSON_BY_DOCTOR_ID,
    {
      variables: { patientFindAllId: 1 },
    }
  );
  // console.log(data);
  
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>error...</p>
      ) : data && data.patientFindAll ? (
        <PatientTable patients={data.patientFindAll} />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default Person;
