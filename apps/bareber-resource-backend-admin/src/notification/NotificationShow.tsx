import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const NotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Tipo" source="tipo" />
      </SimpleShowLayout>
    </Show>
  );
};
