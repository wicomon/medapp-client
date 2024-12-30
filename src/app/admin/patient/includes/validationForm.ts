import * as Yup from 'yup';

export const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  // birth: '',
  // birthString: ''
};


export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Correo inválido')
    .required('Campo Obligatorio'),
  firstName: Yup.string()
    .required('Campo Obligatorio')
    .min(3, 'Mínimo 3 caracteres'),
  lastName: Yup.string()
    .required('Campo Obligatorio')
    .min(3, 'Mínimo 3 caracteres'),
  // birth: Yup.date().required('Campo Obligatorio'),
  // birthString: Yup.string().required('Campo Obligatorio'),
});
