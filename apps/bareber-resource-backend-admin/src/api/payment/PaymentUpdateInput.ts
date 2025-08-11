import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { Decimal } from "decimal.js";

export type PaymentUpdateInput = {
  appointment?: AppointmentWhereUniqueInput;
  createdAt?: Date | null;
  detallePago?: InputJsonValue;
  fechaPago?: Date | null;
  metodoPago?: string | null;
  montoTotal?: Decimal | null;
};
