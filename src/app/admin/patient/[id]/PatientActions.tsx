'use client';
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaCalendarDay } from 'react-icons/fa';

export const PatientActions = ({ patientId }: { patientId: number }) => {
  return (
    <div className='w-full bg-white shadow rounded-lg p-2 md:p-6 border border-gray-300'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <Link
          href={'/admin/appointment/create?id=' + patientId}
          className='flex flex-row justify-between items-center py-2 px-8 md:px-2 rounded-2xl border border-gray-300 hover:bg-gray-100'
        >
          <div className='flex items-center justify-center w-10 h-10 bg-teal-600 rounded-full '>
            <FaCalendarDay className='text-white size-5' />
          </div>
          <span className='mr-5'>Agendar</span>
          <FaArrowRight className='size-4' />
        </Link>
        <Link
          href={'/admin/appointment'}
          className='flex flex-row justify-between items-center py-2 px-8 md:px-2 rounded-2xl border border-gray-300 hover:bg-gray-100'
        >
          <div className='flex items-center justify-center w-10 h-10 bg-teal-600 rounded-full '>
            <FaCalendar className='text-white size-5' />
          </div>
          <span className='mr-5'>Citas</span>
          <FaArrowRight className='size-4' />
        </Link>
      </div>
    </div>
  );
};
