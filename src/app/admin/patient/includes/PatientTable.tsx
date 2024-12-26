'use client';

import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { IPatient } from "@/types";
import { localeText } from '@/utils/agGridLocaleText';

interface IProps {
  patients: IPatient[];
}

export const PatientTable = ({ patients }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patients);

  useEffect(() => {
    setFilteredPatients(
      patients.filter(patient =>
        `${patient.firstName} ${patient.lastName} ${patient.email}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, patients]);

  const columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'firstName', sortable: true, filter: true, flex: 1},
    { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true, flex: 1 },
    { headerName: 'Email', field: 'email', sortable: true, filter: true, flex: 1 },
  ];

  return (
    <div>
      <div className='mb-4 flex justify-end'>
        <input
          type='text'
          placeholder='Buscar...'
          className='max-w-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 focus:ring-2 focus:ring-blue-300'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='ag-theme-alpine' style={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={filteredPatients}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          localeText={localeText}
        />
      </div>
    </div>
  );
};