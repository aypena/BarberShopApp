import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  userRoles?: UserRoleListRelationFilter;
};
