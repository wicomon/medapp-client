'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik'
import { FormikDateTimePicker, FormikTextInput, SubmitButton } from '@/components/forms';
import { initialValues, validationSchema } from '../includes/validationForm'

const AppointmentCreatePage = () => {
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4">Nueva cita médica</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form data', values);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className='mb-2'>
              <FormikTextInput
                label='Paciente'
                name='patientName'
                className='w-full text-base sm:text-sm'
                type='text'
              />
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
        )}
      </Formik>
    </div>
  )
}

export default AppointmentCreatePage