import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Services"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="Activo" source="activo" />
        <TextField label="Categoria" source="categoria" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="Duracion Base Minutos" source="duracionBaseMinutos" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Precio Base" source="precioBase" />{" "}
      </Datagrid>
    </List>
  );
};
