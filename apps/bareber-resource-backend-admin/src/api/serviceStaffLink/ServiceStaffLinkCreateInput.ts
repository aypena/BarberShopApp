import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffLinkCreateInput = {
  serviceEntity: ServiceEntityWhereUniqueInput;
  staffType: StaffTypeWhereUniqueInput;
};
