import { AppointmentServiceItemUpdateManyWithoutUsersInput } from "./AppointmentServiceItemUpdateManyWithoutUsersInput";
import { StaffCustomServiceUpdateManyWithoutUsersInput } from "./StaffCustomServiceUpdateManyWithoutUsersInput";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";
import { UserStaffTypeUpdateManyWithoutUsersInput } from "./UserStaffTypeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceItemUpdateManyWithoutUsersInput;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  passwordHash?: string | null;
  staffCustomServices?: StaffCustomServiceUpdateManyWithoutUsersInput;
  telefono?: string | null;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  userStaffTypes?: UserStaffTypeUpdateManyWithoutUsersInput;
};
