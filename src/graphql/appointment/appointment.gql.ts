import gql from 'graphql-tag';

export const APPOINTMENT_CREATE = gql`
  mutation AppointmentCreate($createAppointmentInput: CreateAppointmentInput!) {
    appointmentCreate(createAppointmentInput: $createAppointmentInput)
  }
`;
