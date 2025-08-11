import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStaffTypeUpdateInput = {
  staffTypes?: StaffTypeWhereUniqueInput;
  users?: UserWhereUniqueInput;
};
