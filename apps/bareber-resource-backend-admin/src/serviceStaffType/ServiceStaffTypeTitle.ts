import { ServiceStaffType as TServiceStaffType } from "../api/serviceStaffType/ServiceStaffType";

export const SERVICESTAFFTYPE_TITLE_FIELD = "id";

export const ServiceStaffTypeTitle = (record: TServiceStaffType): string => {
  return record.id?.toString() || String(record.id);
};
