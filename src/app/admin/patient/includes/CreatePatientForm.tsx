'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Toaster, toast } from 'sonner';
import { initialValues, validationSchema } from './validationForm';
import {
  FormikDateTimePicker,
  FormikSelectInput,
  FormikTextInput,
  SubmitButton,
} from '@/components/forms';
import { formatDateYMD } from '@/utils/dates';
import { useMutation } from '@apollo/client';
import { CREATE_PATIENT } from '@/graphql';

interface IProps {
  onClose: () => void;
  loadData: () => void;
}

export const CreatePatientForm = ({ onClose, loadData }: IProps) => {
  const [loading, setLoading] = useState(false);
  // add create patient mutation
  const [createPatient] = useMutation<{ patientCreate: boolean }>(
    CREATE_PATIENT,
    {
      onCompleted: (data) => {
        if (data && data.patientCreate) {
          loadData();
          onClose();
        }
      },
      onError: (error) => {
        if (error && error.message) {
          alert(error.message);
        }
        setLoading(false);
      },
    }
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        // console.log(values);
        // console.log(new Date(values.birth).getTime())
        // console.log(formatDateYMD(new Date(values.birth)))
        // console.log(new Date(new Date(values.birth).getTime()))
        // toast.success('Event has been created')
        // return;
        try {
          // let response;
          const response = await createPatient({
            variables: {
              createPatientInput: {
                ...values,
                birth: new Date(values.birth).getTime(),
                birthString: formatDateYMD(new Date(values.birth)),
              },
            },
          });
          // console.log(response)
          // if (response && response.data && response.data.patientCreate) {
          //   alert('Paciente creado correctamente');
          // } else {
          //   // console.log(first)
          //   // setLoading(false);
          // }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }}
    >
      <Form>
      <Toaster richColors />
        <div className='mb-2'>
          <FormikTextInput
            label='Nombres'
            name='firstName'
            className='w-full text-base sm:text-sm'
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikTextInput
            label='Apellidos'
            name='lastName'
            className='w-full text-base sm:text-sm'
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikTextInput
            label='Correo'
            name='email'
            className='w-full text-base sm:text-sm'
            type='email'
          />
        </div>
        <div className='mb-2'>
          <FormikTextInput
            label='Telefono'
            name='phone'
            className='w-full text-base sm:text-sm'
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikTextInput
            label='Telefono adicional'
            name='phone2'
            className='w-full text-base sm:text-sm'
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikTextInput
            label='Dirección'
            name='address'
            className='w-full text-base sm:text-sm'
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikSelectInput
            label='Género'
            name='gender'
            className='w-full text-base sm:text-sm'
            type='text'
          >
            <option value=''>Seleccione</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
          </FormikSelectInput>
        </div>
        <div className='mb-2'>
          <FormikDateTimePicker
            label='Fecha de Nacimiento'
            name='birth'
            className='w-full text-base sm:text-sm'
          />
        </div>
        <div className='flex items-center justify-between'>
          <SubmitButton loading={loading} value='Crear' className='' />
        </div>
      </Form>
    </Formik>
  );
};
