import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const NotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Notifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Appointments"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Clients" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Estado" source="estado" />
        <TextField label="Fecha Envio" source="fechaEnvio" />
        <TextField label="Fecha Programada" source="fechaProgramada" />
        <TextField label="ID" source="id" />
        <TextField label="Mensaje" source="mensaje" />
        <TextField label="Tipo" source="tipo" />{" "}
      </Datagrid>
    </List>
  );
};
