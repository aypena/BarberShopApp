import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Clients" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Created At" source="createdAt" />
        <TextField label="Estado" source="estado" />
        <TextField label="Fecha Fin" source="fechaFin" />
        <TextField label="Fecha Inicio" source="fechaInicio" />
        <TextField label="ID" source="id" />
        <TextField label="Notas" source="notas" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="AppointmentService"
          target="appointment_id"
          label="AppointmentServices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="appointment_id"
          label="Notifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Appointments"
              source="appointment.id"
              reference="Appointment"
            >
              <TextField source={APPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Clients"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Created At" source="createdAt" />
            <TextField label="Estado" source="estado" />
            <TextField label="Fecha Envio" source="fechaEnvio" />
            <TextField label="Fecha Programada" source="fechaProgramada" />
            <TextField label="ID" source="id" />
            <TextField label="Mensaje" source="mensaje" />
            <TextField label="Tipo" source="tipo" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="appointment_id"
          label="Payments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
