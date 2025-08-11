import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Accion" source="accion" />
        <div />
        <DateTimeInput label="Fecha" source="fecha" />
        <TextInput label="Registro Id" source="registroId" />
        <TextInput label="Tabla Afectada" source="tablaAfectada" />
        <TextInput label="Usuario Id" source="usuarioId" />
      </SimpleForm>
    </Create>
  );
};
