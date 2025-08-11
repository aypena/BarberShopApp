import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffLinkUpdateInput = {
  serviceEntity?: ServiceEntityWhereUniqueInput;
  staffType?: StaffTypeWhereUniqueInput;
};
