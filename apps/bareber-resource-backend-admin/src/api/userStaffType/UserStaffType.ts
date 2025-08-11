import { StaffType } from "../staffType/StaffType";
import { User } from "../user/User";

export type UserStaffType = {
  id: string;
  staffType?: StaffType;
  user?: User;
};
