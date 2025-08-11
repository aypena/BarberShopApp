import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  accion?: SortOrder;
  cambios?: SortOrder;
  fecha?: SortOrder;
  id?: SortOrder;
  registroId?: SortOrder;
  tablaAfectada?: SortOrder;
  usuarioId?: SortOrder;
};
