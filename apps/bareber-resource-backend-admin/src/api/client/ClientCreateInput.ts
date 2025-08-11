import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { InputJsonValue } from "../../types";
import { NotificationCreateNestedManyWithoutClientsInput } from "./NotificationCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  datosExtra?: InputJsonValue;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  notifications?: NotificationCreateNestedManyWithoutClientsInput;
  telefono?: string | null;
};
