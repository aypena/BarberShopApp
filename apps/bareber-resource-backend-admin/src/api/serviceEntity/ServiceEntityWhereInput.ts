import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AppointmentServiceItemListRelationFilter } from "../appointmentServiceItem/AppointmentServiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ServiceStaffLinkListRelationFilter } from "../serviceStaffLink/ServiceStaffLinkListRelationFilter";
import { StaffCustomServiceListRelationFilter } from "../staffCustomService/StaffCustomServiceListRelationFilter";

export type ServiceEntityWhereInput = {
  activo?: BooleanNullableFilter;
  appointmentServices?: AppointmentServiceItemListRelationFilter;
  categoria?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  descripcion?: StringNullableFilter;
  duracionBaseMinutos?: IntNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  precioBase?: DecimalNullableFilter;
  serviceStaffLinks?: ServiceStaffLinkListRelationFilter;
  staffCustomServices?: StaffCustomServiceListRelationFilter;
};
