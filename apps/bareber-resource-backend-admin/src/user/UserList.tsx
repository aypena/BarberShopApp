import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Activo" source="activo" />
        <TextField label="Email" source="email" />
        <TextField label="Fecha Registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Telefono" source="telefono" />{" "}
      </Datagrid>
    </List>
  );
};
