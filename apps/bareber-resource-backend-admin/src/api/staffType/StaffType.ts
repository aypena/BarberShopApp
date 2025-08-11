import { ServiceStaffType } from "../serviceStaffType/ServiceStaffType";
import { UserStaffType } from "../userStaffType/UserStaffType";

export type StaffType = {
  descripcion: string | null;
  id: string;
  nombre: string | null;
  serviceStaffTypes?: Array<ServiceStaffType>;
  userStaffTypes?: Array<UserStaffType>;
};
