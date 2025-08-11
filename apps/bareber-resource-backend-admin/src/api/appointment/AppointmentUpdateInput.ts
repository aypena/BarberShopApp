import { AppointmentServiceItemUpdateManyWithoutAppointmentsInput } from "./AppointmentServiceItemUpdateManyWithoutAppointmentsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { NotificationUpdateManyWithoutAppointmentsInput } from "./NotificationUpdateManyWithoutAppointmentsInput";
import { PaymentUpdateManyWithoutAppointmentsInput } from "./PaymentUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  appointmentServices?: AppointmentServiceItemUpdateManyWithoutAppointmentsInput;
  client?: ClientWhereUniqueInput;
  createdAt?: Date | null;
  estado?: string | null;
  fechaFin?: Date | null;
  fechaInicio?: Date | null;
  notas?: string | null;
  notifications?: NotificationUpdateManyWithoutAppointmentsInput;
  payments?: PaymentUpdateManyWithoutAppointmentsInput;
  updatedAt?: Date | null;
};
