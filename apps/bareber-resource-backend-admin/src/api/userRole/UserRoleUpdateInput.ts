import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  assignedAt?: Date | null;
  role?: RoleWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
