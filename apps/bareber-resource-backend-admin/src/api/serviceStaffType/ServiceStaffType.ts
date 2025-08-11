import { Service } from "../service/Service";
import { StaffType } from "../staffType/StaffType";

export type ServiceStaffType = {
  id: string;
  services?: Service;
  staffTypes?: StaffType;
};
