import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceStaffTypeListRelationFilter } from "../serviceStaffType/ServiceStaffTypeListRelationFilter";
import { UserStaffTypeListRelationFilter } from "../userStaffType/UserStaffTypeListRelationFilter";

export type StaffTypeWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  serviceStaffTypes?: ServiceStaffTypeListRelationFilter;
  userStaffTypes?: UserStaffTypeListRelationFilter;
};
