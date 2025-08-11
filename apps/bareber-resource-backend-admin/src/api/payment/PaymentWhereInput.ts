import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type PaymentWhereInput = {
  appointments?: AppointmentWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  detallePago?: JsonFilter;
  fechaPago?: DateTimeNullableFilter;
  id?: StringFilter;
  metodoPago?: StringNullableFilter;
  montoTotal?: DecimalNullableFilter;
};
