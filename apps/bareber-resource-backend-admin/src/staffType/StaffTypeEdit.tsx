import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceStaffTypeTitle } from "../serviceStaffType/ServiceStaffTypeTitle";
import { UserStaffTypeTitle } from "../userStaffType/UserStaffTypeTitle";

export const StaffTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Descripcion" source="descripcion" />
        <TextInput label="Nombre" source="nombre" />
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
        <ReferenceArrayInput source="userStaffTypes" reference="UserStaffType">
          <SelectArrayInput
            optionText={UserStaffTypeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
