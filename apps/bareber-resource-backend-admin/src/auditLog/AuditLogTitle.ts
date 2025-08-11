import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "accion";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.accion?.toString() || String(record.id);
};
