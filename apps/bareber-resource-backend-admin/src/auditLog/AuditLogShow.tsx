import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AuditLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Accion" source="accion" />
        <TextField label="Cambios" source="cambios" />
        <TextField label="Fecha" source="fecha" />
        <TextField label="ID" source="id" />
        <TextField label="Registro Id" source="registroId" />
        <TextField label="Tabla Afectada" source="tablaAfectada" />
        <TextField label="Usuario Id" source="usuarioId" />
      </SimpleShowLayout>
    </Show>
  );
};
