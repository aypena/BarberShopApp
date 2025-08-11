import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SettingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="Tipo Dato" source="tipoDato" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Valor" source="valor" />
      </SimpleShowLayout>
    </Show>
  );
};
