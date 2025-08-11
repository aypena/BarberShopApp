import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServiceStaffLinkListRelationFilter } from "../serviceStaffLink/ServiceStaffLinkListRelationFilter";
import { UserStaffTypeListRelationFilter } from "../userStaffType/UserStaffTypeListRelationFilter";

export type StaffTypeWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  serviceStaffLinks?: ServiceStaffLinkListRelationFilter;
  userStaffTypes?: UserStaffTypeListRelationFilter;
};
