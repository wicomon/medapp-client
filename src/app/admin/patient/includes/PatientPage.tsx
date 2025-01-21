'use client';
import { useEffect, useState } from 'react';
import { GET_PERSON_BY_DOCTOR_ID } from '@/graphql';
import { useLazyQuery, useQuery } from '@apollo/client';
import { IPatient } from '@/types';
import { Modal } from '@/components/modals/Modal';
import { PatientTable } from './PatientTable';
import { CreatePatientForm } from './CreatePatientForm';
import { toast, Toaster } from 'sonner';

export const PatientPage = ({ userId }: { userId: number }) => {
  const [getPatients, { data, loading, error }] = useLazyQuery<{
    patientFindAll: IPatient[];
  }>(GET_PERSON_BY_DOCTOR_ID, {
    variables: { patientFindAllId: userId },
    fetchPolicy: 'no-cache',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // console.log(data);
  useEffect(() => {
    getPatients();
  }, []);

  // console.log(data)
  return (
    <div>
      <Toaster richColors />
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-xl md:text-3xl font-bold'>Lista de pacientes</h1>
        <button
          className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleOpenModal}
        >
          Agregar
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex justify-between items-center mb-5'>
          <h3 className='text-3xl font-bold'>Nuevo Paciente</h3>
        </div>
        <CreatePatientForm
          onClose={handleCloseModal}
          loadData={() => {
            toast.success('Event has been created');
            getPatients();
          }}
        />
      </Modal>
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
