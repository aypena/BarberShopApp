import { AppointmentServiceItem } from "../appointmentServiceItem/AppointmentServiceItem";
import { StaffCustomService } from "../staffCustomService/StaffCustomService";
import { UserRole } from "../userRole/UserRole";
import { UserStaffType } from "../userStaffType/UserStaffType";

export type User = {
  activo: boolean | null;
  appointmentServices?: Array<AppointmentServiceItem>;
  email: string | null;
  fechaRegistro: Date | null;
  id: string;
  nombre: string | null;
  passwordHash: string | null;
  staffCustomServices?: Array<StaffCustomService>;
  telefono: string | null;
  userRoles?: Array<UserRole>;
  userStaffTypes?: Array<UserStaffType>;
};
