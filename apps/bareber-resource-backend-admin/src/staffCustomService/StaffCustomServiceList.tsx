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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StaffCustomServiceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StaffCustomServices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
