import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation AuthLogin($loginInput: LoginInput!) {
    authLogin(loginInput: $loginInput) {
      token
    }
  }
`;