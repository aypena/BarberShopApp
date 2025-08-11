import { StringFilter } from "../../util/StringFilter";
import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffLinkWhereInput = {
  id?: StringFilter;
  serviceEntity?: ServiceEntityWhereUniqueInput;
  staffType?: StaffTypeWhereUniqueInput;
};
