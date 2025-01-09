import * as Yup from 'yup';

export const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  birth: '',
  phone: '',
  phone2: '',
  address: '',
  gender: '',
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
  birth: Yup.date().required('Campo Obligatorio'),
  // birthString: Yup.string().required('Campo Obligatorio'),
  phone: Yup.string()
    .required('Campo Obligatorio')
    .min(9, 'Mínimo 9 caracteres')
    .max(15, 'Máximo 15 caracteres'),
  // phone2: Yup.string().min(10, 'Mínimo 10 caracteres'),
  address: Yup.string().required('Campo Obligatorio'),
  gender : Yup.string().required('Campo Obligatorio'),
});
