import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuditLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AuditLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Accion" source="accion" />
        <TextField label="Cambios" source="cambios" />
        <TextField label="Fecha" source="fecha" />
        <TextField label="ID" source="id" />
        <TextField label="Registro Id" source="registroId" />
        <TextField label="Tabla Afectada" source="tablaAfectada" />
        <TextField label="Usuario Id" source="usuarioId" />{" "}
      </Datagrid>
    </List>
  );
};
