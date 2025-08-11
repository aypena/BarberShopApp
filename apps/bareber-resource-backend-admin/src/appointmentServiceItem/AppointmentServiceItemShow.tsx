import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { SERVICEENTITY_TITLE_FIELD } from "../serviceEntity/ServiceEntityTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AppointmentServiceItemShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Appointment"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Duracion Final Minutos"
          source="duracionFinalMinutos"
        />
        <TextField label="Estado" source="estado" />
        <TextField label="Fecha Agregado" source="fechaAgregado" />
        <TextField label="ID" source="id" />
        <TextField label="Notas" source="notas" />
        <TextField label="Precio Final" source="precioFinal" />
        <ReferenceField
          label="Service Entity"
          source="serviceentity.id"
          reference="ServiceEntity"
        >
          <TextField source={SERVICEENTITY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
