import * as Yup from 'yup';

export const initialValues = {
  patientName: '',
  startTime: '',
  endTime: '',
  description: '',
  notes: '',
};

export const validationSchema = Yup.object({
  // patientName: Yup.string().required('Nombre del paciente es obligatorio'),
  startTime: Yup.date().required('Campo Obligatorio'),
  endTime: Yup.string().required('Campo Obligatorio'),
  description: Yup.string(),
  notes: Yup.string(),
});