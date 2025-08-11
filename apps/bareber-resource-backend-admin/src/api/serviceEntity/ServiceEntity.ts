import { AppointmentServiceItem } from "../appointmentServiceItem/AppointmentServiceItem";
import { Decimal } from "decimal.js";
import { ServiceStaffLink } from "../serviceStaffLink/ServiceStaffLink";
import { StaffCustomService } from "../staffCustomService/StaffCustomService";

export type ServiceEntity = {
  activo: boolean | null;
  appointmentServices?: Array<AppointmentServiceItem>;
  categoria: string | null;
  createdAt: Date | null;
  descripcion: string | null;
  duracionBaseMinutos: number | null;
  id: string;
  nombre: string | null;
  precioBase: Decimal | null;
  serviceStaffLinks?: Array<ServiceStaffLink>;
  staffCustomServices?: Array<StaffCustomService>;
};
