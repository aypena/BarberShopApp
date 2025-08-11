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
import { SERVICEENTITY_TITLE_FIELD } from "../serviceEntity/ServiceEntityTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { STAFFTYPE_TITLE_FIELD } from "../staffType/StaffTypeTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Activo" source="activo" />
        <TextField label="Email" source="email" />
        <TextField label="Fecha Registro" source="fechaRegistro" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Telefono" source="telefono" />
        <ReferenceManyField
          reference="AppointmentServiceItem"
          target="staff_id"
          label="AppointmentServiceItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StaffCustomService"
          target="staff_id"
          label="StaffCustomServices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Duracion Custom Minutos"
              source="duracionCustomMinutos"
            />
            <TextField label="ID" source="id" />
            <TextField label="Precio Custom" source="precioCustom" />
            <ReferenceField
              label="Service Entity"
              source="serviceentity.id"
              reference="ServiceEntity"
            >
              <TextField source={SERVICEENTITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserRole"
          target="user_id"
          label="UserRoles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Assigned At" source="assignedAt" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserStaffType"
          target="user_id"
          label="UserStaffTypes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Staff Type"
              source="stafftype.id"
              reference="StaffType"
            >
              <TextField source={STAFFTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
