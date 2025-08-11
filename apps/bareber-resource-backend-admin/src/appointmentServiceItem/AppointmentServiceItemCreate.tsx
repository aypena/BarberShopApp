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
import { ServiceEntityTitle } from "../serviceEntity/ServiceEntityTitle";
import { UserTitle } from "../user/UserTitle";

export const AppointmentServiceItemCreate = (
  props: CreateProps
): React.ReactElement => {
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
          source="serviceEntity.id"
          reference="ServiceEntity"
          label="Service Entity"
        >
          <SelectInput optionText={ServiceEntityTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
