import { UserStaffType as TUserStaffType } from "../api/userStaffType/UserStaffType";

export const USERSTAFFTYPE_TITLE_FIELD = "id";

export const UserStaffTypeTitle = (record: TUserStaffType): string => {
  return record.id?.toString() || String(record.id);
};
