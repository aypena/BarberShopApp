import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AppointmentServiceShow = (
  props: ShowProps
): React.ReactElement => {
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
          label="Services"
          source="service.id"
          reference="Service"
        >
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
