import { AppointmentServiceItemCreateNestedManyWithoutUsersInput } from "./AppointmentServiceItemCreateNestedManyWithoutUsersInput";
import { StaffCustomServiceCreateNestedManyWithoutUsersInput } from "./StaffCustomServiceCreateNestedManyWithoutUsersInput";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";
import { UserStaffTypeCreateNestedManyWithoutUsersInput } from "./UserStaffTypeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceItemCreateNestedManyWithoutUsersInput;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  passwordHash?: string | null;
  staffCustomServices?: StaffCustomServiceCreateNestedManyWithoutUsersInput;
  telefono?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  userStaffTypes?: UserStaffTypeCreateNestedManyWithoutUsersInput;
};
