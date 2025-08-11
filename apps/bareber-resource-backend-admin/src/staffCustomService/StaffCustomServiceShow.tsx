import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICEENTITY_TITLE_FIELD } from "../serviceEntity/ServiceEntityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StaffCustomServiceShow = (
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
          label="Service Entity"
          source="serviceentity.id"
          reference="ServiceEntity"
        >
          <TextField source={SERVICEENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
