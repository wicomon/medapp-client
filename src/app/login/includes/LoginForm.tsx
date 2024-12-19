'use client';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/graphql/auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Cookies from 'js-cookie';
import * as Yup from 'yup';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [loginUser] = useMutation(LOGIN, {
    onError(error) {
      console.log(error);
      // if (error.networkError) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Hubo un error"
      //   });
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Usuario o password incorrectos"
      //   });
      // }
    },
  });

  useEffect(() => {
    Cookies.remove('token');
  }, []);
  return (
    <Formik
      initialValues={{
        nickName: '',
        password: '',
      }}
      validationSchema={Yup.object({
        nickName: Yup.string().required('El campo es obligatorio'),
        password: Yup.string().required('El campo es obligatorio'),
      })}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        // console.log(values);
        // return;
        try {
          const response = await loginUser({
            variables: {
              loginInput: {
                nickName: values.nickName,
                password: values.password,
              },
            },
          });
          if (response) {
            const { token } = response.data.authLogin;
            console.log({token});
            setLoading(false)
            resetForm()
            Cookies.set('token', token);
            window.location.href = '/';
          } else {
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
        }
      }}
    >
      <Form>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='nickName'
          >
            Usuario
          </label>
          <Field
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='nickName'
            name='nickName'
            type='text'
            placeholder='usuario'
          />
          <ErrorMessage
            name='nickName'
            component='p'
            className='input---error'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <Field
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            name='password'
            type='password'
            placeholder='******************'
          />
          <ErrorMessage
            name='password'
            component='p'
            className='input---error'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={loading}
          >
            Ingresar
          </button>
        </div>
      </Form>
    </Formik>
  );
};
