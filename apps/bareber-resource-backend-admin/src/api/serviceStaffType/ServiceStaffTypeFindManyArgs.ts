import { ServiceStaffTypeWhereInput } from "./ServiceStaffTypeWhereInput";
import { ServiceStaffTypeOrderByInput } from "./ServiceStaffTypeOrderByInput";

export type ServiceStaffTypeFindManyArgs = {
  where?: ServiceStaffTypeWhereInput;
  orderBy?: Array<ServiceStaffTypeOrderByInput>;
  skip?: number;
  take?: number;
};
