import { ServiceStaffLinkUpdateManyWithoutStaffTypesInput } from "./ServiceStaffLinkUpdateManyWithoutStaffTypesInput";
import { UserStaffTypeUpdateManyWithoutStaffTypesInput } from "./UserStaffTypeUpdateManyWithoutStaffTypesInput";

export type StaffTypeUpdateInput = {
  descripcion?: string | null;
  nombre?: string | null;
  serviceStaffLinks?: ServiceStaffLinkUpdateManyWithoutStaffTypesInput;
  userStaffTypes?: UserStaffTypeUpdateManyWithoutStaffTypesInput;
};
