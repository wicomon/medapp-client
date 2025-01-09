'use client';
import { IPatient } from '@/types';
import { calculateAge } from '@/utils/dates';
import Link from 'next/link';
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaCalendarAlt,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
} from 'react-icons/fa';
import { PatientActions } from './PatientActions';

export const PatientData = ({ patient }: { patient: IPatient }) => {
  return (
    <div className='bg-gray-100'>
      <div className='w-full'>
        <div className='flex items-center mb-6'>
          <Link
            className='flex items-center text-gray-700 hover:text-gray-900 mr-4'
            href={`/admin/patient`}
            // onClick={() => router.back()}
          >
            <FaArrowLeft className='text-2xl' />
          </Link>
          <h1 className='text-3xl font-bold'>Detalles del paciente</h1>
        </div>

        <div className='flex flex-col gap-2 md:flex-row md:gap-4 '>
          <div
            id='personal-information'
            className='bg-white max-w-md shadow rounded-lg p-6 md:p-6 border border-gray-300 md:w-1/3'
          >
            <div className='flex items-center mb-6'>
              <img
                src={'https://picsum.photos/200'}
                alt={`${patient.firstName} ${patient.lastName}`}
                className='w-32 h-32 rounded-full mr-6'
              />
              <div>
                <h2 className='text-2xl font-bold'>
                  {patient.firstName} {patient.lastName}
                </h2>
                <p className='text-gray-600'>{patient.email}</p>
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-4'>
              Información de contacto
            </h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center'>
                <FaUser className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>
                  {patient.firstName} {patient.lastName}
                </p>
              </div>
              <div className='flex items-center'>
                <FaPhone className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>{patient.phone}</p>
              </div>
              {patient.phone2 && (
                <div className='flex items-center'>
                  <FaPhone className='text-emerald-600 mr-2' />
                  <p className='text-lg text-gray-600'>{patient.phone2}</p>
                </div>
              )}
              <div className='flex items-center'>
                <FaEnvelope className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>{patient.email}</p>
              </div>
              <div className='flex items-center'>
                <FaCalendarAlt className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>
                  {new Date(patient.birth).toLocaleDateString()}
                </p>
              </div>
              <div className='flex items-center'>
                <FaBirthdayCake className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>
                  {calculateAge(patient.birth)} años
                </p>
              </div>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='text-emerald-600 mr-2' />
                <p className='text-lg text-gray-600'>{patient.address}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 md:w-2/3'>
            <div
              id='overview'
              className='w-full h-64 bg-white shadow rounded-lg p-2 md:p-6 border border-gray-300'
            >
              <h3 className='text-xl font-semibold mb-4 ml-4'>
                Información adicional
              </h3>
              <div className='grid grid-cols-3 gap-10'>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    Genero:
                  </label>
                  <p className='text-md md:text-lg'>{patient.gender==='M' ? 'Masculino' : 'Femenino'}</p>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    F. Nac.:
                  </label>
                  <p className='text-md mdtext-lg'>
                    {new Date(patient.birth).toLocaleDateString()}
                  </p>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    Edad:
                  </label>
                  <p className='text-md md:text-lg'>
                    {calculateAge(patient.birth)}
                  </p>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    Alergias:
                  </label>
                  <p className='text-md md:text-lg'>
                    {patient.allergies ? patient.allergies : 'Ninguna'}
                  </p>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    Última Visita:
                  </label>
                  <p className='text-md md:text-lg text-ellipsis overflow-hidden whitespace-nowrap w-full md:w-auto'>
                    {new Date(patient.birth).toLocaleDateString()}
                  </p>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='block text-sm font-bold mb-1 text-gray-500'>
                    Sig Visita:
                  </label>
                  <p className='text-md md:text-lg text-ellipsis overflow-hidden whitespace-nowrap w-full md:w-auto'>
                    {new Date(patient.birth).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
            <PatientActions patientId={patient.id} />
          </div>
        </div>
      </div>
    </div>
  );
};