import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";
import { Notification } from "../notification/Notification";

export type Client = {
  appointments?: Array<Appointment>;
  datosExtra: JsonValue;
  email: string | null;
  fechaRegistro: Date | null;
  id: string;
  nombre: string | null;
  notifications?: Array<Notification>;
  telefono: string | null;
};
