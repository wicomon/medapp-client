import * as Yup from 'yup';

export const initialValues = {
  patientName: '',
  appointmentDate: '',
  appointmentTime: '',
  doctorName: '',
  notes: '',
};

export const validationSchema = Yup.object({
  patientName: Yup.string().required('Required'),
  appointmentDate: Yup.date().required('Required'),
  appointmentTime: Yup.string().required('Required'),
  doctorName: Yup.string().required('Required'),
  notes: Yup.string(),
});