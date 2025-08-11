import { AppointmentService } from "../appointmentService/AppointmentService";
import { Decimal } from "decimal.js";
import { ServiceStaffType } from "../serviceStaffType/ServiceStaffType";
import { StaffServiceCustom } from "../staffServiceCustom/StaffServiceCustom";

export type Service = {
  activo: boolean | null;
  appointmentServices?: Array<AppointmentService>;
  categoria: string | null;
  createdAt: Date | null;
  descripcion: string | null;
  duracionBaseMinutos: number | null;
  id: string;
  nombre: string | null;
  precioBase: Decimal | null;
  serviceStaffTypes?: Array<ServiceStaffType>;
  staffServiceCustom?: Array<StaffServiceCustom>;
};
