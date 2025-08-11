import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROLE_TITLE_FIELD } from "./RoleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RoleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <ReferenceManyField
          reference="UserRole"
          target="role_id"
          label="UserRoles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Assigned At" source="assignedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Roles" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
