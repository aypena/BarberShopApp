import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AppointmentServiceTitle } from "../appointmentService/AppointmentServiceTitle";
import { StaffServiceCustomTitle } from "../staffServiceCustom/StaffServiceCustomTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { UserStaffTypeTitle } from "../userStaffType/UserStaffTypeTitle";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Activo" source="activo" />
        <ReferenceArrayInput
          source="appointmentServices"
          reference="AppointmentService"
        >
          <SelectArrayInput
            optionText={AppointmentServiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Fecha Registro" source="fechaRegistro" />
        <TextInput label="Nombre" source="nombre" />
        <TextInput label="Password Hash" source="passwordHash" />
        <ReferenceArrayInput
          source="staffServiceCustom"
          reference="StaffServiceCustom"
        >
          <SelectArrayInput
            optionText={StaffServiceCustomTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Telefono" source="telefono" />
        <ReferenceArrayInput source="userRoles" reference="UserRole">
          <SelectArrayInput
            optionText={UserRoleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="userStaffTypes" reference="UserStaffType">
          <SelectArrayInput
            optionText={UserStaffTypeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
