import { AppointmentServiceCreateNestedManyWithoutAppointmentsInput } from "./AppointmentServiceCreateNestedManyWithoutAppointmentsInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { NotificationCreateNestedManyWithoutAppointmentsInput } from "./NotificationCreateNestedManyWithoutAppointmentsInput";
import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  appointmentServices?: AppointmentServiceCreateNestedManyWithoutAppointmentsInput;
  clients: ClientWhereUniqueInput;
  createdAt?: Date | null;
  estado?: string | null;
  fechaFin?: Date | null;
  fechaInicio?: Date | null;
  notas?: string | null;
  notifications?: NotificationCreateNestedManyWithoutAppointmentsInput;
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;
  updatedAt?: Date | null;
};
