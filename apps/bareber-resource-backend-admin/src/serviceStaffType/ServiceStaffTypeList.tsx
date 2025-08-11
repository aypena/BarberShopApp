import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const ServiceStaffTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ServiceStaffTypes"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
