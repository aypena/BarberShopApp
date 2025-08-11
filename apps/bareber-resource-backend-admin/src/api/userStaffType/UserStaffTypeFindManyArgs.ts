import { UserStaffTypeWhereInput } from "./UserStaffTypeWhereInput";
import { UserStaffTypeOrderByInput } from "./UserStaffTypeOrderByInput";

export type UserStaffTypeFindManyArgs = {
  where?: UserStaffTypeWhereInput;
  orderBy?: Array<UserStaffTypeOrderByInput>;
  skip?: number;
  take?: number;
};
