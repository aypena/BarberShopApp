import { Appointment } from "../appointment/Appointment";
import { Decimal } from "decimal.js";
import { ServiceEntity } from "../serviceEntity/ServiceEntity";
import { User } from "../user/User";

export type AppointmentServiceItem = {
  appointment?: Appointment;
  duracionFinalMinutos: number | null;
  estado: string | null;
  fechaAgregado: Date | null;
  id: string;
  notas: string | null;
  precioFinal: Decimal | null;
  serviceEntity?: ServiceEntity;
  user?: User | null;
};
