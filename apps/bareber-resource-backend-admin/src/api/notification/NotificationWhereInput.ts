import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  appointments?: AppointmentWhereUniqueInput;
  clients?: ClientWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  estado?: StringNullableFilter;
  fechaEnvio?: DateTimeNullableFilter;
  fechaProgramada?: DateTimeNullableFilter;
  id?: StringFilter;
  mensaje?: StringNullableFilter;
  tipo?: StringNullableFilter;
};
