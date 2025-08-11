import { AppointmentServiceCreateNestedManyWithoutUsersInput } from "./AppointmentServiceCreateNestedManyWithoutUsersInput";
import { StaffServiceCustomCreateNestedManyWithoutUsersInput } from "./StaffServiceCustomCreateNestedManyWithoutUsersInput";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";
import { UserStaffTypeCreateNestedManyWithoutUsersInput } from "./UserStaffTypeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceCreateNestedManyWithoutUsersInput;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  passwordHash?: string | null;
  staffServiceCustom?: StaffServiceCustomCreateNestedManyWithoutUsersInput;
  telefono?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  userStaffTypes?: UserStaffTypeCreateNestedManyWithoutUsersInput;
};
