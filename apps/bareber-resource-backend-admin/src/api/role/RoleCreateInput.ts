import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
