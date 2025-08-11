import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SERVICEENTITY_TITLE_FIELD } from "../serviceEntity/ServiceEntityTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const ServiceStaffLinkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Service Entity"
          source="serviceentity.id"
          reference="ServiceEntity"
        >
          <TextField source={SERVICEENTITY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Staff Type"
          source="stafftype.id"
          reference="StaffType"
        >
          <TextField source={STAFFTYPE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
