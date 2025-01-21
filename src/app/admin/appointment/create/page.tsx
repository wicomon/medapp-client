'use client';
import { useSearchParams } from 'next/navigation';
import { CreateAppointmentForm } from './CreateAppointmentForm';
import { PATIENT_BY_ID } from '@/graphql';
import { useQuery } from '@apollo/client';

const AppointmentCreatePage = () => {
  const searchParams = useSearchParams();
  const patientId = searchParams.get('id');
  // console.log({ patientId });

  if (!patientId) return null;

  const { data, loading, error } = useQuery(PATIENT_BY_ID, {
    variables: { patientFindByIdId: parseInt(patientId!) },
  });
  console.log({ data, loading, error });
  return (
    <div className='max-w-md px-2'>
      <h1 className='text-2xl font-bold mb-4'>Nueva cita médica</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Ocurrió un error</p>
      ) : data?.patientFindById ? (
        <CreateAppointmentForm
          fullName={`${data.patientFindById.firstName} ${data.patientFindById.lastName}`}
          patiendId={parseInt(patientId!)}
        />
      ) : null}
    </div>
  );
};

export default AppointmentCreatePage;
