import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AppointmentServiceItemTitle } from "../appointmentServiceItem/AppointmentServiceItemTitle";
import { ServiceStaffLinkTitle } from "../serviceStaffLink/ServiceStaffLinkTitle";
import { StaffCustomServiceTitle } from "../staffCustomService/StaffCustomServiceTitle";

export const ServiceEntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Activo" source="activo" />
        <ReferenceArrayInput
          source="appointmentServices"
          reference="AppointmentServiceItem"
        >
          <SelectArrayInput
            optionText={AppointmentServiceItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Categoria" source="categoria" />
        <DateTimeInput label="Created At" source="createdAt" />
        <TextInput label="Descripcion" source="descripcion" />
        <NumberInput
          step={1}
          label="Duracion Base Minutos"
          source="duracionBaseMinutos"
        />
        <TextInput label="Nombre" source="nombre" />
        <NumberInput label="Precio Base" source="precioBase" />
        <ReferenceArrayInput
          source="serviceStaffLinks"
          reference="ServiceStaffLink"
        >
          <SelectArrayInput
            optionText={ServiceStaffLinkTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="staffCustomServices"
          reference="StaffCustomService"
        >
          <SelectArrayInput
            optionText={StaffCustomServiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
