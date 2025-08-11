import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleWhereInput = {
  assignedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  role?: RoleWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
