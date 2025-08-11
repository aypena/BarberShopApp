import { StaffTypeWhereUniqueInput } from "../staffType/StaffTypeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStaffTypeCreateInput = {
  staffType: StaffTypeWhereUniqueInput;
  user: UserWhereUniqueInput;
};
