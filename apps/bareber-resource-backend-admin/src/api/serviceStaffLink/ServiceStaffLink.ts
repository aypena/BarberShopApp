import { ServiceEntity } from "../serviceEntity/ServiceEntity";
import { StaffType } from "../staffType/StaffType";

export type ServiceStaffLink = {
  id: string;
  serviceEntity?: ServiceEntity;
  staffType?: StaffType;
};
