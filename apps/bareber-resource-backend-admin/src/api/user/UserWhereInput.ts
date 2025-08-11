import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AppointmentServiceItemListRelationFilter } from "../appointmentServiceItem/AppointmentServiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StaffCustomServiceListRelationFilter } from "../staffCustomService/StaffCustomServiceListRelationFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";
import { UserStaffTypeListRelationFilter } from "../userStaffType/UserStaffTypeListRelationFilter";

export type UserWhereInput = {
  activo?: BooleanNullableFilter;
  appointmentServices?: AppointmentServiceItemListRelationFilter;
  email?: StringNullableFilter;
  fechaRegistro?: DateTimeNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  staffCustomServices?: StaffCustomServiceListRelationFilter;
  telefono?: StringNullableFilter;
  userRoles?: UserRoleListRelationFilter;
  userStaffTypes?: UserStaffTypeListRelationFilter;
};
