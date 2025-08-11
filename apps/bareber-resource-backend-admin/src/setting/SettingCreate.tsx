import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descripcion" source="descripcion" />
        <TextInput label="Tipo Dato" source="tipoDato" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Valor" source="valor" />
      </SimpleForm>
    </Create>
  );
};
