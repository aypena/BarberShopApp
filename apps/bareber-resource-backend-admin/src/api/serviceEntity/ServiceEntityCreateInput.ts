import { AppointmentServiceItemCreateNestedManyWithoutServiceEntitiesInput } from "./AppointmentServiceItemCreateNestedManyWithoutServiceEntitiesInput";
import { Decimal } from "decimal.js";
import { ServiceStaffLinkCreateNestedManyWithoutServiceEntitiesInput } from "./ServiceStaffLinkCreateNestedManyWithoutServiceEntitiesInput";
import { StaffCustomServiceCreateNestedManyWithoutServiceEntitiesInput } from "./StaffCustomServiceCreateNestedManyWithoutServiceEntitiesInput";

export type ServiceEntityCreateInput = {
  activo?: boolean | null;
  appointmentServices?: AppointmentServiceItemCreateNestedManyWithoutServiceEntitiesInput;
  categoria?: string | null;
  createdAt?: Date | null;
  descripcion?: string | null;
  duracionBaseMinutos?: number | null;
  nombre?: string | null;
  precioBase?: Decimal | null;
  serviceStaffLinks?: ServiceStaffLinkCreateNestedManyWithoutServiceEntitiesInput;
  staffCustomServices?: StaffCustomServiceCreateNestedManyWithoutServiceEntitiesInput;
};
