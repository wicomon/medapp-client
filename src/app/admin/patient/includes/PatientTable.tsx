'use client';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, PaginationChangedEvent } from 'ag-grid-community';
import { IPatient } from '@/types';
import { localeText } from '@/utils/agGridLocaleText';
import { calculateAge } from '@/utils/dates';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";


interface IProps {
  patients: IPatient[];
}

export const PatientTable = ({ patients }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patients);
  // console.log(patients);
  const [pageSize, setPageSize] = useState(10);

  const onDelete = (params: IPatient) => {
    console.log(params);
  };

  useEffect(() => {
    setFilteredPatients(
      patients.filter((patient) =>
        `${patient.firstName} ${patient.lastName} ${patient.email}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, patients]);

  const columnDefs: ColDef[] = [
    {
      headerName: 'Nombres',
      field: 'firstName',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Apellidos',
      field: 'lastName',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Email',
      field: 'email',
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: 'Edad',
      field: 'birth',
      sortable: true,
      filter: true,
      flex: .5,
      valueFormatter: (params) => '' + calculateAge(params.data.birth),
    },
    {
      headerName: 'F. Nac',
      field: 'birth',
      sortable: true,
      filter: true,
      flex: 1,
      valueFormatter: (params) =>
        '' +
        new Date(params.data.birth).toLocaleString('en-GB', {
          timeZone: 'America/Lima',
        }),
      // .substring(0, 10)
    },
    {
      headerName: 'Acciones',
      field: 'actions',
      cellRenderer: (params: any) => (
        <div>
          <Link
            href={`/admin/patient/${params.data.id}`}
            className='flex text-gray-600 rounded text-base'
          >
            <FaEye className='mr-2 size-6' /> Ver
          </Link>
        </div>
      ),
      flex: 1,
      cellStyle: { textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    }
  ];

  const getTableHeight = () => {
    const rowHeight = 50; // Adjust based on your row height
    const headerHeight = 50; // Adjust based on your header height
    return pageSize * rowHeight + headerHeight;
  };

  const changePage = (e: PaginationChangedEvent) => {
    setPageSize(e.api.paginationGetPageSize());
  }
  // console.log({pageSize})
  return (
    <div className='patient-table-container'>
      <div className='mb-4 flex justify-end'>
        <input
          type='text'
          placeholder='Buscar...'
          className='max-w-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300 focus:ring-2 focus:ring-blue-300'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className='ag-theme-alpine'
        style={{ height: getTableHeight(), width: '100%' }}
      >
        <AgGridReact
          rowData={filteredPatients}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={pageSize}
          localeText={localeText}
          paginationPageSizeSelector={[10, 20, 30]}
          onPaginationChanged={changePage}
        />
      </div>
    </div>
  );
};
