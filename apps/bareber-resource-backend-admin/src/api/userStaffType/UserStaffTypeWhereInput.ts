import { StringFilter } from "../../util/StringFilter";
import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStaffTypeWhereInput = {
  id?: StringFilter;
  staffType?: StaffTypeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
