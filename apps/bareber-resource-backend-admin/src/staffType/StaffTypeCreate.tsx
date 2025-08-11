import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceStaffLinkTitle } from "../serviceStaffLink/ServiceStaffLinkTitle";
import { UserStaffTypeTitle } from "../userStaffType/UserStaffTypeTitle";

export const StaffTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Descripcion" source="descripcion" />
        <TextInput label="Nombre" source="nombre" />
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
