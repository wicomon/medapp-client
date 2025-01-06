'use client';

import { PATIENT_BY_ID } from '@/graphql';
import { IPatient } from '@/types';
import { useQuery } from '@apollo/client';
import { PatientData } from './PatientData';

interface IProps {
  id: number;
}

export const PatientId = ({ id }: IProps) => {
  const { data, loading, error } = useQuery<{ patientFindById: IPatient }>(
    PATIENT_BY_ID,
    {
      variables: { patientFindByIdId: id },
    }
  );
  // console.log({ data, loading, error });
  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error...</p>
      ) : data && data.patientFindById ? (
        <PatientData patient={data.patientFindById} />
      ) : (
        <p>No data</p>
      )}
    </>
  );
};
