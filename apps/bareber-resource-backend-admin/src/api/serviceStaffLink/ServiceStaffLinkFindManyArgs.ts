import { ServiceStaffLinkWhereInput } from "./ServiceStaffLinkWhereInput";
import { ServiceStaffLinkOrderByInput } from "./ServiceStaffLinkOrderByInput";

export type ServiceStaffLinkFindManyArgs = {
  where?: ServiceStaffLinkWhereInput;
  orderBy?: Array<ServiceStaffLinkOrderByInput>;
  skip?: number;
  take?: number;
};
