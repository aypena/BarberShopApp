import { ServiceStaffTypeCreateNestedManyWithoutStaffTypesInput } from "./ServiceStaffTypeCreateNestedManyWithoutStaffTypesInput";
import { UserStaffTypeCreateNestedManyWithoutStaffTypesInput } from "./UserStaffTypeCreateNestedManyWithoutStaffTypesInput";

export type StaffTypeCreateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  serviceStaffTypes?: ServiceStaffTypeCreateNestedManyWithoutStaffTypesInput;
  userStaffTypes?: UserStaffTypeCreateNestedManyWithoutStaffTypesInput;
};
