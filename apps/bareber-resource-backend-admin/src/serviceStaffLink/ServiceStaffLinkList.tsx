import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVICEENTITY_TITLE_FIELD } from "../serviceEntity/ServiceEntityTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const ServiceStaffLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ServiceStaffLinks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
