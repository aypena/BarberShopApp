import { StaffServiceCustom as TStaffServiceCustom } from "../api/staffServiceCustom/StaffServiceCustom";

export const STAFFSERVICECUSTOM_TITLE_FIELD = "id";

export const StaffServiceCustomTitle = (
  record: TStaffServiceCustom
): string => {
  return record.id?.toString() || String(record.id);
};
