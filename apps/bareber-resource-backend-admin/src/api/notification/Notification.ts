import { Appointment } from "../appointment/Appointment";
import { Client } from "../client/Client";

export type Notification = {
  appointments?: Appointment;
  clients?: Client;
  createdAt: Date | null;
  estado: string | null;
  fechaEnvio: Date | null;
  fechaProgramada: Date | null;
  id: string;
  mensaje: string | null;
  tipo: string | null;
};
