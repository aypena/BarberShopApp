import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointments.id"
          reference="Appointment"
          label="Appointments"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Created At" source="createdAt" />
        <div />
        <DateTimeInput label="Fecha Pago" source="fechaPago" />
        <TextInput label="Metodo Pago" source="metodoPago" />
        <NumberInput label="Monto Total" source="montoTotal" />
      </SimpleForm>
    </Edit>
  );
};
