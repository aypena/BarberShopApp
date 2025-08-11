import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Accion" source="accion" />
        <div />
        <DateTimeInput label="Fecha" source="fecha" />
        <TextInput label="Registro Id" source="registroId" />
        <TextInput label="Tabla Afectada" source="tablaAfectada" />
        <TextInput label="Usuario Id" source="usuarioId" />
      </SimpleForm>
    </Edit>
  );
};
