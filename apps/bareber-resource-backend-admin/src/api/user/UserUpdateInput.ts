import { AppointmentServiceUpdateManyWithoutUsersInput } from "./AppointmentServiceUpdateManyWithoutUsersInput";
import { StaffServiceCustomUpdateManyWithoutUsersInput } from "./StaffServiceCustomUpdateManyWithoutUsersInput";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";
import { UserStaffTypeUpdateManyWithoutUsersInput } from "./UserStaffTypeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceUpdateManyWithoutUsersInput;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  passwordHash?: string | null;
  staffServiceCustom?: StaffServiceCustomUpdateManyWithoutUsersInput;
  telefono?: string | null;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  userStaffTypes?: UserStaffTypeUpdateManyWithoutUsersInput;
};
