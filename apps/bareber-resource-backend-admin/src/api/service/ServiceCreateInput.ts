import { AppointmentServiceCreateNestedManyWithoutServicesInput } from "./AppointmentServiceCreateNestedManyWithoutServicesInput";
import { Decimal } from "decimal.js";
import { ServiceStaffTypeCreateNestedManyWithoutServicesInput } from "./ServiceStaffTypeCreateNestedManyWithoutServicesInput";
import { StaffServiceCustomCreateNestedManyWithoutServicesInput } from "./StaffServiceCustomCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceCreateNestedManyWithoutServicesInput;
  categoria?: string | null;
  createdAt?: Date | null;
  descripcion?: string | null;
  duracionBaseMinutos?: number | null;
  nombre?: string | null;
  precioBase?: Decimal | null;
  serviceStaffTypes?: ServiceStaffTypeCreateNestedManyWithoutServicesInput;
  staffServiceCustom?: StaffServiceCustomCreateNestedManyWithoutServicesInput;
};
