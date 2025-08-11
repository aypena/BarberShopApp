import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuditLogWhereInput = {
  accion?: StringNullableFilter;
  cambios?: JsonFilter;
  fecha?: DateTimeNullableFilter;
  id?: StringFilter;
  registroId?: StringNullableFilter;
  tablaAfectada?: StringNullableFilter;
  usuarioId?: StringNullableFilter;
};
