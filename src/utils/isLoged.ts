import { Iloged } from "@/types/user.interface";

export const isLoged = async (token: string):Promise<Iloged> => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const graphql = JSON.stringify({
    query: `
    query AuthValidateToken {
      authValidateToken {
        id
        email
        nickName
        firstName
        lastName
        isActive
      }
    }`
  })
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL || "", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log({result})
        return result
      });
    return data;
  } catch (error: any) {
    // console.log(error);
    return {
      data: {
        authValidateToken: null
      }
    };
  }
};

export const verifyRestorePasswordJWT = async ( token: string) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", token);

  const graphql = JSON.stringify({
    query: `mutation VerifyRestoreJWT($token: String!) {
      verifyRestoreJWT(token: $token) {
        id
        email
        token
        createdAt
        status
      }
    }`,
    variables: {"token": token}
  })
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };
  try {

    const data = await fetch(process.env.NEXT_PUBLIC_BACKEND_AUTH_URL || "", requestOptions)
      .then(response => response.json())
      .then(result => result);
    console.log('isloged', data)
    return data;
  } catch (error: any) {
    console.log(error)
    return {
      data: {
        getUserById: null
      }
    };
  }
};
