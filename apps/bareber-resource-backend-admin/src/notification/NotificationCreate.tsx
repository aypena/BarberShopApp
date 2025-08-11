import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClientTitle } from "../client/ClientTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointments.id"
          reference="Appointment"
          label="Appointments"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="clients.id" reference="Client" label="Clients">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Estado" source="estado" />
        <DateTimeInput label="Fecha Envio" source="fechaEnvio" />
        <DateTimeInput label="Fecha Programada" source="fechaProgramada" />
        <TextInput label="Mensaje" source="mensaje" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Create>
  );
};
