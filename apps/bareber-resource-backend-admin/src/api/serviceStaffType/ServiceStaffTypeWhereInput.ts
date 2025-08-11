import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";

export type ServiceStaffTypeWhereInput = {
  id?: StringFilter;
  services?: ServiceWhereUniqueInput;
  staffTypes?: StaffTypeWhereUniqueInput;
};
