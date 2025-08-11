import { InputJsonValue } from "../../types";

export type AuditLogUpdateInput = {
  accion?: string | null;
  cambios?: InputJsonValue;
  fecha?: Date | null;
  registroId?: string | null;
  tablaAfectada?: string | null;
  usuarioId?: string | null;
};
