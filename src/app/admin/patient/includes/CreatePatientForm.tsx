'use client';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { initialValues, validationSchema } from './validationForm';
import { FormikTextInput, SubmitButton } from '@/components/forms';

export const CreatePatientForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        // console.log(values);
        // return;
        try {
          let response;
          // const response = await loginUser({
          //   variables: {
          //     loginInput: {
          //       nickName: values.nickName,
          //       password: values.password,
          //     },
          //   },
          // });
          if (response) {
            // const { token } = response.data.authLogin;
          } else {
            setLoading(false);
          }
        } catch (error) {
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
        <div className='flex items-center justify-between'>
          <SubmitButton loading={loading} value='Crear' className='' />
        </div>
      </Form>
    </Formik>
  );
};
