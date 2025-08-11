import { AppointmentService } from "../appointmentService/AppointmentService";
import { StaffServiceCustom } from "../staffServiceCustom/StaffServiceCustom";
import { UserRole } from "../userRole/UserRole";
import { UserStaffType } from "../userStaffType/UserStaffType";

export type User = {
  activo: boolean | null;
  appointmentServices?: Array<AppointmentService>;
  email: string | null;
  fechaRegistro: Date | null;
  id: string;
  nombre: string | null;
  passwordHash: string | null;
  staffServiceCustom?: Array<StaffServiceCustom>;
  telefono: string | null;
  userRoles?: Array<UserRole>;
  userStaffTypes?: Array<UserStaffType>;
};
