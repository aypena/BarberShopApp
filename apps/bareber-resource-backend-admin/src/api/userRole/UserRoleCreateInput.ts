import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  assignedAt?: Date | null;
  role: RoleWhereUniqueInput;
  user: UserWhereUniqueInput;
};
