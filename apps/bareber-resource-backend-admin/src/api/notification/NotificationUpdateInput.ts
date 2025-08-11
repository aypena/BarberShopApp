import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type NotificationUpdateInput = {
  appointment?: AppointmentWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  createdAt?: Date | null;
  estado?: string | null;
  fechaEnvio?: Date | null;
  fechaProgramada?: Date | null;
  mensaje?: string | null;
  tipo?: string | null;
};
