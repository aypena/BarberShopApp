import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const UserStaffTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="staffType.id"
          reference="StaffType"
          label="Staff Type"
        >
          <SelectInput optionText={StaffTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
