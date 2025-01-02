import gql from 'graphql-tag';

export const GET_PERSON_BY_DOCTOR_ID = gql`
  query PatientFindAll($patientFindAllId: Int!) {
    patientFindAll(id: $patientFindAllId) {
      id
      firstName
      lastName
      email
      image
      isActive
      isDeleted
      doctorId
      createdAt
      createdBy
      updatedAt
      updatedBy
      deletedAt
      deletedBy
    }
  }
`;


export const CREATE_PATIENT = gql`
mutation PatientCreate($createPatientInput: CreatePatientInput!) {
  patientCreate(createPatientInput: $createPatientInput)
}
`;