import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const ServiceStaffTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
