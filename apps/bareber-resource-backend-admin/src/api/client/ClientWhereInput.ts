import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type ClientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  datosExtra?: JsonFilter;
  email?: StringNullableFilter;
  fechaRegistro?: DateTimeNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  telefono?: StringNullableFilter;
};
