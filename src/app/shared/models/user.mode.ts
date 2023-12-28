export class User {
    phoneNumber?: string |null;
    id?: string | null;
    password?: string | null;
    userName?: string | null;
    token?: string | null;
    isLoading? : boolean | null;
    signatureStatus? :string | null;
    roles?: Role[] | null
  }

export interface SimpleUser {
  name : string;
  phoneNumber: string;
  signatureStatus : SignatureStatus;
}

export enum SignatureStatus {
  APROVED = 'APROVED',
  INITIATED = 'INITIATED'
}

export enum Role{
  ADMIN = 'ADMIN',
  USER = 'USER'
}