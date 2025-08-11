import { ServiceStaffLinkCreateNestedManyWithoutStaffTypesInput } from "./ServiceStaffLinkCreateNestedManyWithoutStaffTypesInput";
import { UserStaffTypeCreateNestedManyWithoutStaffTypesInput } from "./UserStaffTypeCreateNestedManyWithoutStaffTypesInput";

export type StaffTypeCreateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  serviceStaffLinks?: ServiceStaffLinkCreateNestedManyWithoutStaffTypesInput;
  userStaffTypes?: UserStaffTypeCreateNestedManyWithoutStaffTypesInput;
};
