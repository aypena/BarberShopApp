import { AppointmentServiceItem } from "../appointmentServiceItem/AppointmentServiceItem";
import { Client } from "../client/Client";
import { Notification } from "../notification/Notification";
import { Payment } from "../payment/Payment";

export type Appointment = {
  appointmentServices?: Array<AppointmentServiceItem>;
  client?: Client;
  createdAt: Date | null;
  estado: string | null;
  fechaFin: Date | null;
  fechaInicio: Date | null;
  id: string;
  notas: string | null;
  notifications?: Array<Notification>;
  payments?: Array<Payment>;
  updatedAt: Date | null;
};
