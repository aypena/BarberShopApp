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
    </Edit>
  );
};
