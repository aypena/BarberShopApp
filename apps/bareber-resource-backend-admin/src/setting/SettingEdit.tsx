import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Descripcion" source="descripcion" />
        <TextInput label="Tipo Dato" source="tipoDato" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Valor" source="valor" />
      </SimpleForm>
    </Edit>
  );
};
