import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StaffServiceCustomShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Duracion Custom Minutos"
          source="duracionCustomMinutos"
        />
        <TextField label="ID" source="id" />
        <TextField label="Precio Custom" source="precioCustom" />
        <ReferenceField
          label="Services"
          source="service.id"
          reference="Service"
        >
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
