import { AppointmentServiceUpdateManyWithoutServicesInput } from "./AppointmentServiceUpdateManyWithoutServicesInput";
import { Decimal } from "decimal.js";
import { ServiceStaffTypeUpdateManyWithoutServicesInput } from "./ServiceStaffTypeUpdateManyWithoutServicesInput";
import { StaffServiceCustomUpdateManyWithoutServicesInput } from "./StaffServiceCustomUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceUpdateManyWithoutServicesInput;
  categoria?: string | null;
  createdAt?: Date | null;
  descripcion?: string | null;
  duracionBaseMinutos?: number | null;
  nombre?: string | null;
  precioBase?: Decimal | null;
  serviceStaffTypes?: ServiceStaffTypeUpdateManyWithoutServicesInput;
  staffServiceCustom?: StaffServiceCustomUpdateManyWithoutServicesInput;
};
