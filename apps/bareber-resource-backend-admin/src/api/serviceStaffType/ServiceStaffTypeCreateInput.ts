import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffTypeCreateInput = {
  services: ServiceWhereUniqueInput;
  staffTypes: StaffTypeWhereUniqueInput;
};
