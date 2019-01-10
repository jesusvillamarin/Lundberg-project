import { IPosts } from './posts';
import { IAddress,  } from './address';
import { ICompany } from './company';
export interface IUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: IAddress;
  phone?: number;
  website?: string;
  company?: ICompany;
}
