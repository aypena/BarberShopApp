import { AppointmentServiceItemUpdateManyWithoutServiceEntitiesInput } from "./AppointmentServiceItemUpdateManyWithoutServiceEntitiesInput";
import { Decimal } from "decimal.js";
import { ServiceStaffLinkUpdateManyWithoutServiceEntitiesInput } from "./ServiceStaffLinkUpdateManyWithoutServiceEntitiesInput";
import { StaffCustomServiceUpdateManyWithoutServiceEntitiesInput } from "./StaffCustomServiceUpdateManyWithoutServiceEntitiesInput";

export type ServiceEntityUpdateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceItemUpdateManyWithoutServiceEntitiesInput;
  categoria?: string | null;
  createdAt?: Date | null;
  descripcion?: string | null;
  duracionBaseMinutos?: number | null;
  nombre?: string | null;
  precioBase?: Decimal | null;
  serviceStaffLinks?: ServiceStaffLinkUpdateManyWithoutServiceEntitiesInput;
  staffCustomServices?: StaffCustomServiceUpdateManyWithoutServiceEntitiesInput;
};
