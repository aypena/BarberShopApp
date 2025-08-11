import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <div />
        <DateTimeInput label="Fecha Pago" source="fechaPago" />
        <TextInput label="Metodo Pago" source="metodoPago" />
        <NumberInput label="Monto Total" source="montoTotal" />
      </SimpleForm>
    </Create>
  );
};
