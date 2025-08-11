import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ServiceEntityWhereUniqueInput } from "../serviceEntity/ServiceEntityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AppointmentServiceItemUpdateInput = {
  appointment?: AppointmentWhereUniqueInput;
  duracionFinalMinutos?: number | null;
  estado?: string | null;
  fechaAgregado?: Date | null;
  notas?: string | null;
  precioFinal?: Decimal | null;
  serviceEntity?: ServiceEntityWhereUniqueInput;
  user?: UserWhereUniqueInput | null;
};
