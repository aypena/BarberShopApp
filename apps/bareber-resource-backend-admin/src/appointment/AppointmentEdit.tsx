import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppointmentServiceItemTitle } from "../appointmentServiceItem/AppointmentServiceItemTitle";
import { ClientTitle } from "../client/ClientTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { PaymentTitle } from "../payment/PaymentTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appointmentServices"
          reference="AppointmentServiceItem"
        >
          <SelectArrayInput
            optionText={AppointmentServiceItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Estado" source="estado" />
        <DateTimeInput label="Fecha Fin" source="fechaFin" />
        <DateTimeInput label="Fecha Inicio" source="fechaInicio" />
        <TextInput label="Notas" source="notas" />
        <ReferenceArrayInput source="notifications" reference="Notification">
          <SelectArrayInput
            optionText={NotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="payments" reference="Payment">
          <SelectArrayInput
            optionText={PaymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
