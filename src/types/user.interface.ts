export interface IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
}

export interface Iloged {
  data: {
    authValidateToken: {
      idUser: string,
      nickName: string,
      refreshToken: string
    } | null;
  };
}