import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Datos Extra" source="datosExtra" />
        <TextField label="Email" source="email" />
        <TextField label="Fecha Registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Telefono" source="telefono" />
        <ReferenceManyField
          reference="Appointment"
          target="client_id"
          label="Appointments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Estado" source="estado" />
            <TextField label="Fecha Fin" source="fechaFin" />
            <TextField label="Fecha Inicio" source="fechaInicio" />
            <TextField label="ID" source="id" />
            <TextField label="Notas" source="notas" />
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="client_id"
          label="Notifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Appointment"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Estado" source="estado" />
            <TextField label="Fecha Envio" source="fechaEnvio" />
            <TextField label="Fecha Programada" source="fechaProgramada" />
            <TextField label="ID" source="id" />
            <TextField label="Mensaje" source="mensaje" />
            <TextField label="Tipo" source="tipo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
