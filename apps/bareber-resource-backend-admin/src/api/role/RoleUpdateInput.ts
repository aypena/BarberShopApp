import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
