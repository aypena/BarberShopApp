import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentServiceCreateInput = {
  appointments: AppointmentWhereUniqueInput;
  duracionFinalMinutos?: number | null;
  estado?: string | null;
  fechaAgregado?: Date | null;
  notas?: string | null;
  precioFinal?: Decimal | null;
  services: ServiceWhereUniqueInput;
  users?: UserWhereUniqueInput | null;
};
