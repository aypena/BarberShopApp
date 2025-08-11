import { ServiceStaffTypeUpdateManyWithoutStaffTypesInput } from "./ServiceStaffTypeUpdateManyWithoutStaffTypesInput";
import { UserStaffTypeUpdateManyWithoutStaffTypesInput } from "./UserStaffTypeUpdateManyWithoutStaffTypesInput";

export type StaffTypeUpdateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  serviceStaffTypes?: ServiceStaffTypeUpdateManyWithoutStaffTypesInput;
  userStaffTypes?: UserStaffTypeUpdateManyWithoutStaffTypesInput;
};
