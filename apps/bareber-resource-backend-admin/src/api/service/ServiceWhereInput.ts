import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AppointmentServiceListRelationFilter } from "../appointmentService/AppointmentServiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ServiceStaffTypeListRelationFilter } from "../serviceStaffType/ServiceStaffTypeListRelationFilter";
import { StaffServiceCustomListRelationFilter } from "../staffServiceCustom/StaffServiceCustomListRelationFilter";

export type ServiceWhereInput = {
  activo?: BooleanNullableFilter;
  appointmentServices?: AppointmentServiceListRelationFilter;
  categoria?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  descripcion?: StringNullableFilter;
  duracionBaseMinutos?: IntNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  precioBase?: DecimalNullableFilter;
  serviceStaffTypes?: ServiceStaffTypeListRelationFilter;
  staffServiceCustom?: StaffServiceCustomListRelationFilter;
};
