import { Role as TRole } from "../api/role/Role";

export const ROLE_TITLE_FIELD = "descripcion";

export const RoleTitle = (record: TRole): string => {
  return record.descripcion?.toString() || String(record.id);
};
