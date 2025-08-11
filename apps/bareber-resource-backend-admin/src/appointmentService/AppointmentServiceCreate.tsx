import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { UserTitle } from "../user/UserTitle";

export const AppointmentServiceCreate = (
  props: CreateProps
): React.ReactElement => {
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
        <NumberInput
          step={1}
          label="Duracion Final Minutos"
          source="duracionFinalMinutos"
        />
        <TextInput label="Estado" source="estado" />
        <DateTimeInput label="Fecha Agregado" source="fechaAgregado" />
        <TextInput label="Notas" source="notas" />
        <NumberInput label="Precio Final" source="precioFinal" />
        <ReferenceInput
          source="services.id"
          reference="Service"
          label="Services"
        >
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
