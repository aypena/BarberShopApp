import { ServiceStaffLink as TServiceStaffLink } from "../api/serviceStaffLink/ServiceStaffLink";

export const SERVICESTAFFLINK_TITLE_FIELD = "id";

export const ServiceStaffLinkTitle = (record: TServiceStaffLink): string => {
  return record.id?.toString() || String(record.id);
};
