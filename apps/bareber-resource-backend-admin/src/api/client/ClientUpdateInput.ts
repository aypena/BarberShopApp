import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { InputJsonValue } from "../../types";
import { NotificationUpdateManyWithoutClientsInput } from "./NotificationUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  datosExtra?: InputJsonValue;
  email?: string | null;
  fechaRegistro?: Date | null;
  nombre?: string | null;
  notifications?: NotificationUpdateManyWithoutClientsInput;
  telefono?: string | null;
};
