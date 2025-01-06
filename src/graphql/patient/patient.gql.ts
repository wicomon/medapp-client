import gql from 'graphql-tag';

export const GET_PERSON_BY_DOCTOR_ID = gql`
  query PatientFindAll($patientFindAllId: Int!) {
    patientFindAll(id: $patientFindAllId) {
      id
      firstName
      lastName
      email
      image
      birth
      birthString
      allergies
      address
      gender
      phone2
      phone
    }
  }
`;

export const CREATE_PATIENT = gql`
  mutation PatientCreate($createPatientInput: CreatePatientInput!) {
    patientCreate(createPatientInput: $createPatientInput)
  }
`;

export const PATIENT_BY_ID = gql`
  query PatientFindById($patientFindByIdId: Int!) {
    patientFindById(id: $patientFindByIdId) {
      id
      firstName
      lastName
      email
      image
      birth
      birthString
      isActive
      isDeleted
      doctorId
      allergies
      address
      gender
      phone2
      phone
    }
  }
`;
