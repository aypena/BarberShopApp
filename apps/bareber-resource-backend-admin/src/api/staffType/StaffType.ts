import { ServiceStaffLink } from "../serviceStaffLink/ServiceStaffLink";
import { UserStaffType } from "../userStaffType/UserStaffType";

export type StaffType = {
  descripcion: string | null;
  id: string;
  nombre: string | null;
  serviceStaffLinks?: Array<ServiceStaffLink>;
  userStaffTypes?: Array<UserStaffType>;
};
