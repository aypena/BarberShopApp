import { AppointmentServiceItemListRelationFilter } from "../appointmentServiceItem/AppointmentServiceItemListRelationFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type AppointmentWhereInput = {
  appointmentServices?: AppointmentServiceItemListRelationFilter;
  client?: ClientWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  estado?: StringNullableFilter;
  fechaFin?: DateTimeNullableFilter;
  fechaInicio?: DateTimeNullableFilter;
  id?: StringFilter;
  notas?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  payments?: PaymentListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
