import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AppointmentServiceListRelationFilter } from "../appointmentService/AppointmentServiceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StaffServiceCustomListRelationFilter } from "../staffServiceCustom/StaffServiceCustomListRelationFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";
import { UserStaffTypeListRelationFilter } from "../userStaffType/UserStaffTypeListRelationFilter";

export type UserWhereInput = {
  activo?: BooleanNullableFilter;
  appointmentServices?: AppointmentServiceListRelationFilter;
  email?: StringNullableFilter;
  fechaRegistro?: DateTimeNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  staffServiceCustom?: StaffServiceCustomListRelationFilter;
  telefono?: StringNullableFilter;
  userRoles?: UserRoleListRelationFilter;
  userStaffTypes?: UserStaffTypeListRelationFilter;
};
