import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StaffTypeTitle } from "../staffType/StaffTypeTitle";
import { UserTitle } from "../user/UserTitle";

export const UserStaffTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="staffTypes.id"
          reference="StaffType"
          label="Staff Types"
        >
          <SelectInput optionText={StaffTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
