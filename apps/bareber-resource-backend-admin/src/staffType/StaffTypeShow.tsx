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

import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { STAFFTYPE_TITLE_FIELD } from "./StaffTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StaffTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <ReferenceManyField
          reference="ServiceStaffType"
          target="staff_type_id"
          label="ServiceStaffTypes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Services"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Staff Types"
              source="stafftype.id"
              reference="StaffType"
            >
              <TextField source={STAFFTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserStaffType"
          target="staff_type_id"
          label="UserStaffTypes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Staff Types"
              source="stafftype.id"
              reference="StaffType"
            >
              <TextField source={STAFFTYPE_TITLE_FIELD} />
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
