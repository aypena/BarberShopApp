import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ClientTitle } from "../client/ClientTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Estado" source="estado" />
        <DateTimeInput label="Fecha Envio" source="fechaEnvio" />
        <DateTimeInput label="Fecha Programada" source="fechaProgramada" />
        <TextInput label="Mensaje" source="mensaje" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Edit>
  );
};
