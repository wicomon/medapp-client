export interface IPatient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  birth: number;
  birthString: string;
  allergies?: string;
  address: string;
  gender: string;
  phone2?: string;
  phone: string;

  isActive: boolean;
  isDeleted: boolean;
  doctorId: number;
  createdAt: number;
  createdBy?: number;
  updatedAt?: number;
  updatedBy?: number;
  deletedAt?: number;
  deletedBy?: number;
}
