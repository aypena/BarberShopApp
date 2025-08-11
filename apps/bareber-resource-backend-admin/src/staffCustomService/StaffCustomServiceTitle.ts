import { StaffCustomService as TStaffCustomService } from "../api/staffCustomService/StaffCustomService";

export const STAFFCUSTOMSERVICE_TITLE_FIELD = "id";

export const StaffCustomServiceTitle = (
  record: TStaffCustomService
): string => {
  return record.id?.toString() || String(record.id);
};
