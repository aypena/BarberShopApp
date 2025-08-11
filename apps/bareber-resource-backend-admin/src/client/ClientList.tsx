import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Clients"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Datos Extra" source="datosExtra" />
        <TextField label="Email" source="email" />
        <TextField label="Fecha Registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Telefono" source="telefono" />{" "}
      </Datagrid>
    </List>
  );
};
