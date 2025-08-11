import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";
import { Decimal } from "decimal.js";

export type Payment = {
  appointments?: Appointment;
  createdAt: Date | null;
  detallePago: JsonValue;
  fechaPago: Date | null;
  id: string;
  metodoPago: string | null;
  montoTotal: Decimal | null;
};
