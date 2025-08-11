import { StaffType } from "../staffType/StaffType";
import { User } from "../user/User";

export type UserStaffType = {
  id: string;
  staffTypes?: StaffType;
  users?: User;
};
