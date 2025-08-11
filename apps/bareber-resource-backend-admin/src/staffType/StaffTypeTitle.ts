import { StaffType as TStaffType } from "../api/staffType/StaffType";

export const STAFFTYPE_TITLE_FIELD = "descripcion";

export const StaffTypeTitle = (record: TStaffType): string => {
  return record.descripcion?.toString() || String(record.id);
};
