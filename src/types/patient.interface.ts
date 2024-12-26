export interface IPatient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
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
