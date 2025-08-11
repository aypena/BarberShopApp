import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Created At" source="createdAt" />
        <TextField label="Detalle Pago" source="detallePago" />
        <TextField label="Fecha Pago" source="fechaPago" />
        <TextField label="ID" source="id" />
        <TextField label="Metodo Pago" source="metodoPago" />
        <TextField label="Monto Total" source="montoTotal" />
      </SimpleShowLayout>
    </Show>
  );
};
