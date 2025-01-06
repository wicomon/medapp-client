'use client';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { initialValues, validationSchema } from './validationForm';
import { FormikDateTimePicker, FormikTextInput, SubmitButton } from '@/components/forms';
import { formatDateYMD } from '@/utils/dates';
import { useMutation } from '@apollo/client';
import { CREATE_PATIENT } from '@/graphql';

interface IProps {
  onClose: () => void;
  loadData: () => void;
}

export const CreatePatientForm = ({onClose, loadData}: IProps) => {
  const [loading, setLoading] = useState(false);
  // add create patient mutation
  const [createPatient] = useMutation<{patientCreate: boolean}>(CREATE_PATIENT,{
    onCompleted: (data) => {
      if(data && data.patientCreate){
        alert('Paciente creado correctamente');
        loadData()
        onClose();
      }
    },
    onError: (error) => {
      if(error && error.message){
        alert(error.message)
      }
      setLoading(false);
    }
  });

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
        // return;
        try {
          // let response;
          const response = await createPatient({
            variables: {
              createPatientInput: {
                ...values,
                birth: new Date(values.birth).getTime(),
                birthString: formatDateYMD(new Date(values.birth))
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
          console.log(error)
          setLoading(false);
        }
      }}
    >
      <Form>
        <div className='mb-2'>
          <FormikTextInput
            label='Nombres'
            name='firstName'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Apellidos'
            name='lastName'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Correo'
            name='email'
            className=''
            type='email'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Telefono'
            name='phone'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Telefono adicional'
            name='phone2'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Dirección'
            name='address'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
        <FormikTextInput
            label='Género'
            name='gender'
            className=''
            type='text'
          />
        </div>
        <div className='mb-2'>
          <FormikDateTimePicker
            label='Fecha de Nacimiento'
            name='birth'
            className=''
          />
        </div>
        <div className='flex items-center justify-between'>
          <SubmitButton loading={loading} value='Crear' className='' />
        </div>
      </Form>
    </Formik>
  );
};
