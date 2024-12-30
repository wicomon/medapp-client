import gql from "graphql-tag";

export const GET_USER_BY_TOKEN = gql`
query AuthValidateToken {
  authValidateToken {
    id
    email
    nickName
    firstName
    lastName
    isActive
  }
}
`;