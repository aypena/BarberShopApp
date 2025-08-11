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

import { AppointmentServiceTitle } from "../appointmentService/AppointmentServiceTitle";
import { ServiceStaffTypeTitle } from "../serviceStaffType/ServiceStaffTypeTitle";
import { StaffServiceCustomTitle } from "../staffServiceCustom/StaffServiceCustomTitle";

export const ServiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          source="serviceStaffTypes"
          reference="ServiceStaffType"
        >
          <SelectArrayInput
            optionText={ServiceStaffTypeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
      </SimpleForm>
    </Edit>
  );
};
