import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffTypeUpdateInput = {
  services?: ServiceWhereUniqueInput;
  staffTypes?: StaffTypeWhereUniqueInput;
};
