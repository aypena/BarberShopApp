import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";
import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Activo" source="activo" />
        <TextField label="Categoria" source="categoria" />
        <TextField label="Created At" source="createdAt" />
        <TextField label="Descripcion" source="descripcion" />
        <TextField label="Duracion Base Minutos" source="duracionBaseMinutos" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Precio Base" source="precioBase" />
        <ReferenceManyField
          reference="AppointmentService"
          target="service_id"
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
          reference="ServiceStaffType"
          target="service_id"
          label="ServiceStaffTypes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Services"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Staff Types"
              source="stafftype.id"
              reference="StaffType"
            >
              <TextField source={STAFFTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StaffServiceCustom"
          target="service_id"
          label="StaffServiceCustoms"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Duracion Custom Minutos"
              source="duracionCustomMinutos"
            />
            <TextField label="ID" source="id" />
            <TextField label="Precio Custom" source="precioCustom" />
            <ReferenceField
              label="Services"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
