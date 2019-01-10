import { IGeo } from "./geo";
export interface IAddress {
  address: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: any;
    geo?: IGeo;
  };
}
