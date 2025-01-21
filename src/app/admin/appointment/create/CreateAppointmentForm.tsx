'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { initialValues, validationSchema } from '../includes/validationForm';
import { formatDateYMD } from '@/utils/dates';
import { FormikDateTimePicker, FormikTextInput, SubmitButton } from '@/components/forms';
import { useMutation } from '@apollo/client';
import { APPOINTMENT_CREATE } from '@/graphql/appointment/appointment.gql';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/navigation';

interface IProps {
  patiendId: number;
  fullName: string;
}

export const CreateAppointmentForm = ({patiendId, fullName}: IProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [createAppointment] = useMutation<{ appointmentCreate: boolean }>(
      APPOINTMENT_CREATE,
      {
        onCompleted: (data) => {
          toast.success('Cita creada correctamente');
          // redirect to appointment page
          setTimeout(() => {
            router.replace('/admin/appointment');
          }, 1000);
        },
        onError: (error) => {
          if (error && error.message) {
            toast.error(error.message);
          }
          setLoading(false);
        },
      }
    );

  return (
    <>
    <Toaster richColors />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setLoading(true);
          // console.log('Form data', values);
          // console.log({
          //   startTime: new Date(values.startTime).getTime(),
          //   endTime: new Date(values.endTime).getTime(),
          //   dateString: formatDateYMD(new Date(values.startTime)),
          //   patientId: patiendId,
          //   description: values.description,
          //   notes: values.notes,
          // });
          try {
            // let response;
            const response = await createAppointment({
              variables: {
                createAppointmentInput: {
                  startTime: new Date(values.startTime).getTime(),
                  endTime: new Date(values.endTime).getTime(),
                  dateString: formatDateYMD(new Date(values.startTime)),
                  patientId: patiendId,
                  description: values.description,
                  notes: values.notes,
                },
              },
            });
            // console.log(response)
            if (response && response.data && response.data.appointmentCreate) {
              resetForm();
            } 
            //   // console.log(first)
            //   // setLoading(false);
            // }
          } catch (error) {
            console.log(error);
          }finally{
            setLoading(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className='space-y-4'>
            <div className='mb-2'>
              <FormikTextInput
                label='Nombre del Paciente'
                name='patientName'
                className='w-full text-base sm:text-sm'
                type='text'
                value={fullName}
              />
            </div>

            <div className='mb-2'>
              <FormikDateTimePicker
                label='Hora inicial'
                name='startTime'
                className='w-full text-base sm:text-sm'
              />
            </div>
            <div className='mb-2'>
              <FormikDateTimePicker
                label='Hora Final'
                name='endTime'
                className='w-full text-base sm:text-sm'
              />
            </div>
            <div className='mb-2'>
              <FormikTextInput
                label='Descripción'
                name='description'
                className='w-full text-base sm:text-sm'
                type='text'
              />
            </div>
            <div className='mb-2'>
              <FormikTextInput
                label='Notas Adicionales'
                name='notes'
                className='w-full text-base sm:text-sm'
                type='text'
              />
            </div>
            <div className='flex items-center justify-between'>
              <SubmitButton loading={loading} value='Crear' className='' />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
