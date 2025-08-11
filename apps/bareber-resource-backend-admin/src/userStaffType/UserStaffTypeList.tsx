import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserStaffTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserStaffTypes"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
