import { JsonValue } from "type-fest";

export type AuditLog = {
  accion: string | null;
  cambios: JsonValue;
  fecha: Date | null;
  id: string;
  registroId: string | null;
  tablaAfectada: string | null;
  usuarioId: string | null;
};
