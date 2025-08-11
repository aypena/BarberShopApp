import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StaffTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StaffTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />{" "}
      </Datagrid>
    </List>
  );
};
