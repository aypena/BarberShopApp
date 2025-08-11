import { ServiceEntityWhereInput } from "./ServiceEntityWhereInput";
import { ServiceEntityOrderByInput } from "./ServiceEntityOrderByInput";

export type ServiceEntityFindManyArgs = {
  where?: ServiceEntityWhereInput;
  orderBy?: Array<ServiceEntityOrderByInput>;
  skip?: number;
  take?: number;
};
