import { Appointment } from "../appointment/Appointment";
import { Decimal } from "decimal.js";
import { Service } from "../service/Service";
import { User } from "../user/User";

export type AppointmentService = {
  appointments?: Appointment;
  duracionFinalMinutos: number | null;
  estado: string | null;
  fechaAgregado: Date | null;
  id: string;
  notas: string | null;
  precioFinal: Decimal | null;
  services?: Service;
  users?: User | null;
};
